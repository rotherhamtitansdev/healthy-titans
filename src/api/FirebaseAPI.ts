import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  doc, getDoc, collection, getDocs, setDoc, query, where
} from "firebase/firestore";
import FoodDetailsComponentData, {
  FoodDetailsComponentDataFile,
  FoodDetailsProps
} from "../data/nutritional_information/FoodDetailsComponentData";
import { fStore } from "../config/firebase-config";
/* eslint-disable */
class FirebaseAPI {
  static fetchImages = async (firebaseName: string): Promise<string> => {
    const storage = getStorage();
    const starsRef = ref(storage, firebaseName);
    return getDownloadURL(starsRef);
  };

  static fetchAllImages = async (firebaseNames: string[]) => Promise.all(firebaseNames.map((firebaseName) => FirebaseAPI.fetchImages(firebaseName)));

  static fetchFoodDetailsComponentsData = async ():Promise<FoodDetailsComponentDataFile | undefined> => {

    const querySnapshot = await getDocs(collection(fStore, "FYPData"));

    if (!querySnapshot) return undefined;
    return querySnapshot.docs.map((doc) => doc.data())
  };

  static addFoodDetailsComponentsData = async () => {
    for (const [key, value] of Object.entries(FoodDetailsComponentData)) {
      await setDoc(doc(fStore, "FYPData", key), value);
    }
  }

  static fetchFoodDetailsSingle = async (name: string) => {
    const docRef = doc(fStore, "FYPData", name);
    const docSnap = await getDoc(docRef);
    if (docSnap) return docSnap.data()
    return undefined;
  };

  static fetchFoodDetailsSeeNext = async (category: string):Promise<FoodDetailsProps[]> => {
    const q = query(collection(fStore, "FYPData"), where("category", "==", category))
    const docSnap = await getDocs(q)
    const docs = docSnap.docs.map((doc) =>  doc.data())
    const shuffled = docs.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3).map(value => ({
      name: value.name,
      description: value.description,
      firebaseName: value.firebaseName,
      category: value.category,
      score: value.score,
      facts: value.facts
    }))
  }

  static fetchQuizData = async () => {
    const docRef = doc(fStore, "QuizData", "Quiz");
    const quizDoc = await getDoc(docRef);

    if (quizDoc.exists()) {
      return quizDoc.data();
    }
    return undefined;
  };
}

export default FirebaseAPI;
