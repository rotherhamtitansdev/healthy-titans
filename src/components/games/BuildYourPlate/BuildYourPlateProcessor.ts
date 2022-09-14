import { BYPItem, BYPTableRowFamily } from "../../../models/BYP/BYP";

import FirebaseAPI from "../../../api/FirebaseAPI";

class BuildYourPlateProcessor {
  static processRows = (BYPItems: BYPItem[]) => {
    const newBYPTableData:BYPTableRowFamily[] = [
      { family: "Meat", items: [] },
      { family: "Fish", items: [] },
      { family: "Fruit", items: [] },
      { family: "Veg", items: [] },
      { family: "Dairy & Eggs", items: [] },
      { family: "Fast Food", items: [] },
      { family: "Sweets", items: [] },
    ];

    BYPItems.forEach((item) => {
      const index = newBYPTableData.findIndex((element) => element.family === item.family);
      newBYPTableData[index].items.push(item);
    });

    newBYPTableData.map((type) => {
      const newType = type;
      newType.items = newType.items.sort(() => 0.5 - Math.random()).slice(0, 5);
      return newType;
    });

    return newBYPTableData;
  };

  static fetchAllUrls = async () => {
    const data = await FirebaseAPI.fetchFoodDetailsComponentsData();
    if (!data) return undefined;
    return Promise.all(Object.values(data).map(async (item) => (
      {
        icon: item.category, name: item.name, URL: await FirebaseAPI.fetchImages(item.firebaseName), key: item.name, score: item.score,
      }
    )));
  };

  static calculateScore = (items: BYPItem[]) => items.reduce((prev, curr) => prev + curr.score, 0);
}

export default BuildYourPlateProcessor;
