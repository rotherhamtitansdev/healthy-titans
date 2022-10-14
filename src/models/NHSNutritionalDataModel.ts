// This model represents the NHS guidelines of each nutrition per 100g.
// (Basically the green/yellow/red boxes at the bottom of food packaging)
export interface NHSNutritionalDataModel {
  name: string;
  low: number;
  high: number;
}

// This is the format the char expects its data
export interface NHSNutritionalDataModelChart {
  x: number;
  y: number;
  color: string;
  deluminatedColor: string;
}
