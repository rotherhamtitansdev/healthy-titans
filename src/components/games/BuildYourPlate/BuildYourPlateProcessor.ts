import { BYPItem, BYPTableRowFamily } from "../../../models/BYP/BYP";

import { fetchBuildYourPlateFoods, fetchImages } from "../../../api/FirebaseAPI";

class BuildYourPlateProcessor {
  static readonly maxScorePerItem = 10;

  static readonly drinksAndYogurtsFamily = "Juices & Yogurts";

  static normalizeFamily = (category: string, name: string): string => {
    const categoryText = String(category || "").toLowerCase();
    const nameText = String(name || "").toLowerCase();
    const drinkPattern = /(juice|smoothie|milkshake|shake|milk\b|drink|water|kefir|lassi)/;

    if (drinkPattern.test(categoryText) || drinkPattern.test(nameText)) {
      return BuildYourPlateProcessor.drinksAndYogurtsFamily;
    }

    return category;
  };

  static processRows = (BYPItems: BYPItem[], families?: string[]) => {
    const familyOrder =
      families && families.length
        ? families
        : Array.from(new Set(BYPItems.map((item) => item.family)));

    const table: BYPTableRowFamily[] = familyOrder.map((family) => ({ family, items: [] }));

    BYPItems.forEach((item) => {
      const index = table.findIndex((element) => element.family === item.family);
      if (index >= 0) {
        table[index].items.push(item);
      } else {
        table.push({ family: item.family, items: [item] });
      }
    });

    return table.map((type) => {
      const newType = type;
      newType.items = newType.items.sort(() => 0.5 - Math.random());
      return newType;
    });
  };

  static fetchAllUrls = async () => {
    const data = await fetchBuildYourPlateFoods();
    if (!data) return undefined;
    const mapped = await Promise.all(
      data.map(async (item) => ({
        icon: BuildYourPlateProcessor.normalizeFamily(item.category, item.name),
        name: item.name,
        URL: await fetchImages(item.firebaseName).catch(() => ""),
        id: item.name,
        score: item.score,
      }))
    );

    return mapped;
  };

  static calculateScore = (items: BYPItem[]) =>
    items.reduce((prev, curr) => prev + Number(curr.score || 0), 0);

  static calculatePercentage = (score: number, itemCount: number): number => {
    if (itemCount <= 0) return 0;

    const maxScore = itemCount * BuildYourPlateProcessor.maxScorePerItem;
    return Math.round((score / maxScore) * 100);
  };

  static getFamilyCounts = (items: BYPItem[]) =>
    items.reduce<Record<string, number>>((acc, item) => {
      acc[item.family] = (acc[item.family] || 0) + 1;
      return acc;
    }, {});

  static getPlateSummary = (items: BYPItem[]) => {
    const families = this.getFamilyCounts(items);

    const fruitVeg = (families.Fruit || 0) + (families.Veg || 0);
    const protein =
      (families.Meat || 0) +
      (families.Fish || 0) +
      (families["Dairy & Eggs"] || 0) +
      (families.Dairy || 0) +
      (families.NutsAndSeeds || 0);
    const wholegrain = (families.Grains || 0) + (families.Cereals || 0);
    const treats = (families.Sweets || 0) + (families["Fast Food"] || 0);
    const drinks = families[BuildYourPlateProcessor.drinksAndYogurtsFamily] || 0;

    return {
      families,
      fruitVeg,
      protein,
      wholegrain,
      treats,
      drinks,
    };
  };

  static constructScoreModalText = (items: BYPItem[]): string => {
    const score = this.calculateScore(items);
    const percentage = this.calculatePercentage(score, items.length);
    const { fruitVeg, protein, wholegrain, treats, drinks } = this.getPlateSummary(items);

    const strengths: string[] = [];
    const improvements: string[] = [];

    if (fruitVeg >= 2) {
      strengths.push("You added good colour with fruit and veg.");
    } else {
      improvements.push("Add 1 or 2 colourful fruit or veg choices.");
    }

    if (protein > 0) {
      strengths.push("You included a protein food to help growth and recovery.");
    } else {
      improvements.push("Add a protein like eggs, yogurt, fish, beans or chicken.");
    }

    if (wholegrain > 0) {
      strengths.push("You included an energy food like grains or cereals.");
    } else {
      improvements.push("Add a grain or cereal for steady energy.");
    }

    if (drinks > 0) {
      strengths.push("You remembered a drink or yogurt item.");
    }

    if (treats > 1) {
      improvements.push("Swap one sweet or fast-food item for something fresher.");
    }

    if (items.length < 3) {
      improvements.push("Build a fuller plate with a few more foods.");
    }

    let opening = "This plate needs a rethink.";
    if (percentage >= 20) opening = "You are on the right track.";
    if (percentage >= 40) opening = "This is a decent start.";
    if (percentage >= 60) opening = "This plate has a strong base.";
    if (percentage >= 76) opening = "This is a well-balanced plate.";
    if (percentage >= 90) opening = "Excellent job. This plate is very balanced.";

    const strengthText = strengths.length > 0 ? ` What went well: ${strengths.join(" ")}` : "";
    const improvementText =
      improvements.length > 0
        ? ` Next step: ${improvements.slice(0, 2).join(" ")}`
        : " Keep building plates like this.";

    return `${opening} Score: ${percentage}%.${strengthText}${improvementText}`;
  };

  static constructScoreModalTitle = (score: number, itemCount: number): string => {
    const percentage = this.calculatePercentage(score, itemCount);
    let label = "Balanced plate";
    if (percentage < 90) label = "Great effort";
    if (percentage < 76) label = "Keep building";
    if (percentage < 60) label = "Add more colour";
    if (percentage < 40) label = "Time for a swap";
    if (percentage < 20) label = "Start fresh";

    return `${label} — ${percentage}%`;
  };
}

export default BuildYourPlateProcessor;
