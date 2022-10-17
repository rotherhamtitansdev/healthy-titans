import {getDownloadURL, getStorage, ref} from "firebase/storage";

import {collection, doc, getDoc, getDocs, query, setDoc, where} from "firebase/firestore";
import FoodDetailsComponentData, {
  FoodDetailsComponentDataFile,
  FoodDetailsProps,
} from "../data/nutritional_information/FoodDetailsComponentData";
import {fStore} from "../config/firebase-config";
import {NutritionalDetailsFirebaseProps} from "../models/NutritionDetailsComponentData";

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
    return querySnapshot.docs.map((doc) => doc.data());
  };

  static addFoodDetailsComponentsData = async () => {
    for (const [key, value] of Object.entries(FoodDetailsComponentData)) {
      await setDoc(doc(fStore, "FYPData", key), value);
    }
  };

  static fetchNutritionData = async (name: string):Promise<NutritionalDetailsFirebaseProps> => {
    const querySnapshot = await getDocs(collection(fStore, "NutritionData", name , "Content"));

    // @ts-ignore
    const sorted = querySnapshot.docs.sort((a,b) => (a.data().order > b.data().order) ? 1 : ((b.data().order > a.data().order) ? -1 : 0))

    // @ts-ignore
    return sorted.map(doc => {
      const data = doc.data()
      let arr = []
      for (const [key, value] of Object.entries(data)) {
        arr.push({key: key, value: value})
      }
      return arr
    })
  };

  static fetchFoodDetailsSingle = async (name: string) => {
    const docRef = doc(fStore, "FYPData", name);
    const docSnap = await getDoc(docRef);
    if (docSnap) return docSnap.data();
    return undefined;
  };

  static fetchFoodDetailsSeeNext = async (category: string, currentName: string):Promise<{cardData: FoodDetailsProps[], paths:string[]}> => {
    const q = query(collection(fStore, "FYPData"), where("category", "==", category), where("name", "!=", currentName ))
    const docSnap = await getDocs(q)
    const docs = docSnap.docs.map((doc) => {
      let newDoc = doc.data()
      newDoc.path = doc.id
      return newDoc
    })

    const shuffled = docs.sort(() => 0.5 - Math.random()).slice(0,3)

    return {
      cardData: shuffled.map(value => ({
        name: value.name,
        description: value.description,
        firebaseName: value.firebaseName,
        category: value.category,
        score: value.score,
        facts: value.facts
      })),
      paths: shuffled.map(value => value.path)
    }
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
