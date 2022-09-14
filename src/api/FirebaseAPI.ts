import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { fStore } from "../index";
import { FoodDetailsComponentDataFile } from "../data/nutritional_information/FoodDetailsComponentData";

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
}

export default FirebaseAPI;
