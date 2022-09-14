export interface NutritionDetailsAPIModel {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
  totalNutrientsKCal: TotalNutrientsKCal;
}

export interface TotalNutrients {
  ENERC_KCAL: Nutrient;
  FAT: Nutrient;
  FASAT: Nutrient;
  FATRN?: Nutrient;
  FAMS: Nutrient;
  FAPU: Nutrient;
  CHOCDF: Nutrient;
  FIBTG: Nutrient;
  SUGAR: Nutrient;
  "SUGAR.added"?: Nutrient;
  PROCNT: Nutrient;
  CHOLE: Nutrient;
  NA: Nutrient;
  CA: Nutrient;
  MG: Nutrient;
  K: Nutrient;
  FE: Nutrient;
  ZN: Nutrient;
  P: Nutrient;
  VITA_RAE: Nutrient;
  VITC: Nutrient;
  THIA: Nutrient;
  RIBF: Nutrient;
  NIA: Nutrient;
  VITB6A: Nutrient;
  FOLDFE: Nutrient;
  FOLFD: Nutrient;
  FOLAC: Nutrient;
  VITB12: Nutrient;
  VITD: Nutrient;
  TOCPHA: Nutrient;
  VITK1: Nutrient;
  WATER: Nutrient;
}

export interface TotalDaily {
  ENERC_KCAL: Nutrient;
  FAT: Nutrient;
  FASAT: Nutrient;
  CHOCDF: Nutrient;
  FIBTG: Nutrient;
  PROCNT: Nutrient;
  CHOLE: Nutrient;
  NA: Nutrient;
  CA: Nutrient;
  MG: Nutrient;
  K: Nutrient;
  FE: Nutrient;
  ZN: Nutrient;
  P: Nutrient;
  VITA_RAE: Nutrient;
  VITC: Nutrient;
  THIA: Nutrient;
  RIBF: Nutrient;
  NIA: Nutrient;
  VITB6A: Nutrient;
  FOLDFE: Nutrient;
  VITB12: Nutrient;
  VITD: Nutrient;
  TOCPHA: Nutrient;
  VITK1: Nutrient;
}

export interface TotalNutrientsKCal {
  ENERC_KCAL: Nutrient;
  PROCNT_KCAL: Nutrient;
  FAT_KCAL: Nutrient;
  CHOCDF_KCAL: Nutrient;
}

export interface Nutrient {
  label: string;
  quantity: number;
  unit?: string;
}

export interface SUGARAdded {
  label: string;
  quantity: number;
  unit: string;
}
