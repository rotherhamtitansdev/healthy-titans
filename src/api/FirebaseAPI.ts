import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore";
import FoodDetailsComponentData, {
  FoodDetailsComponentDataFile
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
    if (docSnap) return docSnap.data();
    return undefined;
  };

  static fetchFoodDetailsSeeNext = async (category: string) => {
    const docRef = doc(fStore, "FYPData", "Data");
  };
}

export default FirebaseAPI;
