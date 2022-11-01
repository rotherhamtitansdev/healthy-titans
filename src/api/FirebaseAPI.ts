import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { FoodDetailsProps } from "../data/nutritional_information/FoodDetailsComponentData";
import { fStore } from "../config/firebase-config";
import { NutritionalDetailsFirebaseProps } from "../models/NutritionDetailsComponentData";

interface SeeNextProps {
  key: number;
  name: string;
  path: string;
  img: string;
}

class FirebaseAPI {
  static fetchImages = async (firebaseName: string): Promise<string> => {
    const storage = getStorage();
    const starsRef = ref(storage, firebaseName);
    return getDownloadURL(starsRef);
  };

  static fetchAllImages = async (firebaseNames: string[]) =>
    Promise.all(firebaseNames.map((firebaseName) => FirebaseAPI.fetchImages(firebaseName)));

  static fetchFoodDetailsComponentsData = async (): Promise<
    FoodDetailsProps[] | undefined
  > => {
    const querySnapshot = await getDocs(collection(fStore, "FYPData"));
    if (!querySnapshot) return undefined;
     return querySnapshot.docs.map((each) => each.data() as FoodDetailsProps);
  };

  static fetchFoodDetailsSingle = async (name: string) => {
    const docRef = doc(fStore, "FYPData", name);
    const docSnap = await getDoc(docRef);
    if (docSnap) return docSnap.data() as FoodDetailsProps;
    return undefined;
  };

  static fetchFoodDetailsSeeNext = async (
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

  static fetchNutritionData = async (name: string): Promise<NutritionalDetailsFirebaseProps> => {
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
      return Object.entries(data).map(([key,value]) => ({key,value}));
    });
  };

  static fetchNutritionSeeNext = async (currentName: string): Promise<SeeNextProps[]> => {
    const q = query(collection(fStore, "NutritionData"), where(documentId(), "!=", currentName));
    const querySnapshot = await getDocs(q);

    const docs = querySnapshot.docs.sort(() => 0.5 - Math.random()).slice(0, 3);

    return Promise.all(
      docs.map(async (sortedDoc, index) => {
        const dataDoc = await getDoc(doc(fStore, "NutritionData", sortedDoc.id, "Content", "Main"));

        const URI = await FirebaseAPI.fetchImages(dataDoc.data()?.firebaseName);

        return { key: index, name: dataDoc.data()?.name, path: docs[index].id, img: URI };
      })
    );
  };

  static fetchQuizData = async () => {
    const docRef = doc(fStore, "QuizData", "Quiz");
    const quizDoc = await getDoc(docRef);

    if (quizDoc.exists()) {
      return quizDoc.data();
    }
    return undefined;
  };

  static fetchAboutUsData = async () => {
    const docRef = doc(fStore, "AboutUsData", "Data");
    const aboutUsDoc = await getDoc(docRef);

    if (aboutUsDoc.exists()) {
      return aboutUsDoc.data();
    }
    return undefined;
  };

  static fetchChallengesData = async (currentName: string) => {
    const docRef = doc(fStore, "Challenges", currentName);
    const challengesDoc = await getDoc(docRef);

    if (challengesDoc.exists()) {
      return challengesDoc.data();
    }
    return undefined;
  };

  static fetchChallengesList = async () => {
    const querySnapshot = await getDocs(collection(fStore, "ChallengesData"));

    if (!querySnapshot) return undefined;
    return querySnapshot.docs.map((each) => each.data());
  };
}

export default FirebaseAPI;
