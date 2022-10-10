import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  doc, getDoc, collection, getDocs, setDoc
} from "firebase/firestore";
import FoodDetailsComponentData, { FoodDetailsComponentDataFile } from "../data/nutritional_information/FoodDetailsComponentData";
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

  static fetchFoodDetailsSeeNext = async (category: string) => {
    const docRef = doc(fStore, "FYPData", "Data");
  }

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
