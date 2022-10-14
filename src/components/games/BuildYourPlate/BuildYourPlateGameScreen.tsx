import React, { useEffect, useState } from "react";
import FirebaseAPI from "../../../api/FirebaseAPI";
import { BYPItem, BYPTableRowFamily } from "../../../models/BYP/BYP";
import TableHeaderImagesLinks, {
  imageSize,
  PlateItemPositions,
} from "../../../data/BYPData/BYPData";
import BuildYourPlateProcessor from "./BuildYourPlateProcessor";
import { useGameStartedContext } from "../GameContext";
import GameModalScreen from "../GameModalScreen";
import useWindowDimensions from "../../../functions/ScreenWidth";
import BuildYourPlatePlatePreviewScreen from "./BuildYourPlatePlatePreviewScreen";
import BuildYourPlateIcon from "./BuildYourPlateIcon";
/* eslint-disable */
const newBYPTableData: BYPTableRowFamily[] = [
  { family: "Meat", items: [] },
  { family: "Fish", items: [] },
  { family: "Fruit", items: [] },
  { family: "Veg", items: [] },
  { family: "Dairy & Eggs", items: [] },
  { family: "Fast Food", items: [] },
  { family: "Sweets", items: [] },
];

const BuildYourPlateGameScreen = () => {
  const {
    setModalContent,
    getModal,
    setModal,
    getMobilePreviewScreenFlag,
    setMobilePreviewScreenFlag,
    setIsGameStarted,
  } = useGameStartedContext();
  const [getBYPTableData, setBYPTableData] = useState<BYPTableRowFamily[]>(newBYPTableData);
  const [getBYPPlateData, setBYPPlateData] = useState<BYPItem[]>([]);
  const [getTableDataVisibility, setTableDataVisibility] = useState<boolean[]>(
    Array(7).fill(false)
  );
  const [getBYPTableHeaders, setBYPTableHeaders] = useState<React.ReactNode>();
  const [getPlateImage, setPlateImage] = useState<string>();
  const [getTickImage, setTickImage] = useState<React.ReactNode>();
  const [getButtonColor, setButtonColor] = useState<string>();
  const [getLoading, setLoading] = useState<boolean>(true);

  const { height, width } = useWindowDimensions();

  const toggleItemToPlate = (item: BYPItem) => {
    if (!getBYPTableData) return;

    let newBYPTableData = [...getBYPTableData];
    let newBYPPlateData = [...getBYPPlateData];
    let categoryIndex: number;
    let tableIndex: number;

    categoryIndex = newBYPTableData.findIndex((row) => row.family === item.family);
    tableIndex = newBYPTableData[categoryIndex].items.findIndex(
      (element) => element.name === item.name
    );

    if (!newBYPTableData[categoryIndex].items[tableIndex].selected) {
      if (getBYPPlateData.length === 5) return;

      newBYPTableData[categoryIndex].items[tableIndex].selected = true;

      newBYPPlateData.push({
        ...newBYPTableData[categoryIndex].items[tableIndex],
      });

      newBYPTableData[categoryIndex].items[tableIndex].icon = (
        <div className="relative">
          {newBYPTableData[categoryIndex].items[tableIndex].icon}
          <div className={"absolute top-1/4 left-1/4"}>{getTickImage}</div>
        </div>
      );
      setBYPPlateData(newBYPPlateData);
      setBYPTableData(newBYPTableData);
    } else {
      removeFromPlate([item]);
    }
  };

  const removeFromPlate = (item: BYPItem[]) => {
    let newBYPTableData = [...getBYPTableData];
    let newBYPPlateData = [...getBYPPlateData];

    item.forEach((plateItem) => {
      const categoryIndex = newBYPTableData.findIndex((row) => row.family === plateItem.family);
      const tableIndex = newBYPTableData[categoryIndex].items.findIndex(
        (element) => element.name === plateItem.name
      );
      const plateIndex = newBYPPlateData.findIndex(
        (currentPlateItem) => currentPlateItem.name === plateItem.name
      );

      newBYPTableData[categoryIndex].items[tableIndex].selected = false;
      newBYPTableData[categoryIndex].items[tableIndex].icon = newBYPPlateData[plateIndex].icon;
      newBYPPlateData.splice(plateIndex, 1);
    });

    setBYPPlateData(newBYPPlateData);
    setBYPTableData(newBYPTableData);
  };

  const setScoreModal = () => {
    const score = BuildYourPlateProcessor.calculateScore(getBYPPlateData);
    setModal(true);
    setModalContent({
      buttonFunc: () => {
        setIsGameStarted(false);
        removeFromPlate(getBYPPlateData);
      },
      buttonText: "Play again",
      text: BuildYourPlateProcessor.constructScoreModalText(score),
      title: BuildYourPlateProcessor.constructScoreModalTitle(score),
    });
  };

  const constructHeaders = (URLs: string[]) =>
    URLs.map((URL, index) => (
      <tr>
        <th className="p:[1px] md:p-1">
          <img
            src={URL}
            alt="x"
            className={imageSize}
            onClick={() => {
              setTableDataVisibility((newTableDataVisibility) =>
                newTableDataVisibility.map((item, idx) => (idx === index ? !item : item))
              );
            }}
          />
        </th>
      </tr>
    ));
  const constructRows = (BYPTableData: BYPTableRowFamily[]) =>
    BYPTableData.map((item, index) => (
      <tr className={getTableDataVisibility[index] ? "slide-in-row visible" : "invisible"}>
        {item.items.map((cell) => (
          <td
            onClick={() => {
              toggleItemToPlate(cell);
            }}
            className="md:p-1"
          >
            {cell.icon}
          </td>
        ))}
      </tr>
    ));

  useEffect(() => {
    BuildYourPlateProcessor.fetchAllUrls().then(async (res) => {
      if (!res) return;
      FirebaseAPI.fetchAllImages(TableHeaderImagesLinks).then((headers) => {
        const BYPItems: BYPItem[] = res.map((item) => ({
          icon: <BuildYourPlateIcon URL={item.URL} key={item.key} />,
          family: item.icon,
          key: item.key,
          name: item.name,
          selected: false,
          score: item.score,
        }));
        setBYPTableHeaders(constructHeaders(headers));
        setBYPTableData(BuildYourPlateProcessor.processRows(BYPItems));
        FirebaseAPI.fetchImages("Games/BigPlate.png").then((res) => setPlateImage(res));
        FirebaseAPI.fetchImages("Games/tick.png").then((res) => {
          setTickImage(<img src={res} />);
        });
        setLoading(false);
      });
    });
  }, []);

  useEffect(() => {
    getBYPPlateData.length !== 5
      ? setButtonColor("bg-titansDarkGrey")
      : setButtonColor("bg-titansBrightPink");
  }, [getBYPPlateData]);

  useEffect(() => {
    setModalContent({
      buttonText: "Play",
      title: "How to play",
      text: "Open a food category and select a food. You must select 5 foods to score your plate. The aim of the game is to build a healthy plate.",
    });
    setModal(true);
  }, []);

  return (
    <div className="bg-white h-full rounded-xl shadow-lg my-10 px-5 pt-5 pb-2 1.5xl:pb-10">
      {getMobilePreviewScreenFlag && getBYPPlateData.length === 5 ? (
        <div>
          <BuildYourPlatePlatePreviewScreen
            getPlateImage={getPlateImage!}
            getBYPPlateData={getBYPPlateData}
            removeFromPlate={removeFromPlate}
          />
        </div>
      ) : (
        <div>
          <GameModalScreen />
          <p className="font-bold text-[22px] pb-4 text-titansDarkBlue">Food Families</p>
          <div className="flex flex-wrap 1.5xl:flex-nowrap w-full">
            <table className="flex">
              <thead className="mr-3">{getBYPTableHeaders}</thead>
              <thead className="w-[1px] h-full bg-titansDarkBlue" />
              <tbody className="ml-3 overflow-x-hidden">
                {!getLoading && getBYPTableData && constructRows(getBYPTableData)}
              </tbody>
            </table>

            <div
              className={
                "flex flex-col items-start 1.5xl:items-center basis-full 1.5xl:basis-auto 1.5xl:ml-auto 1.5xl:-mt-16"
              }
            >
              <div className={"hidden 1.5xl:block w-full h-full relative"}>
                <img src={getPlateImage} alt={"plate image"} />
                <div>
                  {getBYPPlateData.map((plateItem, index) => {
                    return (
                      <div
                        className={"absolute " + PlateItemPositions[index]}
                        onClick={() => {
                          removeFromPlate([plateItem]);
                        }}
                      >
                        {plateItem.icon}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-titansDarkBlue text-center mt-10 1.5xl:-mt-10 flex w-full justify-between 1.5xl:block align-middle">
                <div>
                  <p className={"font-bold text-[16px] 1.5xl:text-[39px]"}>
                    {getBYPPlateData.length + " / 5"}
                  </p>
                  <p className={"font-semibold text-[12px] 1.5xl:text-[16px] mb-4"}>Items</p>
                </div>
                <button
                  type="button"
                  className={
                    "text-[12px] text-white font-bold w-44 h-11 rounded-full " + getButtonColor
                  }
                  disabled={getBYPPlateData.length !== 5}
                  onClick={() => {
                    width >= 1450 ? setScoreModal() : setMobilePreviewScreenFlag(true);
                  }}
                >
                  Score my plate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildYourPlateGameScreen;
