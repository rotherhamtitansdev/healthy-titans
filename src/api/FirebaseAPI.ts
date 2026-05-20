import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  documentId,
} from "firebase/firestore";
import { fStore } from "../config/firebase-config";
import { NutritionalDetailsFirebaseProps } from "../models/NutritionDetailsComponentData";
import { FoodDetailsProps } from "../models/FoodDetailsProps";
import { QuizProps } from "../models/Quiz/QuizProps";
import {
  NutrientActivityCard,
  NutrientActivityDocument,
} from "../data/NutrientActivityData";
import { RecipeItem } from "../models/Recipe";
import { CaseStudy } from "../data/MentalHealthCaseStudies";
import { BlogArticle } from "../data/BlogArticles";

interface SeeNextProps {
  key: number;
  name: string;
  path: string;
  img: string;
}

const asBoolean = (value: unknown): boolean | undefined => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }
  return undefined;
};

const downloadUrlCache = new Map<string, string>();

export const fetchImages = async (firebaseName: string): Promise<string> => {
  const cached = downloadUrlCache.get(firebaseName);
  if (cached) return cached;
  const storage = getStorage();
  const starsRef = ref(storage, firebaseName);
  const url = await getDownloadURL(starsRef);
  downloadUrlCache.set(firebaseName, url);
  return url;
};

export const fetchVideos = async (firebaseVideoName: string): Promise<string> => {
  const cached = downloadUrlCache.get(firebaseVideoName);
  if (cached) return cached;
  const storage = getStorage();
  const starsRef = ref(storage, firebaseVideoName);
  const url = await getDownloadURL(starsRef);
  downloadUrlCache.set(firebaseVideoName, url);
  return url;
};

export const fetchAllImages = async (firebaseNames: string[]) =>
  Promise.all(firebaseNames.map((firebaseName) => fetchImages(firebaseName)));

export const fetchDataFromPath = async (path: string) => {
  const querySnapshot = await getDocs(collection(fStore, path));

  if (!querySnapshot) return undefined;
  return querySnapshot.docs.map((each) => each.data());
};

export const fetchDataFromSubpath = async (path: string, subpath: string) => {
  const docRef = doc(fStore, path, subpath);
  const dataDoc = await getDoc(docRef);

  if (dataDoc.exists()) {
    return dataDoc.data();
  }
  return undefined;
};

export const addFoodDetailsComponentsData = async () => {
  await Promise.all(
    Object.entries(fetchDataFromPath("FYPData")).map(async (each) => {
      await setDoc(doc(fStore, "FYPData", each[0]), each[1]);
    })
  );
};

export const fetchFoodDetailsSeeNext = async (
  category: string,
  currentName: string
): Promise<{ cardData: FoodDetailsProps[]; paths: string[] }> => {
  const q = query(
    collection(fStore, "FYPData"),
    where("category", "==", category),
    where("name", "!=", currentName)
  );
  const docSnap = await getDocs(q);
  const docs = docSnap.docs.map((data) => {
    const newDoc = data.data();
    newDoc.path = data.id;
    return newDoc;
  });

  const shuffled = docs.sort(() => 0.5 - Math.random()).slice(0, 3);

  return {
    cardData: shuffled.map((value) => ({
      name: value.name,
      description: value.description,
      firebaseName: value.firebaseName,
      category: value.category,
      score: value.score,
      facts: value.facts,
    })),
    paths: shuffled.map((value) => value.path),
  };
};

export const fetchNutritionData = async (
  name: string
): Promise<NutritionalDetailsFirebaseProps> => {
  const querySnapshot = await getDocs(collection(fStore, "NutritionData", name, "Content"));

  const sorted = querySnapshot.docs.sort((a, b) => {
    if (a.data().order > b.data().order) {
      return 1;
    }
    if (b.data().order > a.data().order) {
      return -1;
    }
    return 0;
  });

  return sorted.map((doc2) => {
    const data = doc2.data();
    return Object.entries(data).map(([key, value]) => ({ key, value }));
  });
};

export const fetchNutritionSeeNext = async (currentName: string): Promise<SeeNextProps[]> => {
  const q = query(collection(fStore, "NutritionData"), where(documentId(), "!=", currentName));
  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.sort(() => 0.5 - Math.random()).slice(0, 3);

  return Promise.all(
    docs.map(async (sortedDoc, index) => {
      const dataDoc = await getDoc(doc(fStore, "NutritionData", sortedDoc.id, "Content", "Main"));
      const URI = await fetchImages(dataDoc.data()?.firebaseName);

      return { key: index, name: dataDoc.data()?.name, path: docs[index].id, img: URI };
    })
  );
};

// Fetch all quizzes with their document id for selection
export const fetchQuizzes = async (): Promise<(QuizProps & { id: string })[]> => {
  const querySnapshot = await getDocs(collection(fStore, "QuizData"));

  return querySnapshot.docs.map((doc2) => ({ id: doc2.id, ...(doc2.data() as QuizProps) }));
};

export const fetchRecipes = async (): Promise<Array<Partial<RecipeItem> & { docId: string }>> => {
  const querySnapshot = await getDocs(collection(fStore, "RecipesData"));

  return querySnapshot.docs.map((recipeDoc) => ({
    docId: recipeDoc.id,
    ...(recipeDoc.data() as Partial<RecipeItem>),
  }));
};

export type BuildYourPlateFood = {
  name: string;
  category: string;
  firebaseName: string;
  score: number;
};

const normalizeBuildYourPlateFood = (
  data: Partial<BuildYourPlateFood>,
): BuildYourPlateFood | undefined => {
  const name = String(data.name || "").trim();
  const category = String(data.category || "").trim();
  const firebaseName = String(data.firebaseName || "").trim();
  let numericScore = 0;
  if (typeof data.score === "number") {
    numericScore = data.score;
  } else if (typeof data.score === "string") {
    numericScore = Number(data.score);
  }

  if (!name || !category || !firebaseName) return undefined;

  return {
    name,
    category,
    firebaseName,
    score: Number.isFinite(numericScore) ? numericScore : 0,
  };
};

export const fetchBuildYourPlateFoods = async (): Promise<BuildYourPlateFood[]> => {
  const primarySnapshot = await getDocs(collection(fStore, "BuildYourPlateData"));

  if (!primarySnapshot.empty) {
    return primarySnapshot.docs
      .map((foodDoc) => normalizeBuildYourPlateFood(foodDoc.data() as Partial<BuildYourPlateFood>))
      .filter((food): food is BuildYourPlateFood => Boolean(food));
  }

  const legacySnapshot = await getDocs(collection(fStore, "FYPData"));

  return legacySnapshot.docs
    .map((foodDoc) => normalizeBuildYourPlateFood(foodDoc.data() as Partial<BuildYourPlateFood>))
    .filter((food): food is BuildYourPlateFood => Boolean(food));
};

const toTextArray = (value: unknown): string[] =>
  Array.isArray(value)
    ? value
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

const normalizeMentalHealthCaseStudy = (
  id: string,
  data: Partial<CaseStudy>,
): CaseStudy => ({
  id: String(data.id || id),
  name: String(data.name || ""),
  title: String(data.title || ""),
  summary: String(data.summary || ""),
  image: String(data.image || ""),
  videoUrl: String(
    data.videoUrl ||
      (data as Partial<CaseStudy> & { youtubeUrl?: string; video?: string }).youtubeUrl ||
      (data as Partial<CaseStudy> & { youtubeUrl?: string; video?: string }).video ||
      "",
  ),
  videoTitle: String(data.videoTitle || "Video highlight"),
  featured: asBoolean((data as Partial<CaseStudy> & { featured?: unknown }).featured) || false,
  details: toTextArray(data.details),
  background: toTextArray(data.background),
  whatHelped: toTextArray(data.whatHelped),
  takeaway: String(data.takeaway || ""),
});

export const fetchMentalHealthCaseStudies = async (): Promise<CaseStudy[]> => {
  const querySnapshot = await getDocs(collection(fStore, "MentalHealthCaseStudies"));

  return querySnapshot.docs
    .map((caseStudyDoc) =>
      normalizeMentalHealthCaseStudy(caseStudyDoc.id, caseStudyDoc.data() as Partial<CaseStudy>),
    )
    .filter(
      (study) =>
        study.id &&
        study.name &&
        study.summary &&
        study.details.length > 0 &&
        study.background.length > 0 &&
        study.whatHelped.length > 0,
    );
};

export type MentalHealthMission = {
  title: string;
  description: string;
};

const normalizeMentalHealthMission = (
  data: Partial<MentalHealthMission>,
): MentalHealthMission => ({
  title: String(data.title || ""),
  description: String(data.description || ""),
});

export const fetchMentalHealthMissions = async (): Promise<MentalHealthMission[]> => {
  const querySnapshot = await getDocs(collection(fStore, "MentalHealthWeeklyMissions"));

  return querySnapshot.docs
    .map((missionDoc) =>
      normalizeMentalHealthMission(missionDoc.data() as Partial<MentalHealthMission>),
    )
    .filter((mission) => mission.title && mission.description);
};

const normalizeBlogArticle = (id: string, data: Partial<BlogArticle>): BlogArticle => ({
  id: String(data.id || id),
  title: String(data.title || ""),
  summary: String(data.summary || ""),
  category: String(data.category || "Food") as BlogArticle["category"],
  publishedAt: String(data.publishedAt || ""),
  readTime: String(data.readTime || ""),
  heroImage: String(data.heroImage || ""),
  body: toTextArray(data.body),
  tips: toTextArray(data.tips),
  videoUrl: String(
    data.videoUrl ||
      (data as Partial<BlogArticle> & { youtubeUrl?: string; video?: string }).youtubeUrl ||
      (data as Partial<BlogArticle> & { youtubeUrl?: string; video?: string }).video ||
      "",
  ),
  challenge: String((data as Partial<BlogArticle> & { challenge?: string }).challenge || ""),
  featured: asBoolean((data as Partial<BlogArticle> & { featured?: unknown }).featured) || false,
});

export const fetchBlogArticles = async (): Promise<BlogArticle[]> => {
  const querySnapshot = await getDocs(collection(fStore, "BlogArticles"));

  return querySnapshot.docs
    .map((articleDoc) =>
      normalizeBlogArticle(articleDoc.id, articleDoc.data() as Partial<BlogArticle>),
    )
    .filter((article) => article.id && article.title && article.summary && article.body.length > 0);
};

const normalizeNutrientActivityCard = (
  card: Partial<NutrientActivityCard>,
): NutrientActivityCard => ({
  id: String(card.id || ""),
  text: String(card.text || ""),
  category: (card.category || "false") as NutrientActivityCard["category"],
  ...(card.emoji ? { emoji: String(card.emoji) } : {}),
});

const normalizeNutrientActivityDocument = (
  id: string,
  data: Partial<NutrientActivityDocument>,
): NutrientActivityDocument => ({
  slug: String(data.slug || id),
  name: String(data.name || id),
  label: String(data.label || data.name || id),
  symbol: String(data.symbol || ""),
  symbolBg: String(data.symbolBg || "#2464A5"),
  symbolEmoji: String(data.symbolEmoji || ""),
  quickRole: String(data.quickRole || ""),
  quickSymptoms: String(data.quickSymptoms || ""),
  quickSources: String(data.quickSources || ""),
  instructions: String(data.instructions || ""),
  cards: Array.isArray(data.cards)
    ? data.cards
        .map((card) => normalizeNutrientActivityCard(card))
        .filter((card) => card.id && card.text && card.category)
    : [],
});

export const fetchNutrientActivities = async (): Promise<NutrientActivityDocument[]> => {
  const querySnapshot = await getDocs(collection(fStore, "nutrientActivities"));

  return querySnapshot.docs.map((activityDoc) =>
    normalizeNutrientActivityDocument(
      activityDoc.id,
      activityDoc.data() as Partial<NutrientActivityDocument>,
    ),
  );
};

export const fetchNutrientActivity = async (
  slug: string,
): Promise<NutrientActivityDocument | undefined> => {
  const activityDoc = await getDoc(doc(fStore, "nutrientActivities", slug));

  if (!activityDoc.exists()) return undefined;

  return normalizeNutrientActivityDocument(
    activityDoc.id,
    activityDoc.data() as Partial<NutrientActivityDocument>,
  );
};
