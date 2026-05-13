import React, { useEffect, useState } from "react";
import { fetchImages } from "../../../api/FirebaseAPI";
import useWindowDimensions from "../../../functions/ScreenWidth";
import { BYPItem, BYPTableRowFamily } from "../../../models/BYP/BYP";
import { useGameStartedContext } from "../GameContext";
import GameModalScreen from "../GameModalScreen";
import BuildYourPlateIcon from "./BuildYourPlateIcon";
import BuildYourPlatePlatePreviewScreen from "./BuildYourPlatePlatePreviewScreen";
import BuildYourPlateProcessor from "./BuildYourPlateProcessor";
import BuildYourPlateVisualPlate from "./BuildYourPlateVisualPlate";
import trackAnalyticsEvent from "../../../config/analytics";

let newBYPTableData: BYPTableRowFamily[] = [];

const BuildYourPlateGameScreen = (props: { mealTitle: string }) => {
  const {
    setModalContent,
    setModal,
    getMobilePreviewScreenFlag,
    setMobilePreviewScreenFlag,
    setIsGameStarted,
  } = useGameStartedContext();
  const [getBYPTableData, setBYPTableData] = useState<BYPTableRowFamily[]>(newBYPTableData);
  const [getBYPPlateData, setBYPPlateData] = useState<BYPItem[]>([]);
  const [getBYPTableHeaders, setBYPTableHeaders] = useState<{ family: string }[] | undefined>();
  const [activeFamilyIndex, setActiveFamilyIndex] = useState<number>(0);
  const [getTickImage, setTickImage] = useState<React.ReactNode>();
  const [getButtonColor, setButtonColor] = useState<string>();
  const mealLabel = props.mealTitle.toLowerCase();
  const minimumItemsToScore = 3;
  const maximumItemsAllowed = 6;
  const platePreviewItems = getBYPPlateData.slice(0, maximumItemsAllowed);

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
      if (newBYPPlateData.length >= maximumItemsAllowed) {
        return;
      }

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
    const percentage = BuildYourPlateProcessor.calculatePercentage(score, getBYPPlateData.length);
    trackAnalyticsEvent("build_your_plate_scored", {
      meal_type: props.mealTitle.toLowerCase(),
      item_count: getBYPPlateData.length,
      percentage_score: percentage,
    });
    setModal(true);
    setModalContent({
      buttonFunc: () => {
        setIsGameStarted(false);
        removeFromPlate(getBYPPlateData);
      },
      buttonText: "Play again",
      text: BuildYourPlateProcessor.constructScoreModalText(getBYPPlateData),
      title: BuildYourPlateProcessor.constructScoreModalTitle(score, getBYPPlateData.length),
    });
  };

  useEffect(() => {
    BuildYourPlateProcessor.fetchAllUrls().then(async (res) => {
      if (!res) return;

      const families = Array.from(new Set(res.map((item) => item.icon)));
      const headers = families.map((family) => ({ family }));

      const BYPItems: BYPItem[] = res.map((item) => ({
        icon: <BuildYourPlateIcon URL={item.URL} id={item.id} alt={item.name} />,
        family: item.icon,
        id: item.id,
        name: item.name,
        selected: false,
        score: item.score,
      }));

      const processed = BuildYourPlateProcessor.processRows(BYPItems, families);
      newBYPTableData = processed;
      setBYPTableHeaders(headers);
      setBYPTableData(processed);
      setActiveFamilyIndex(0);

      fetchImages("Games/tick.png")
        .then((tickUrl: string) => {
          setTickImage(<img src={tickUrl} alt="Tick" />);
        })
        .catch(() => {
          setTickImage(<img src="" alt="Tick" />);
        });
    });
  }, []);

  useEffect(() => {
    if (getBYPPlateData.length < minimumItemsToScore) {
      setButtonColor("bg-titansDarkGrey");
    } else setButtonColor("bg-titansBrightPink");
  }, [getBYPPlateData, minimumItemsToScore]);

  useEffect(() => {
    setModalContent({
      buttonText: "Play",
      title: "How to play",
      text: `Build a healthy ${mealLabel} plate. Open a food category and choose up to ${maximumItemsAllowed} foods for your plate. Pick at least ${minimumItemsToScore} foods before scoring. Fruit/veg, wholegrains and lean proteins score highest; fast food and sweets lower your score. Swap items to try to balance your plate.`,
    });
    setModal(true);
  }, [maximumItemsAllowed, mealLabel, minimumItemsToScore, setModal, setModalContent]);

  const activeFamily = getBYPTableHeaders?.[activeFamilyIndex];
  const activeItems = getBYPTableData[activeFamilyIndex]?.items || [];

  return (
    <div className="bg-white h-full rounded-xl shadow-lg my-10 px-5 pt-5 pb-2 1.5xl:pb-10">
      {getMobilePreviewScreenFlag && getBYPPlateData.length > 0 ? (
        <div>
          <BuildYourPlatePlatePreviewScreen
            getBYPPlateData={getBYPPlateData}
            removeFromPlate={removeFromPlate}
          />
        </div>
      ) : (
        <div>
          <GameModalScreen />
          <div className="pb-4">
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#2464A5]">
              {props.mealTitle}
            </p>
            <p className="font-bold text-[22px] text-titansDarkBlue">Food Families</p>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFF] p-4 sm:p-5">
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#2464A5] mb-3">
                Choose a family
              </p>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {getBYPTableHeaders &&
                  getBYPTableHeaders.map(({ family }, index) => {
                    const isActive = index === activeFamilyIndex;

                    return (
                      <button
                        key={family || index}
                        type="button"
                        onClick={() => {
                          setActiveFamilyIndex(index);
                        }}
                        className={`shrink-0 rounded-2xl border-2 p-2 min-w-[5.5rem] sm:min-w-[6.5rem] flex items-center justify-center transition ${
                          isActive
                            ? "border-[#D14267] bg-[#FFF4F8] shadow-md"
                            : "border-slate-200 bg-white hover:border-[#D14267]"
                        }`}
                      >
                        <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] rounded-xl bg-slate-100 text-titansDarkBlue text-[10px] sm:text-xs font-semibold flex items-center justify-center px-2 text-center">
                          {family || "Food"}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="flex flex-col 1.5xl:flex-row gap-8 w-full">
              <div className="flex-1 rounded-3xl border border-slate-200 bg-[#F8FAFF] p-5 sm:p-6 min-h-[22rem]">
                <div className="mb-5">
                  <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#D14267]">
                    Pick foods
                  </p>
                  <h3 className="text-titansDarkBlue text-2xl font-semibold">
                    {activeFamily?.family || "Choose a family"}
                  </h3>
                  <p className="text-homepageHeaderText text-sm sm:text-base font-medium">
                    Tap foods to add or remove them from your plate. Maximum{" "}
                    {maximumItemsAllowed} items.
                  </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {activeItems.map((cell) => (
                    <button
                      key={cell.name}
                      type="button"
                      onClick={() => {
                        toggleItemToPlate(cell);
                      }}
                      disabled={!cell.selected && getBYPPlateData.length >= maximumItemsAllowed}
                      className={`relative text-center group rounded-2xl bg-white p-3 shadow-sm border border-transparent transition ${
                        !cell.selected && getBYPPlateData.length >= maximumItemsAllowed
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:border-[#D14267]"
                      }`}
                    >
                      <div className="flex justify-center">{cell.icon}</div>
                      <span className="mt-2 block text-[10px] sm:text-xs font-medium text-homepageHeaderText leading-tight">
                        {cell.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start 1.5xl:items-center w-full 1.5xl:w-[24rem] shrink-0">
                <div className="hidden 1.5xl:block w-full">
                  <BuildYourPlateVisualPlate
                    items={platePreviewItems}
                    onRemoveItem={(plateItem) => {
                      removeFromPlate([plateItem]);
                    }}
                    sizeClassName="w-80 h-80"
                  />
                </div>

                <div className="text-titansDarkBlue text-center mt-6 1.5xl:-mt-2 flex w-full justify-between 1.5xl:block align-middle">
                  <div>
                    <p className="font-bold text-[16px] 1.5xl:text-[39px]">
                      {getBYPPlateData.length} / {maximumItemsAllowed}
                    </p>
                    <p className="font-semibold text-[12px] 1.5xl:text-[16px] mb-4">Selected</p>
                    <p className="text-[11px] 1.5xl:text-[14px] text-homepageHeaderText font-medium">
                      Pick {minimumItemsToScore}-{maximumItemsAllowed}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`text-[12px] text-white font-bold w-44 h-11 rounded-full ${getButtonColor}`}
                    disabled={getBYPPlateData.length < minimumItemsToScore}
                    onClick={() => {
                      if (width >= 1450) {
                        setScoreModal();
                      } else setMobilePreviewScreenFlag(true);
                    }}
                  >
                    Score my plate
                  </button>
                </div>
                {getBYPPlateData.length > 0 && (
                  <div className="mt-5 w-full rounded-2xl bg-[#F5F7FF] p-4">
                    <p className="text-titansDarkBlue font-semibold text-base mb-2">
                      Selected foods
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {getBYPPlateData.map((plateItem) => (
                        <button
                          key={plateItem.id}
                          type="button"
                          className="bg-white rounded-xl px-3 py-2 text-xs font-medium text-homepageHeaderText shadow-sm"
                          onClick={() => {
                            removeFromPlate([plateItem]);
                          }}
                        >
                          {plateItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildYourPlateGameScreen;
