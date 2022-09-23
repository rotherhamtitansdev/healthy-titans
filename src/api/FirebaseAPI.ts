import { getDownloadURL, getStorage, ref } from "firebase/storage";
import {
  doc, getDoc, collection, addDoc, getDocs,
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
    const docRef = doc(fStore, "FYPData", "Data");
    const docSnap = await getDoc(docRef);

    if (!docSnap) return undefined;
    return docSnap.data();
  };

  static addFoodDetailsComponentsData = async () => {
    const docRef = doc(fStore, "FYPData", "Data");

    for (const [key, value] of Object.entries(FoodDetailsComponentData)) {
      const colRef = collection(docRef, value.name);
      await addDoc(colRef, value);
    }

  };

  static fetchFoodDetailsSingle = async (name: string) => {
    const docRef = doc(fStore, "FYPData", "Data");
    const colRef = collection(docRef, name);
    const docs = await getDocs(colRef);

    if (docs.docs[0].exists()) {
      return docs.docs[0].data();
    }
    return undefined;
  };
}

export default FirebaseAPI;
