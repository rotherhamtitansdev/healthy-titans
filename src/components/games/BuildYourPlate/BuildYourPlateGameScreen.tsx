import React, { useEffect, useState } from "react";
import { fetchAllImages, fetchImages } from "../../../api/FirebaseAPI";
import TableHeaderImagesLinks, {
  imageSize,
  PlateItemPositions,
} from "../../../data/BYPData/BYPData";
import useWindowDimensions from "../../../functions/ScreenWidth";
import { BYPItem, BYPTableRowFamily } from "../../../models/BYP/BYP";
import { useGameStartedContext } from "../GameContext";
import GameModalScreen from "../GameModalScreen";
import BuildYourPlateIcon from "./BuildYourPlateIcon";
import BuildYourPlatePlatePreviewScreen from "./BuildYourPlatePlatePreviewScreen";
import BuildYourPlateProcessor from "./BuildYourPlateProcessor";

let newBYPTableData: BYPTableRowFamily[] = [
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
  const [getBYPTableHeaders, setBYPTableHeaders] = useState<string[]>();
  const [getPlateImage, setPlateImage] = useState<string>();
  const [getTickImage, setTickImage] = useState<React.ReactNode>();
  const [getButtonColor, setButtonColor] = useState<string>();

  const { width } = useWindowDimensions();

  const removeFromPlate = (item: BYPItem[]) => {
    newBYPTableData = [...getBYPTableData];
    const newBYPPlateData = [...getBYPPlateData];

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

  const toggleItemToPlate = (item: BYPItem) => {
    if (!getBYPTableData) return;

    newBYPTableData = [...getBYPTableData];
    const newBYPPlateData = [...getBYPPlateData];

    const categoryIndex = newBYPTableData.findIndex((row) => row.family === item.family);
    const tableIndex = newBYPTableData[categoryIndex].items.findIndex(
      (element) => element.name === item.name
    );

    if (!newBYPTableData[categoryIndex].items[tableIndex].selected) {
      if (getBYPPlateData.length === 5) return;

      newBYPTableData[categoryIndex].items[tableIndex].selected = true;

      newBYPPlateData.push({ ...newBYPTableData[categoryIndex].items[tableIndex] });

      newBYPTableData[categoryIndex].items[tableIndex].icon = (
        <div className="relative">
          {newBYPTableData[categoryIndex].items[tableIndex].icon}
          <div className="absolute top-1/4 left-1/4">{getTickImage}</div>
        </div>
      );
      setBYPPlateData(newBYPPlateData);
      setBYPTableData(newBYPTableData);
    } else {
      removeFromPlate([item]);
    }
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

  useEffect(() => {
    BuildYourPlateProcessor.fetchAllUrls().then(async (res) => {
      if (!res) return;
      fetchAllImages(TableHeaderImagesLinks).then((headers) => {
        const BYPItems: BYPItem[] = res.map((item) => ({
          icon: <BuildYourPlateIcon URL={item.URL} id={item.id} alt={item.name} />,
          family: item.icon,
          id: item.id,
          name: item.name,
          selected: false,
          score: item.score,
        }));
        setBYPTableHeaders(headers);
        setBYPTableData(BuildYourPlateProcessor.processRows(BYPItems));
        fetchImages("Games/BigPlate.png").then((BPres) => setPlateImage(BPres));
        fetchImages("Games/tick.png").then((Tickres) => {
          setTickImage(<img src={Tickres} alt="Tick" />);
        });
      });
    });
  }, []);

  useEffect(() => {
    if (getBYPPlateData.length !== 5) {
      setButtonColor("bg-titansDarkGrey");
    } else setButtonColor("bg-titansBrightPink");
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
            getPlateImage={getPlateImage}
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
              <tbody className="overflow-x-hidden">
                {getBYPTableHeaders &&
                  getBYPTableHeaders.map((URL, index) => (
                    <tr key={URL}>
                      <th className="pr-0 py-0">
                        <div className="py-0 md:py-1 pr-3 bg-white z-10 relative border-r border-titansDarkBlue">
                          <button
                            type="button"
                            onClick={() => {
                              setTableDataVisibility((newTableDataVisibility) =>
                                newTableDataVisibility.map((item, idx) =>
                                  idx === index ? !item : item
                                )
                              );
                            }}
                          >
                            <img
                              src={URL}
                              alt={newBYPTableData[index].family}
                              className={imageSize}
                            />
                          </button>
                        </div>
                      </th>
                      <td className="bg-white z-10 relative pr-3" />
                      {getBYPTableData[index].items.map((cell) => (
                        <td
                          key={cell.name}
                          className={
                            getTableDataVisibility[index]
                              ? "slide-in-row visible py-0 md:py-1"
                              : "invisible py-0"
                          }
                        >
                          <button
                            type="button"
                            onClick={() => {
                              toggleItemToPlate(cell);
                            }}
                            className="relative text-center group"
                          >
                            {cell.icon}
                            <span className="text-[8px] bg-white bg-opacity-70 absolute rounded top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 invisible sm:text-xs lg:group-hover:visible">
                              {cell.name}
                            </span>
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="flex flex-col items-start 1.5xl:items-center basis-full 1.5xl:basis-auto 1.5xl:ml-auto 1.5xl:-mt-16">
              <div className="hidden 1.5xl:block w-full h-full relative">
                <img src={getPlateImage} alt="plate" />
                <div>
                  {getBYPPlateData.map((plateItem, index) => (
                    <button
                      className={`absolute ${PlateItemPositions[index]}`}
                      type="button"
                      onClick={() => {
                        removeFromPlate([plateItem]);
                      }}
                      key={plateItem.id}
                    >
                      {plateItem.icon}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-titansDarkBlue text-center mt-10 1.5xl:-mt-10 flex w-full justify-between 1.5xl:block align-middle">
                <div>
                  <p className="font-bold text-[16px] 1.5xl:text-[39px]">
                    {`${getBYPPlateData.length} / 5`}
                  </p>
                  <p className="font-semibold text-[12px] 1.5xl:text-[16px] mb-4">Items</p>
                </div>
                <button
                  type="button"
                  className={`text-[12px] text-white font-bold w-44 h-11 rounded-full ${getButtonColor}`}
                  disabled={getBYPPlateData.length !== 5}
                  onClick={() => {
                    if (width >= 1450) {
                      setScoreModal();
                    } else setMobilePreviewScreenFlag(true);
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
