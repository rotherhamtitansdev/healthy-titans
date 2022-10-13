import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { doc, getDoc, collection, getDocs, setDoc, query, where } from "firebase/firestore";
import FoodDetailsComponentData, {
  FoodDetailsComponentDataFile,
  FoodDetailsProps
} from "../data/nutritional_information/FoodDetailsComponentData";
import { fStore } from "../config/firebase-config";

class FirebaseAPI {
  static fetchImages = async (firebaseName: string): Promise<string> => {
    const storage = getStorage();
    const starsRef = ref(storage, firebaseName);
    return getDownloadURL(starsRef);
  };

  static fetchAllImages = async (firebaseNames: string[]) =>
    Promise.all(firebaseNames.map((firebaseName) => FirebaseAPI.fetchImages(firebaseName)));

  static fetchFoodDetailsComponentsData = async (): Promise<
    FoodDetailsComponentDataFile | undefined
  > => {
    const querySnapshot = await getDocs(collection(fStore, "FYPData"));

    if (!querySnapshot) return undefined;
    return querySnapshot.docs.map((each) => each.data());
  };

  static addFoodDetailsComponentsData = async () => {
    Promise.all(
      Object.entries(FoodDetailsComponentData).map(async (each) => {
        await setDoc(doc(fStore, "FYPData", each[0]), each[1]);
      })
    );
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
        facts: value.facts
      })),
      paths: shuffled.map((value) => value.path)
    };
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

}

export default FirebaseAPI;
