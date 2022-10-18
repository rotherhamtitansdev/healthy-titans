import { NHSNutritionalDataModel } from "./NHSNutritionalDataModel";

// This is the numerical instance of the NHS Nutritional guidelines model
export const NHSNutritionalBoundaries: NHSNutritionalDataModel[] = [
  { name: "Fat", low: 3, high: 17.5 },
  { name: "Saturates", low: 1.5, high: 5 },
  { name: "Sugars", low: 5, high: 22.5 },
  { name: "Salt", low: 0.1, high: 0.6 },
];

// These are the config parameters for the chart styling and sizing
export const chartSizing = {
  chartHeight: 500,
  barWidth: 30,
  CStartPos: 50,
  RStartPos: 60,
  circleYDif: 100,
  smallerRounded: 15,
};

export enum ChartLabel {
  Calories = "ENERC_KCAL",
  Protein = "PROCNT",
  Fat = "FAT",
  Saturates = "FASAT",
  Sugars = "SUGAR",
  Salt = "NA",
}

export enum Colour {
  Green = 1,
  Yellow = 2,
  Red = 3,
}
