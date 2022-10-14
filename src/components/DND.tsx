import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container-typescript";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import FirebaseAPI from "../api/FirebaseAPI";

interface DropContainerModel {
  name: string;
}

const IngredientsData: DropContainerModel[] = [
  { name: "Cheese" },
  { name: "Flour" },
  { name: "Sugar" },
];

const DND = () => {
  const [getIngredientsData, setIngredientsData] = useState<DropContainerModel[]>(IngredientsData);
  const [getPlateData, setPlateData] = useState<DropContainerModel[]>([]);
  const [getImageURL, setImageURL] = useState<string | undefined>();

  const onDrop = (dropData: DropContainerModel) => {
    setIngredientsData([...getIngredientsData].filter((value) => value.name !== dropData.name));
    setPlateData([...getPlateData, dropData]);
  };

  const fetchImages = async () => {
    const storage = getStorage();
    const starsRef = ref(storage, "AND - Red.png");
    /// map() array of the imageRef.getDownloadURL() promises
    const URI: string = await getDownloadURL(starsRef);
    setImageURL(URI);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const calculateIngredientsComponents = useCallback(
    (): ReactNode[] =>
      getIngredientsData.map((item, index) => (
        <DragDropContainer
          key={index}
          targetKey="foo"
          onDrop={(e) => {
            onDrop(e.detail.dragData);
          }}
          dragData={{ name: item.name }}
        >
          <div className="hover:cursor-grab w-20 h-20 bg-amber-300">{item.name}</div>
        </DragDropContainer>
      )),
    [getIngredientsData]
  );

  const calculatePlateComponents = useCallback(
    (): ReactNode[] =>
      getPlateData.map((item, index) => (
        <div key={index} className="hover:cursor-grab w-20 h-20 bg-amber-300">
          {item.name}
        </div>
      )),
    [getPlateData]
  );

  return (
    <div>
      <button
        className="w-20 h-20 bg-titansBrightPink"
        type="submit"
        onClick={() => {
          FirebaseAPI.addFoodDetailsComponentsData();
        }}
      >
        upload
      </button>
      <button
        className="w-20 h-20 bg-titansBrightPink"
        type="submit"
        onClick={() => {
          FirebaseAPI.fetchFoodDetailsSingle("Apples");
        }}
      >
        fetch
      </button>
      <img src={getImageURL} alt="AND LOGO" />

      {calculateIngredientsComponents()}

      <DropTarget targetKey="foo">
        <div className="w-8/12 h-80 bg-red-900">
          <p>Drop here</p>
          {calculatePlateComponents()}
        </div>
      </DropTarget>

      <button
        onClick={() => {
          setIngredientsData(IngredientsData);
          setPlateData([]);
        }}
        type="submit"
      >
        <p>reset</p>
      </button>
    </div>
  );
};

export default DND;
