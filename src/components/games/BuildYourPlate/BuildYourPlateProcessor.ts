import { BYPItem, BYPTableRowFamily } from "../../../models/BYP/BYP";

import FirebaseAPI from "../../../api/FirebaseAPI";

class BuildYourPlateProcessor {
  static processRows = (BYPItems: BYPItem[]) => {
    const newBYPTableData: BYPTableRowFamily[] = [
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
    return Promise.all(
      data.map(async (item) => ({
        icon: item.category,
        name: item.name,
        URL: await FirebaseAPI.fetchImages(item.firebaseName),
        id: item.name,
        score: item.score,
      }))
    );
  };

  static calculateScore = (items: BYPItem[]) => items.reduce((prev, curr) => prev + curr.score, 0);

  static constructScoreModalText = (score: number): string => {
    if (score >= 45) return "Fantastic!";
    if (score >= 40 && score < 45) return "Great!";
    if (score >= 30 && score < 50) return "Very good!";
    if (score >= 20 && score < 30) return "Good!";
    if (score >= 10 && score < 20) return "Could be better!";
    return "Needs improvement!";
  };

  static constructScoreModalTitle = (score: number): string => `Score: ${String(score)} out of 50`;
}

export default BuildYourPlateProcessor;
