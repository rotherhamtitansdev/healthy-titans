import React, { useEffect, useState } from "react";
import FirebaseAPI from "../../../api/FirebaseAPI";
import { BYPItem, BYPTableRowFamily } from "../../../models/BYP/BYP";
import TableHeaderImagesLinks from "../../../data/BYPData/BYPData";
import BuildYourPlateProcessor from "./BuildYourPlateProcessor";
import { useFYPStartedContext } from "./BuildYourPlateContext";

/* eslint-disable */
const newBYPTableData:BYPTableRowFamily[] = [
  { family: "Meat", items: [] },
  { family: "Fish", items: [] },
  { family: "Fruit", items: [] },
  { family: "Veg", items: [] },
  { family: "Dairy & Eggs", items: [] },
  { family: "Fast Food", items: [] },
  { family: "Sweets", items: [] },
];

const BuildYourPlateGameScreen = () => {

  const { getScore, setScore } = useFYPStartedContext();

  const [getBYPTableData, setBYPTableData] = useState<BYPTableRowFamily[]>(newBYPTableData);
  const [getTableDataVisibility, setTableDataVisibility] = useState<boolean[]>(Array(7).fill(false));
  const [getBYPTableHeaders, setBYPTableHeaders] = useState<React.ReactNode>();
  const [getPlateImage, setPlateImage] = useState<string>();
  const [getButtonColor, setButtonColor] = useState<string>()
  const [getLoading, setLoading] = useState<boolean>(true);

  const constructHeaders = (URLs: string[]) => URLs.map((URL, index) => (
    <tr>
      <th className="p:[1px] md:p-1">
        <img
          src={URL}
          alt="x"
          className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px]"
          onClick={() => {
            setTableDataVisibility((newTableDataVisibility) => newTableDataVisibility.map((item, idx) => (idx === index ? !item : item)));
          }}
        />
      </th>
    </tr>
  ));
  const constructRows = (BYPTableData: BYPTableRowFamily[]) => BYPTableData.map((item, index) => (
        <tr className={(getTableDataVisibility[index]) ? "slide-in-row visible" : "invisible"}>
          {item.items.map((cell) => (<td className="md:p-1">{cell.icon}</td>))}
        </tr>
      )
    );

  useEffect(() => {
    BuildYourPlateProcessor.fetchAllUrls().then(async (res) => {
      FirebaseAPI.fetchAllImages(TableHeaderImagesLinks).then((headers) => {
        const BYPItems: BYPItem[] = res.map((item) => (
          {
            icon: <img src={item.URL} alt="x" className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px]"
                       key={item.key} />,
            family: item.icon,
            key: item.key,
            name: item.name,
          }
        ));
        setBYPTableHeaders(constructHeaders(headers));
        setBYPTableData(BuildYourPlateProcessor.processRows(BYPItems));
        FirebaseAPI.fetchImages("Games/BigPlate.png").then((res) => setPlateImage(res))
        setLoading(false);
      });
    });
  }, []);

  useEffect(() => {
    getScore !== 5 ? setButtonColor("bg-titansDarkGrey") : setButtonColor("bg-titansBrightPink")
  },[getScore])

  return (
    <div className="font-quicksand bg-white h-full rounded-xl shadow-lg my-10 px-5 pt-5 pb-2">
      <p className="font-bold text-[22px] pb-4 text-titansDarkBlue">Food Families</p>
      <div className="flex flex-wrap 1.5xl:flex-nowrap w-full">

        <table className="flex">
          <thead className="mr-3">{getBYPTableHeaders}</thead>
          <thead className="w-[1px] h-full bg-titansDarkBlue" />
          <tbody className="ml-3 overflow-x-hidden">{(!getLoading && getBYPTableData) && constructRows(getBYPTableData)}</tbody>
        </table>

        <div className={"flex flex-col items-start 1.5xl:items-center basis-full 1.5xl:basis-auto 1.5xl:ml-auto 1.5xl:-mt-16"}>
          <img src={getPlateImage} alt={"plate image"} className={"hidden 1.5xl:block w-full h-full"}/>

          <div className="font-quicksand text-titansDarkBlue text-center mt-10 1.5xl:-mt-10 flex w-full justify-between 1.5xl:block align-middle">
            <div>
              <p className={"font-bold text-[16px] 1.5xl:text-[39px]"}>{getScore + " / 5"}</p>
              <p className={"font-semibold text-[12px] 1.5xl:text-[16px] mb-4"}>Items</p>
            </div>
            <button type="button"
                    className={"text-[12px] text-white font-bold w-44 h-11 rounded-full " + getButtonColor}
                    disabled={getScore !== 5}
            >
              Score my plate
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BuildYourPlateGameScreen;
