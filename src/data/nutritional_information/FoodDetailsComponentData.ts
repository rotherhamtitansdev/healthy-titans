/**
 * This file is a basic data storing file.
 * All the data about different kind of foods is stored here.
 * Mainly 3 things need to be added for a type of food: 1.Name 2.Link 3.Img
 */

import { NutritionDetailsAPIModel } from "../../models/NutritionDetailsAPIModel";

export interface FoodDetailsProps {
  name: string;
  description: string;
  firebaseName: string;
  category: string;
  score: number;
  facts: string[];
}

export const NutritionalBreakdownChartData: {
  name: string;
  data: NutritionDetailsAPIModel;
}[] = [
  {
    name: "Beef",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_2552495f03414cef9bdfa254901913b4",
      yield: 2.0,
      calories: 130,
      totalWeight: 100.0,
      dietLabels: ["HIGH_PROTEIN", "LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "SPECIFIC_CARBS",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 130.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 4.81,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 1.988,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.25,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 2.51,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.31,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.12,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 21.64,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 63.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 79.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 13.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 21.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 373.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 2.09,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 5.41,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 217.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 2.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.08,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.17,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 4.887,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.568,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 3.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 3.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 2.27,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.1,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.18,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 1.5,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 72.32,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 6.5,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 7.3999999999999995,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 9.940000000000001,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.04,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 43.28,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 21.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 3.2916666666666665,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.3,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.0,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.9361702127659575,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 11.61111111111111,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 49.18181818181818,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 31.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.2222222222222222,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 6.666666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 13.076923076923077,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 30.543749999999996,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 43.692307692307686,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 94.58333333333334,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.2,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.25,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 129,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 86,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 43,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Chicken",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e3135245c3704d8aa3192bacab0959f4",
      yield: 2.0,
      calories: 215,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 215.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 15.06,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 4.31,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.097,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 6.24,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 3.23,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.0,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 18.6,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 75.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 70.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 11.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 20.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 189.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.9,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.31,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 147.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 41.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 1.6,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.06,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.12,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 6.801,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.35,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 6.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 6.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.31,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.2,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.3,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 1.5,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 65.99,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 10.75,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 23.16923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 21.549999999999997,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.0,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 37.2,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 25.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 2.9166666666666665,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.1,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 4.761904761904762,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 4.0212765957446805,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 5.0,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 11.909090909090908,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 21.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 4.555555555555555,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 1.7777777777777777,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 5.0,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 9.23076923076923,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 42.50625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 26.923076923076923,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 12.916666666666668,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 1.3333333333333333,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 2.0,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.25,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 215,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 76,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 139,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Pork",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_75017274645e4294a0de9948eb412b50",
      yield: 2.0,
      calories: 198,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "SPECIFIC_CARBS",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 198.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 12.58,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 4.36,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 5.61,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 1.34,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.0,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 19.74,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 63.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 50.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 18.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 21.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 356.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.79,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.74,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 197.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 2.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.6,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.901,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.248,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 4.58,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.472,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 1.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 1.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.53,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.5,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.21,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.0,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 66.92,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 9.9,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 19.353846153846153,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 21.800000000000004,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.0,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 39.48,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 21.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 2.0833333333333335,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.8,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.0,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.574468085106383,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 4.388888888888889,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 15.818181818181818,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 28.142857142857142,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.2222222222222222,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 75.08333333333334,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 19.076923076923077,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 28.625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 36.30769230769231,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 22.083333333333336,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 3.3333333333333335,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.4,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.0,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 198,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 81,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 117,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Lamb",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_1f6623a09e6a4a76ba2c44c071a619b8",
      yield: 4.0,
      calories: 648,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 648.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 68.87,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 35.353,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 27.975,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 2.844,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 6.27,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 77.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 33.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 19.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 7.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 112.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.63,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.06,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 71.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.057,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.107,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 1.753,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.111,
          unit: "mg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 1.06,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 25.08,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 32.4,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 105.95384615384616,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 176.76500000000001,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 12.54,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 25.666666666666668,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.375,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.9,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 1.6666666666666667,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.382978723404255,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 3.5,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 9.636363636363637,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 10.142857142857142,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 4.75,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 8.23076923076923,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 10.956249999999999,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 8.538461538461538,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 44.16666666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 648,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 25,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 623,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
name: "Turkey",
data: {
  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bb6e2b4f1b424bf2bded336c4939f48e",
  "yield": 2.0,
  "calories": 143,
  "totalWeight": 100.0,
  "dietLabels": [
      "HIGH_PROTEIN",
      "LOW_CARB",
      "LOW_SODIUM"
  ],
  "healthLabels": [
      "LOW_FAT_ABS",
      "SUGAR_CONSCIOUS",
      "LOW_POTASSIUM",
      "KIDNEY_FRIENDLY",
      "KETO_FRIENDLY",
      "PALEO",
      "SPECIFIC_CARBS",
      "MEDITERRANEAN",
      "DAIRY_FREE",
      "GLUTEN_FREE",
      "WHEAT_FREE",
      "EGG_FREE",
      "MILK_FREE",
      "PEANUT_FREE",
      "TREE_NUT_FREE",
      "SOY_FREE",
      "FISH_FREE",
      "SHELLFISH_FREE",
      "PORK_FREE",
      "RED_MEAT_FREE",
      "CRUSTACEAN_FREE",
      "CELERY_FREE",
      "MUSTARD_FREE",
      "SESAME_FREE",
      "LUPINE_FREE",
      "MOLLUSK_FREE",
      "ALCOHOL_FREE",
      "NO_OIL_ADDED",
      "NO_SUGAR_ADDED",
      "SULPHITE_FREE",
      "FODMAP_FREE",
      "KOSHER"
  ],
  "cautions": [],
  "totalNutrients": {
      "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 143.0,
          "unit": "kcal"
      },
      "FAT": {
          "label": "Total lipid (fat)",
          "quantity": 5.64,
          "unit": "g"
      },
      "FASAT": {
          "label": "Fatty acids, total saturated",
          "quantity": 1.461,
          "unit": "g"
      },
      "FATRN": {
          "label": "Fatty acids, total trans",
          "quantity": 0.062,
          "unit": "g"
      },
      "FAMS": {
          "label": "Fatty acids, total monounsaturated",
          "quantity": 1.826,
          "unit": "g"
      },
      "FAPU": {
          "label": "Fatty acids, total polyunsaturated",
          "quantity": 1.466,
          "unit": "g"
      },
      "CHOCDF": {
          "label": "Carbohydrate, by difference",
          "quantity": 0.13,
          "unit": "g"
      },
      "FIBTG": {
          "label": "Fiber, total dietary",
          "quantity": 0.0,
          "unit": "g"
      },
      "SUGAR": {
          "label": "Sugars, total",
          "quantity": 0.07,
          "unit": "g"
      },
      "PROCNT": {
          "label": "Protein",
          "quantity": 21.64,
          "unit": "g"
      },
      "CHOLE": {
          "label": "Cholesterol",
          "quantity": 72.0,
          "unit": "mg"
      },
      "NA": {
          "label": "Sodium, Na",
          "quantity": 112.0,
          "unit": "mg"
      },
      "CA": {
          "label": "Calcium, Ca",
          "quantity": 11.0,
          "unit": "mg"
      },
      "MG": {
          "label": "Magnesium, Mg",
          "quantity": 25.0,
          "unit": "mg"
      },
      "K": {
          "label": "Potassium, K",
          "quantity": 224.0,
          "unit": "mg"
      },
      "FE": {
          "label": "Iron, Fe",
          "quantity": 0.86,
          "unit": "mg"
      },
      "ZN": {
          "label": "Zinc, Zn",
          "quantity": 1.78,
          "unit": "mg"
      },
      "P": {
          "label": "Phosphorus, P",
          "quantity": 183.0,
          "unit": "mg"
      },
      "VITA_RAE": {
          "label": "Vitamin A, RAE",
          "quantity": 17.0,
          "unit": "µg"
      },
      "VITC": {
          "label": "Vitamin C, total ascorbic acid",
          "quantity": 0.0,
          "unit": "mg"
      },
      "THIA": {
          "label": "Thiamin",
          "quantity": 0.048,
          "unit": "mg"
      },
      "RIBF": {
          "label": "Riboflavin",
          "quantity": 0.185,
          "unit": "mg"
      },
      "NIA": {
          "label": "Niacin",
          "quantity": 7.631,
          "unit": "mg"
      },
      "VITB6A": {
          "label": "Vitamin B-6",
          "quantity": 0.599,
          "unit": "mg"
      },
      "FOLDFE": {
          "label": "Folate, DFE",
          "quantity": 7.0,
          "unit": "µg"
      },
      "FOLFD": {
          "label": "Folate, food",
          "quantity": 7.0,
          "unit": "µg"
      },
      "FOLAC": {
          "label": "Folic acid",
          "quantity": 0.0,
          "unit": "µg"
      },
      "VITB12": {
          "label": "Vitamin B-12",
          "quantity": 1.22,
          "unit": "µg"
      },
      "VITD": {
          "label": "Vitamin D (D2 + D3)",
          "quantity": 0.3,
          "unit": "µg"
      },
      "TOCPHA": {
          "label": "Vitamin E (alpha-tocopherol)",
          "quantity": 0.09,
          "unit": "mg"
      },
      "VITK1": {
          "label": "Vitamin K (phylloquinone)",
          "quantity": 0.0,
          "unit": "µg"
      },
      "WATER": {
          "label": "Water",
          "quantity": 72.69,
          "unit": "g"
      }
  },
  "totalDaily": {
      "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 7.15,
          "unit": "%"
      },
      "FAT": {
          "label": "Fat",
          "quantity": 8.676923076923076,
          "unit": "%"
      },
      "FASAT": {
          "label": "Saturated",
          "quantity": 7.305,
          "unit": "%"
      },
      "CHOCDF": {
          "label": "Carbs",
          "quantity": 0.043333333333333335,
          "unit": "%"
      },
      "FIBTG": {
          "label": "Fiber",
          "quantity": 0.0,
          "unit": "%"
      },
      "PROCNT": {
          "label": "Protein",
          "quantity": 43.28,
          "unit": "%"
      },
      "CHOLE": {
          "label": "Cholesterol",
          "quantity": 24.0,
          "unit": "%"
      },
      "NA": {
          "label": "Sodium",
          "quantity": 4.666666666666667,
          "unit": "%"
      },
      "CA": {
          "label": "Calcium",
          "quantity": 1.1,
          "unit": "%"
      },
      "MG": {
          "label": "Magnesium",
          "quantity": 5.9523809523809526,
          "unit": "%"
      },
      "K": {
          "label": "Potassium",
          "quantity": 4.76595744680851,
          "unit": "%"
      },
      "FE": {
          "label": "Iron",
          "quantity": 4.777777777777778,
          "unit": "%"
      },
      "ZN": {
          "label": "Zinc",
          "quantity": 16.181818181818183,
          "unit": "%"
      },
      "P": {
          "label": "Phosphorus",
          "quantity": 26.142857142857142,
          "unit": "%"
      },
      "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 1.8888888888888888,
          "unit": "%"
      },
      "VITC": {
          "label": "Vitamin C",
          "quantity": 0.0,
          "unit": "%"
      },
      "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 4.0,
          "unit": "%"
      },
      "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 14.23076923076923,
          "unit": "%"
      },
      "NIA": {
          "label": "Niacin (B3)",
          "quantity": 47.69375,
          "unit": "%"
      },
      "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 46.07692307692307,
          "unit": "%"
      },
      "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 1.75,
          "unit": "%"
      },
      "VITB12": {
          "label": "Vitamin B12",
          "quantity": 50.833333333333336,
          "unit": "%"
      },
      "VITD": {
          "label": "Vitamin D",
          "quantity": 2.0,
          "unit": "%"
      },
      "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 0.6,
          "unit": "%"
      },
      "VITK1": {
          "label": "Vitamin K",
          "quantity": 0.0,
          "unit": "%"
      }
  },
  "totalNutrientsKCal": {
      "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 144,
          "unit": "kcal"
      },
      "PROCNT_KCAL": {
          "label": "Calories from protein",
          "quantity": 90,
          "unit": "kcal"
      },
      "FAT_KCAL": {
          "label": "Calories from fat",
          "quantity": 53,
          "unit": "kcal"
      },
      "CHOCDF_KCAL": {
          "label": "Calories from carbohydrates",
          "quantity": 1,
          "unit": "kcal"
      }
  }
}
  },
  {
    name: "Cooked Meats",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_d7ac1a8d523c40f18f41bf56551fd60a",
      yield: 2.0,
      calories: 130,
      totalWeight: 100.0,
      dietLabels: ["HIGH_PROTEIN", "LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "SPECIFIC_CARBS",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 130.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 4.81,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 1.988,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.25,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 2.51,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.31,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.12,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 21.64,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 63.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 79.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 13.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 21.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 373.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 2.09,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 5.41,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 217.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 2.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.08,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.17,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 4.887,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.568,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 3.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 3.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 2.27,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.1,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.18,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 1.5,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 72.32,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 6.5,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 7.3999999999999995,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 9.940000000000001,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.04,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 43.28,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 21.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 3.2916666666666665,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.3,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.0,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.9361702127659575,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 11.61111111111111,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 49.18181818181818,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 31.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.2222222222222222,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 6.666666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 13.076923076923077,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 30.543749999999996,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 43.692307692307686,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 94.58333333333334,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.2,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.25,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 129,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 86,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 43,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Cod",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_a9bb8891d7bd414eb1568db940ba8be6",
      yield: 2.0,
      calories: 82,
      totalWeight: 100.0,
      dietLabels: ["HIGH_PROTEIN", "LOW_FAT", "LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 82.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.67,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.131,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.094,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.231,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.0,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 17.81,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 43.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 54.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 16.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 32.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 413.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.38,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.45,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 203.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 12.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 1.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.076,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.065,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 2.063,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.245,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 7.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 7.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.91,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.9,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.64,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.1,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 81.22,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 4.1,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 1.0307692307692307,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.655,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.0,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 35.62,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 14.333333333333334,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 2.25,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.6,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 7.619047619047619,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 8.787234042553191,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 2.111111111111111,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.090909090909091,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 29.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 1.3333333333333333,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 1.1111111111111112,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 6.333333333333333,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 5.0,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 12.89375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 18.846153846153847,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 37.91666666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 6.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 4.266666666666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.08333333333333333,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 82,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 76,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 6,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Salmon",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_ddf586b3eb1e482ebacc94f8883b4592",
      yield: 2.0,
      calories: 208,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 208.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 13.42,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 3.05,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 3.77,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 3.886,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.0,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 20.42,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 55.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 59.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 9.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 27.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 363.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.34,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.36,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 240.0,
          unit: "mg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 3.9,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.207,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.155,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 8.672,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.636,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 26.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 26.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 3.23,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 3.55,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.5,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 64.89,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 10.4,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 20.646153846153847,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 15.25,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.0,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 40.84,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 18.333333333333332,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 2.4583333333333335,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.9,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 6.428571428571429,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.723404255319149,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 1.8888888888888888,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 3.272727272727273,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 34.285714285714285,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 4.333333333333333,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 17.25,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 11.923076923076923,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 54.2,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 48.92307692307692,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 6.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 134.58333333333334,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 23.666666666666668,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.4166666666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 208,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 84,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 124,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Tuna",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_462427b5bf0848cbb6d90964f08c4281",
      yield: 2.0,
      calories: 109,
      totalWeight: 100.0,
      dietLabels: ["HIGH_PROTEIN", "LOW_FAT", "LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 109.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.49,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.172,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.016,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.116,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.147,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.0,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 24.4,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 39.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 45.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 4.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 35.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 441.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.77,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.37,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 278.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 18.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.118,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.115,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 18.475,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.933,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 2.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 2.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 2.08,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 1.7,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.24,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.1,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 74.03,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 5.45,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.7538461538461538,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.86,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.0,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 48.8,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 13.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.875,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.4,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 8.333333333333334,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 9.382978723404255,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 4.277777777777778,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 3.3636363636363638,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 39.714285714285715,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 2.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 9.833333333333332,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 8.846153846153847,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 115.46875000000001,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 71.76923076923077,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 86.66666666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 11.333333333333334,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.6,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.08333333333333333,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 109,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 104,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 5,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Apples",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_4ed278b6b34c450896f3b69598b3410a",
      yield: 2.0,
      calories: 52,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 52.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.17,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.028,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.007,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.051,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 13.81,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.4,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 10.39,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.26,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 1.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 6.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 5.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 107.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.12,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.04,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 11.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 3.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 4.6,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.017,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.026,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.091,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.041,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 3.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 3.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.18,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 2.2,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 85.56,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 2.6,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.26153846153846155,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.14,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 4.6033333333333335,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 9.6,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.52,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.041666666666666664,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.6,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 1.1904761904761905,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.276595744680851,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.36363636363636365,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 1.5714285714285714,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.3333333333333333,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 5.111111111111111,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 1.416666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 2.0,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.56875,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 3.153846153846154,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.2,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.8333333333333335,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 52,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 1,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 1,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 50,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Blueberries",
    data: {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a24c162dff11454ca5076a9dde406577",
      "yield": 2.0,
      "calories": 57,
      "totalWeight": 100.0,
      "dietLabels": [
          "LOW_FAT",
          "LOW_SODIUM"
      ],
      "healthLabels": [
          "FAT_FREE",
          "LOW_FAT_ABS",
          "LOW_POTASSIUM",
          "KIDNEY_FRIENDLY",
          "KETO_FRIENDLY",
          "VEGAN",
          "VEGETARIAN",
          "PESCATARIAN",
          "PALEO",
          "SPECIFIC_CARBS",
          "MEDITERRANEAN",
          "DASH",
          "DAIRY_FREE",
          "GLUTEN_FREE",
          "WHEAT_FREE",
          "EGG_FREE",
          "MILK_FREE",
          "PEANUT_FREE",
          "TREE_NUT_FREE",
          "SOY_FREE",
          "FISH_FREE",
          "SHELLFISH_FREE",
          "PORK_FREE",
          "RED_MEAT_FREE",
          "CRUSTACEAN_FREE",
          "CELERY_FREE",
          "MUSTARD_FREE",
          "SESAME_FREE",
          "LUPINE_FREE",
          "MOLLUSK_FREE",
          "ALCOHOL_FREE",
          "NO_OIL_ADDED",
          "NO_SUGAR_ADDED",
          "SULPHITE_FREE",
          "FODMAP_FREE",
          "KOSHER"
      ],
      "cautions": [
          "SULFITES"
      ],
      "totalNutrients": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 57.0,
              "unit": "kcal"
          },
          "FAT": {
              "label": "Total lipid (fat)",
              "quantity": 0.33,
              "unit": "g"
          },
          "FASAT": {
              "label": "Fatty acids, total saturated",
              "quantity": 0.028,
              "unit": "g"
          },
          "FAMS": {
              "label": "Fatty acids, total monounsaturated",
              "quantity": 0.047,
              "unit": "g"
          },
          "FAPU": {
              "label": "Fatty acids, total polyunsaturated",
              "quantity": 0.146,
              "unit": "g"
          },
          "CHOCDF": {
              "label": "Carbohydrate, by difference",
              "quantity": 14.49,
              "unit": "g"
          },
          "FIBTG": {
              "label": "Fiber, total dietary",
              "quantity": 2.4,
              "unit": "g"
          },
          "SUGAR": {
              "label": "Sugars, total",
              "quantity": 9.96,
              "unit": "g"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 0.74,
              "unit": "g"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "mg"
          },
          "NA": {
              "label": "Sodium, Na",
              "quantity": 1.0,
              "unit": "mg"
          },
          "CA": {
              "label": "Calcium, Ca",
              "quantity": 6.0,
              "unit": "mg"
          },
          "MG": {
              "label": "Magnesium, Mg",
              "quantity": 6.0,
              "unit": "mg"
          },
          "K": {
              "label": "Potassium, K",
              "quantity": 77.0,
              "unit": "mg"
          },
          "FE": {
              "label": "Iron, Fe",
              "quantity": 0.28,
              "unit": "mg"
          },
          "ZN": {
              "label": "Zinc, Zn",
              "quantity": 0.16,
              "unit": "mg"
          },
          "P": {
              "label": "Phosphorus, P",
              "quantity": 12.0,
              "unit": "mg"
          },
          "VITA_RAE": {
              "label": "Vitamin A, RAE",
              "quantity": 3.0,
              "unit": "µg"
          },
          "VITC": {
              "label": "Vitamin C, total ascorbic acid",
              "quantity": 9.7,
              "unit": "mg"
          },
          "THIA": {
              "label": "Thiamin",
              "quantity": 0.037,
              "unit": "mg"
          },
          "RIBF": {
              "label": "Riboflavin",
              "quantity": 0.041,
              "unit": "mg"
          },
          "NIA": {
              "label": "Niacin",
              "quantity": 0.418,
              "unit": "mg"
          },
          "VITB6A": {
              "label": "Vitamin B-6",
              "quantity": 0.052,
              "unit": "mg"
          },
          "FOLDFE": {
              "label": "Folate, DFE",
              "quantity": 6.0,
              "unit": "µg"
          },
          "FOLFD": {
              "label": "Folate, food",
              "quantity": 6.0,
              "unit": "µg"
          },
          "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITB12": {
              "label": "Vitamin B-12",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITD": {
              "label": "Vitamin D (D2 + D3)",
              "quantity": 0.0,
              "unit": "µg"
          },
          "TOCPHA": {
              "label": "Vitamin E (alpha-tocopherol)",
              "quantity": 0.57,
              "unit": "mg"
          },
          "VITK1": {
              "label": "Vitamin K (phylloquinone)",
              "quantity": 19.3,
              "unit": "µg"
          },
          "WATER": {
              "label": "Water",
              "quantity": 84.21,
              "unit": "g"
          }
      },
      "totalDaily": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2.85,
              "unit": "%"
          },
          "FAT": {
              "label": "Fat",
              "quantity": 0.5076923076923077,
              "unit": "%"
          },
          "FASAT": {
              "label": "Saturated",
              "quantity": 0.14,
              "unit": "%"
          },
          "CHOCDF": {
              "label": "Carbs",
              "quantity": 4.83,
              "unit": "%"
          },
          "FIBTG": {
              "label": "Fiber",
              "quantity": 9.6,
              "unit": "%"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 1.48,
              "unit": "%"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "%"
          },
          "NA": {
              "label": "Sodium",
              "quantity": 0.041666666666666664,
              "unit": "%"
          },
          "CA": {
              "label": "Calcium",
              "quantity": 0.6,
              "unit": "%"
          },
          "MG": {
              "label": "Magnesium",
              "quantity": 1.4285714285714286,
              "unit": "%"
          },
          "K": {
              "label": "Potassium",
              "quantity": 1.6382978723404256,
              "unit": "%"
          },
          "FE": {
              "label": "Iron",
              "quantity": 1.5555555555555558,
              "unit": "%"
          },
          "ZN": {
              "label": "Zinc",
              "quantity": 1.4545454545454546,
              "unit": "%"
          },
          "P": {
              "label": "Phosphorus",
              "quantity": 1.7142857142857142,
              "unit": "%"
          },
          "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0.3333333333333333,
              "unit": "%"
          },
          "VITC": {
              "label": "Vitamin C",
              "quantity": 10.777777777777777,
              "unit": "%"
          },
          "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.083333333333333,
              "unit": "%"
          },
          "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 3.153846153846154,
              "unit": "%"
          },
          "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2.6125,
              "unit": "%"
          },
          "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 4.0,
              "unit": "%"
          },
          "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 1.5,
              "unit": "%"
          },
          "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
          },
          "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
          },
          "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.7999999999999994,
              "unit": "%"
          },
          "VITK1": {
              "label": "Vitamin K",
              "quantity": 16.083333333333332,
              "unit": "%"
          }
      },
      "totalNutrientsKCal": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 58,
              "unit": "kcal"
          },
          "PROCNT_KCAL": {
              "label": "Calories from protein",
              "quantity": 3,
              "unit": "kcal"
          },
          "FAT_KCAL": {
              "label": "Calories from fat",
              "quantity": 3,
              "unit": "kcal"
          },
          "CHOCDF_KCAL": {
              "label": "Calories from carbohydrates",
              "quantity": 52,
              "unit": "kcal"
          }
      }
  }
  },
  {
    name: "Bananas",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c16777b1cc074507a96d2f13018877de",
      yield: 2.0,
      calories: 89,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 89.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.33,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.112,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.032,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.073,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 22.84,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.6,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 12.23,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.09,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 1.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 5.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 27.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 358.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.26,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.15,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 22.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 3.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 8.7,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.031,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.073,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.665,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.367,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 20.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 20.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.1,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.5,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 74.91,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 4.45,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.5076923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.56,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 7.613333333333333,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 10.4,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 2.18,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.041666666666666664,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.5,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 6.428571428571429,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.617021276595745,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 1.4444444444444444,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 1.3636363636363635,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 3.142857142857143,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.3333333333333333,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 9.666666666666666,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.5833333333333335,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 5.615384615384615,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 4.15625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 28.230769230769234,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 5.0,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.4166666666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 89,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 4,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 3,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 82,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Avocado",
    data: {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6b1db3b24e954c8dbae5928e5a813e24",
      "yield": 2.0,
      "calories": 160,
      "totalWeight": 100.0,
      "dietLabels": [
          "LOW_CARB",
          "LOW_SODIUM"
      ],
      "healthLabels": [
          "SUGAR_CONSCIOUS",
          "KIDNEY_FRIENDLY",
          "KETO_FRIENDLY",
          "VEGAN",
          "VEGETARIAN",
          "PESCATARIAN",
          "PALEO",
          "SPECIFIC_CARBS",
          "MEDITERRANEAN",
          "DASH",
          "DAIRY_FREE",
          "GLUTEN_FREE",
          "WHEAT_FREE",
          "EGG_FREE",
          "MILK_FREE",
          "PEANUT_FREE",
          "TREE_NUT_FREE",
          "SOY_FREE",
          "FISH_FREE",
          "SHELLFISH_FREE",
          "PORK_FREE",
          "RED_MEAT_FREE",
          "CRUSTACEAN_FREE",
          "CELERY_FREE",
          "MUSTARD_FREE",
          "SESAME_FREE",
          "LUPINE_FREE",
          "MOLLUSK_FREE",
          "ALCOHOL_FREE",
          "NO_OIL_ADDED",
          "NO_SUGAR_ADDED",
          "SULPHITE_FREE",
          "KOSHER"
      ],
      "cautions": [
          "SULFITES"
      ],
      "totalNutrients": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 160.0,
              "unit": "kcal"
          },
          "FAT": {
              "label": "Total lipid (fat)",
              "quantity": 14.66,
              "unit": "g"
          },
          "FASAT": {
              "label": "Fatty acids, total saturated",
              "quantity": 2.126,
              "unit": "g"
          },
          "FAMS": {
              "label": "Fatty acids, total monounsaturated",
              "quantity": 9.799,
              "unit": "g"
          },
          "FAPU": {
              "label": "Fatty acids, total polyunsaturated",
              "quantity": 1.816,
              "unit": "g"
          },
          "CHOCDF": {
              "label": "Carbohydrate, by difference",
              "quantity": 8.53,
              "unit": "g"
          },
          "FIBTG": {
              "label": "Fiber, total dietary",
              "quantity": 6.7,
              "unit": "g"
          },
          "SUGAR": {
              "label": "Sugars, total",
              "quantity": 0.66,
              "unit": "g"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 2.0,
              "unit": "g"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "mg"
          },
          "NA": {
              "label": "Sodium, Na",
              "quantity": 7.0,
              "unit": "mg"
          },
          "CA": {
              "label": "Calcium, Ca",
              "quantity": 12.0,
              "unit": "mg"
          },
          "MG": {
              "label": "Magnesium, Mg",
              "quantity": 29.0,
              "unit": "mg"
          },
          "K": {
              "label": "Potassium, K",
              "quantity": 485.0,
              "unit": "mg"
          },
          "FE": {
              "label": "Iron, Fe",
              "quantity": 0.55,
              "unit": "mg"
          },
          "ZN": {
              "label": "Zinc, Zn",
              "quantity": 0.64,
              "unit": "mg"
          },
          "P": {
              "label": "Phosphorus, P",
              "quantity": 52.0,
              "unit": "mg"
          },
          "VITA_RAE": {
              "label": "Vitamin A, RAE",
              "quantity": 7.0,
              "unit": "µg"
          },
          "VITC": {
              "label": "Vitamin C, total ascorbic acid",
              "quantity": 10.0,
              "unit": "mg"
          },
          "THIA": {
              "label": "Thiamin",
              "quantity": 0.067,
              "unit": "mg"
          },
          "RIBF": {
              "label": "Riboflavin",
              "quantity": 0.13,
              "unit": "mg"
          },
          "NIA": {
              "label": "Niacin",
              "quantity": 1.738,
              "unit": "mg"
          },
          "VITB6A": {
              "label": "Vitamin B-6",
              "quantity": 0.257,
              "unit": "mg"
          },
          "FOLDFE": {
              "label": "Folate, DFE",
              "quantity": 81.0,
              "unit": "µg"
          },
          "FOLFD": {
              "label": "Folate, food",
              "quantity": 81.0,
              "unit": "µg"
          },
          "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITB12": {
              "label": "Vitamin B-12",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITD": {
              "label": "Vitamin D (D2 + D3)",
              "quantity": 0.0,
              "unit": "µg"
          },
          "TOCPHA": {
              "label": "Vitamin E (alpha-tocopherol)",
              "quantity": 2.07,
              "unit": "mg"
          },
          "VITK1": {
              "label": "Vitamin K (phylloquinone)",
              "quantity": 21.0,
              "unit": "µg"
          },
          "WATER": {
              "label": "Water",
              "quantity": 73.23,
              "unit": "g"
          }
      },
      "totalDaily": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 8.0,
              "unit": "%"
          },
          "FAT": {
              "label": "Fat",
              "quantity": 22.553846153846155,
              "unit": "%"
          },
          "FASAT": {
              "label": "Saturated",
              "quantity": 10.629999999999999,
              "unit": "%"
          },
          "CHOCDF": {
              "label": "Carbs",
              "quantity": 2.843333333333333,
              "unit": "%"
          },
          "FIBTG": {
              "label": "Fiber",
              "quantity": 26.8,
              "unit": "%"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 4.0,
              "unit": "%"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "%"
          },
          "NA": {
              "label": "Sodium",
              "quantity": 0.2916666666666667,
              "unit": "%"
          },
          "CA": {
              "label": "Calcium",
              "quantity": 1.2,
              "unit": "%"
          },
          "MG": {
              "label": "Magnesium",
              "quantity": 6.904761904761905,
              "unit": "%"
          },
          "K": {
              "label": "Potassium",
              "quantity": 10.319148936170214,
              "unit": "%"
          },
          "FE": {
              "label": "Iron",
              "quantity": 3.055555555555556,
              "unit": "%"
          },
          "ZN": {
              "label": "Zinc",
              "quantity": 5.818181818181818,
              "unit": "%"
          },
          "P": {
              "label": "Phosphorus",
              "quantity": 7.428571428571429,
              "unit": "%"
          },
          "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0.7777777777777778,
              "unit": "%"
          },
          "VITC": {
              "label": "Vitamin C",
              "quantity": 11.11111111111111,
              "unit": "%"
          },
          "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 5.583333333333334,
              "unit": "%"
          },
          "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 10.0,
              "unit": "%"
          },
          "NIA": {
              "label": "Niacin (B3)",
              "quantity": 10.8625,
              "unit": "%"
          },
          "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 19.769230769230766,
              "unit": "%"
          },
          "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 20.25,
              "unit": "%"
          },
          "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
          },
          "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
          },
          "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.799999999999999,
              "unit": "%"
          },
          "VITK1": {
              "label": "Vitamin K",
              "quantity": 17.5,
              "unit": "%"
          }
      },
      "totalNutrientsKCal": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 159,
              "unit": "kcal"
          },
          "PROCNT_KCAL": {
              "label": "Calories from protein",
              "quantity": 7,
              "unit": "kcal"
          },
          "FAT_KCAL": {
              "label": "Calories from fat",
              "quantity": 121,
              "unit": "kcal"
          },
          "CHOCDF_KCAL": {
              "label": "Calories from carbohydrates",
              "quantity": 31,
              "unit": "kcal"
          }
      }
  }
  },
  {
    name: "Grapes",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_724107b017794d528431e754db1b99f7",
      yield: 2.0,
      calories: 69,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 69.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.16,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.054,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.007,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.048,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 18.1,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.9,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 15.48,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.72,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 2.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 10.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 7.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 191.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.36,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.07,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 20.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 3.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 3.2,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.069,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.07,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.188,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.086,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 2.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 2.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.19,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 14.6,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 80.54,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 3.45,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.24615384615384617,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.27,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 6.033333333333334,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 3.6,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.44,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.08333333333333333,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.0,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 1.6666666666666667,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 4.0638297872340425,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 2.0,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.6363636363636365,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 2.857142857142857,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.3333333333333333,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 3.5555555555555554,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 5.750000000000001,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 5.384615384615385,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.175,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 6.615384615384615,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.2666666666666666,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 12.166666666666666,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 69,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 3,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 1,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 65,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Oranges",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3a585abb6fb042f9b1c6a03813b75be6",
      yield: 2.0,
      calories: 47,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 47.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.12,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.015,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.023,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.025,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 11.75,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.4,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 9.35,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.94,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 0.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 40.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 10.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 181.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.1,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.07,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 14.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 11.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 53.2,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.087,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.04,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.282,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.06,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 30.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 30.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.18,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.0,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 86.75,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 2.35,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.18461538461538463,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.075,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 3.9166666666666665,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 9.6,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.88,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.0,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 4.0,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.380952380952381,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 3.851063829787234,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.5555555555555556,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.6363636363636365,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 2.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 1.2222222222222223,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 59.111111111111114,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 7.25,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 3.0769230769230766,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.7624999999999997,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 4.615384615384615,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 7.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.2,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.0,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 47,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 3,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 1,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 43,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Pears",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_05d42707042342e0bf5e674eb2124514",
      yield: 2.0,
      calories: 57,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 57.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.14,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.022,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.084,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.094,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 15.23,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 3.1,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 9.75,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.36,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 1.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 9.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 7.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 116.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.18,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.1,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 12.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 1.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 4.3,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.012,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.026,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.161,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.029,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 7.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 7.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.12,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 4.4,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 83.96,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 2.85,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.21538461538461542,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.10999999999999999,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 5.076666666666667,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 12.4,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.72,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.041666666666666664,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.9,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 1.6666666666666667,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.4680851063829787,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 1.0,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.9090909090909091,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 1.7142857142857142,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.1111111111111111,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 4.777777777777778,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 1.0,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 2.0,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.00625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.230769230769231,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.8,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 3.666666666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 57,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 1,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 1,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 55,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Strawberries",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_f01e4b385777450c8fa0a8daf556bc45",
      yield: 2.0,
      calories: 32,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 32.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.3,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.015,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.043,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.155,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 7.68,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 4.89,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.67,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 1.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 16.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 13.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 153.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.41,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.14,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 24.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 1.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 58.8,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.024,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.022,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.386,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.047,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 24.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 24.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.29,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 2.2,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 90.95,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.6,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.46153846153846156,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.075,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 2.56,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.34,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.041666666666666664,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.6,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 3.0952380952380953,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 3.25531914893617,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 2.2777777777777777,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 1.272727272727273,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 3.4285714285714284,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.1111111111111111,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 65.33333333333333,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.0,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 1.692307692307692,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 2.4125,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 3.6153846153846154,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 6.0,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.9333333333333331,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.8333333333333335,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 31,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 2,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 2,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 27,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Tomato",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_242adf76ac284eac91470f4e0e79e403",
      yield: 2.0,
      calories: 18,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 18.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.2,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.028,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.031,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.083,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 3.89,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 1.2,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 2.63,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.88,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 5.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 10.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 11.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 237.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.27,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.17,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 24.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 42.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 13.7,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.037,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.019,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.594,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.08,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 15.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 15.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.54,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 7.9,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 94.52,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 0.9,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.3076923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.14,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 1.2966666666666666,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 4.8,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.76,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.20833333333333334,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.0,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.619047619047619,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 5.042553191489362,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 1.5,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 1.5454545454545454,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 3.4285714285714284,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 4.666666666666667,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 15.222222222222221,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 3.083333333333333,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 1.4615384615384615,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 3.7125,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 6.153846153846153,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 3.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 3.6,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 6.583333333333333,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 18,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 3,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 2,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 13,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Kale",
    data: {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ba854503ca94409bb4fe3ef61b0669b4",
      "yield": 2.0,
      "calories": 49,
      "totalWeight": 100.0,
      "dietLabels": [
          "LOW_SODIUM"
      ],
      "healthLabels": [
          "FAT_FREE",
          "LOW_FAT_ABS",
          "SUGAR_CONSCIOUS",
          "KIDNEY_FRIENDLY",
          "KETO_FRIENDLY",
          "VEGAN",
          "VEGETARIAN",
          "PESCATARIAN",
          "PALEO",
          "SPECIFIC_CARBS",
          "MEDITERRANEAN",
          "DASH",
          "DAIRY_FREE",
          "GLUTEN_FREE",
          "WHEAT_FREE",
          "EGG_FREE",
          "MILK_FREE",
          "PEANUT_FREE",
          "TREE_NUT_FREE",
          "SOY_FREE",
          "FISH_FREE",
          "SHELLFISH_FREE",
          "PORK_FREE",
          "RED_MEAT_FREE",
          "CRUSTACEAN_FREE",
          "CELERY_FREE",
          "MUSTARD_FREE",
          "SESAME_FREE",
          "LUPINE_FREE",
          "MOLLUSK_FREE",
          "ALCOHOL_FREE",
          "NO_OIL_ADDED",
          "NO_SUGAR_ADDED",
          "SULPHITE_FREE",
          "FODMAP_FREE",
          "KOSHER"
      ],
      "cautions": [],
      "totalNutrients": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 49.0,
              "unit": "kcal"
          },
          "FAT": {
              "label": "Total lipid (fat)",
              "quantity": 0.93,
              "unit": "g"
          },
          "FASAT": {
              "label": "Fatty acids, total saturated",
              "quantity": 0.091,
              "unit": "g"
          },
          "FAMS": {
              "label": "Fatty acids, total monounsaturated",
              "quantity": 0.052,
              "unit": "g"
          },
          "FAPU": {
              "label": "Fatty acids, total polyunsaturated",
              "quantity": 0.338,
              "unit": "g"
          },
          "CHOCDF": {
              "label": "Carbohydrate, by difference",
              "quantity": 8.75,
              "unit": "g"
          },
          "FIBTG": {
              "label": "Fiber, total dietary",
              "quantity": 3.6,
              "unit": "g"
          },
          "SUGAR": {
              "label": "Sugars, total",
              "quantity": 2.26,
              "unit": "g"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 4.28,
              "unit": "g"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "mg"
          },
          "NA": {
              "label": "Sodium, Na",
              "quantity": 38.0,
              "unit": "mg"
          },
          "CA": {
              "label": "Calcium, Ca",
              "quantity": 150.0,
              "unit": "mg"
          },
          "MG": {
              "label": "Magnesium, Mg",
              "quantity": 47.0,
              "unit": "mg"
          },
          "K": {
              "label": "Potassium, K",
              "quantity": 491.0,
              "unit": "mg"
          },
          "FE": {
              "label": "Iron, Fe",
              "quantity": 1.47,
              "unit": "mg"
          },
          "ZN": {
              "label": "Zinc, Zn",
              "quantity": 0.56,
              "unit": "mg"
          },
          "P": {
              "label": "Phosphorus, P",
              "quantity": 92.0,
              "unit": "mg"
          },
          "VITA_RAE": {
              "label": "Vitamin A, RAE",
              "quantity": 500.0,
              "unit": "µg"
          },
          "VITC": {
              "label": "Vitamin C, total ascorbic acid",
              "quantity": 120.0,
              "unit": "mg"
          },
          "THIA": {
              "label": "Thiamin",
              "quantity": 0.11,
              "unit": "mg"
          },
          "RIBF": {
              "label": "Riboflavin",
              "quantity": 0.13,
              "unit": "mg"
          },
          "NIA": {
              "label": "Niacin",
              "quantity": 1.0,
              "unit": "mg"
          },
          "VITB6A": {
              "label": "Vitamin B-6",
              "quantity": 0.271,
              "unit": "mg"
          },
          "FOLDFE": {
              "label": "Folate, DFE",
              "quantity": 141.0,
              "unit": "µg"
          },
          "FOLFD": {
              "label": "Folate, food",
              "quantity": 141.0,
              "unit": "µg"
          },
          "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITB12": {
              "label": "Vitamin B-12",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITD": {
              "label": "Vitamin D (D2 + D3)",
              "quantity": 0.0,
              "unit": "µg"
          },
          "TOCPHA": {
              "label": "Vitamin E (alpha-tocopherol)",
              "quantity": 1.54,
              "unit": "mg"
          },
          "VITK1": {
              "label": "Vitamin K (phylloquinone)",
              "quantity": 704.8,
              "unit": "µg"
          },
          "WATER": {
              "label": "Water",
              "quantity": 84.04,
              "unit": "g"
          }
      },
      "totalDaily": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2.45,
              "unit": "%"
          },
          "FAT": {
              "label": "Fat",
              "quantity": 1.4307692307692308,
              "unit": "%"
          },
          "FASAT": {
              "label": "Saturated",
              "quantity": 0.45499999999999996,
              "unit": "%"
          },
          "CHOCDF": {
              "label": "Carbs",
              "quantity": 2.9166666666666665,
              "unit": "%"
          },
          "FIBTG": {
              "label": "Fiber",
              "quantity": 14.4,
              "unit": "%"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 8.56,
              "unit": "%"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "%"
          },
          "NA": {
              "label": "Sodium",
              "quantity": 1.5833333333333333,
              "unit": "%"
          },
          "CA": {
              "label": "Calcium",
              "quantity": 15.0,
              "unit": "%"
          },
          "MG": {
              "label": "Magnesium",
              "quantity": 11.19047619047619,
              "unit": "%"
          },
          "K": {
              "label": "Potassium",
              "quantity": 10.446808510638299,
              "unit": "%"
          },
          "FE": {
              "label": "Iron",
              "quantity": 8.166666666666666,
              "unit": "%"
          },
          "ZN": {
              "label": "Zinc",
              "quantity": 5.090909090909092,
              "unit": "%"
          },
          "P": {
              "label": "Phosphorus",
              "quantity": 13.142857142857142,
              "unit": "%"
          },
          "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 55.55555555555556,
              "unit": "%"
          },
          "VITC": {
              "label": "Vitamin C",
              "quantity": 133.33333333333334,
              "unit": "%"
          },
          "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 9.166666666666668,
              "unit": "%"
          },
          "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 10.0,
              "unit": "%"
          },
          "NIA": {
              "label": "Niacin (B3)",
              "quantity": 6.25,
              "unit": "%"
          },
          "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 20.846153846153847,
              "unit": "%"
          },
          "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 35.25,
              "unit": "%"
          },
          "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
          },
          "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
          },
          "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 10.266666666666667,
              "unit": "%"
          },
          "VITK1": {
              "label": "Vitamin K",
              "quantity": 587.3333333333334,
              "unit": "%"
          }
      },
      "totalNutrientsKCal": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 49,
              "unit": "kcal"
          },
          "PROCNT_KCAL": {
              "label": "Calories from protein",
              "quantity": 14,
              "unit": "kcal"
          },
          "FAT_KCAL": {
              "label": "Calories from fat",
              "quantity": 7,
              "unit": "kcal"
          },
          "CHOCDF_KCAL": {
              "label": "Calories from carbohydrates",
              "quantity": 28,
              "unit": "kcal"
          }
      }
  }
  },
  {
    name: "Sweet Potato",
    data: {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cafbc8fd16294c2ca842135205050281",
      "yield": 2.0,
      "calories": 86,
      "totalWeight": 100.0,
      "dietLabels": [
          "LOW_FAT",
          "LOW_SODIUM"
      ],
      "healthLabels": [
          "FAT_FREE",
          "LOW_FAT_ABS",
          "SUGAR_CONSCIOUS",
          "KIDNEY_FRIENDLY",
          "VEGAN",
          "VEGETARIAN",
          "PESCATARIAN",
          "PALEO",
          "MEDITERRANEAN",
          "DASH",
          "DAIRY_FREE",
          "GLUTEN_FREE",
          "WHEAT_FREE",
          "EGG_FREE",
          "MILK_FREE",
          "PEANUT_FREE",
          "TREE_NUT_FREE",
          "SOY_FREE",
          "FISH_FREE",
          "SHELLFISH_FREE",
          "PORK_FREE",
          "RED_MEAT_FREE",
          "CRUSTACEAN_FREE",
          "CELERY_FREE",
          "MUSTARD_FREE",
          "SESAME_FREE",
          "LUPINE_FREE",
          "MOLLUSK_FREE",
          "ALCOHOL_FREE",
          "NO_OIL_ADDED",
          "NO_SUGAR_ADDED",
          "SULPHITE_FREE",
          "FODMAP_FREE",
          "KOSHER"
      ],
      "cautions": [],
      "totalNutrients": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 86.0,
              "unit": "kcal"
          },
          "FAT": {
              "label": "Total lipid (fat)",
              "quantity": 0.05,
              "unit": "g"
          },
          "FASAT": {
              "label": "Fatty acids, total saturated",
              "quantity": 0.018,
              "unit": "g"
          },
          "FAMS": {
              "label": "Fatty acids, total monounsaturated",
              "quantity": 0.001,
              "unit": "g"
          },
          "FAPU": {
              "label": "Fatty acids, total polyunsaturated",
              "quantity": 0.014,
              "unit": "g"
          },
          "CHOCDF": {
              "label": "Carbohydrate, by difference",
              "quantity": 20.12,
              "unit": "g"
          },
          "FIBTG": {
              "label": "Fiber, total dietary",
              "quantity": 3.0,
              "unit": "g"
          },
          "SUGAR": {
              "label": "Sugars, total",
              "quantity": 4.18,
              "unit": "g"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 1.57,
              "unit": "g"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "mg"
          },
          "NA": {
              "label": "Sodium, Na",
              "quantity": 55.0,
              "unit": "mg"
          },
          "CA": {
              "label": "Calcium, Ca",
              "quantity": 30.0,
              "unit": "mg"
          },
          "MG": {
              "label": "Magnesium, Mg",
              "quantity": 25.0,
              "unit": "mg"
          },
          "K": {
              "label": "Potassium, K",
              "quantity": 337.0,
              "unit": "mg"
          },
          "FE": {
              "label": "Iron, Fe",
              "quantity": 0.61,
              "unit": "mg"
          },
          "ZN": {
              "label": "Zinc, Zn",
              "quantity": 0.3,
              "unit": "mg"
          },
          "P": {
              "label": "Phosphorus, P",
              "quantity": 47.0,
              "unit": "mg"
          },
          "VITA_RAE": {
              "label": "Vitamin A, RAE",
              "quantity": 709.0,
              "unit": "µg"
          },
          "VITC": {
              "label": "Vitamin C, total ascorbic acid",
              "quantity": 2.4,
              "unit": "mg"
          },
          "THIA": {
              "label": "Thiamin",
              "quantity": 0.078,
              "unit": "mg"
          },
          "RIBF": {
              "label": "Riboflavin",
              "quantity": 0.061,
              "unit": "mg"
          },
          "NIA": {
              "label": "Niacin",
              "quantity": 0.557,
              "unit": "mg"
          },
          "VITB6A": {
              "label": "Vitamin B-6",
              "quantity": 0.209,
              "unit": "mg"
          },
          "FOLDFE": {
              "label": "Folate, DFE",
              "quantity": 11.0,
              "unit": "µg"
          },
          "FOLFD": {
              "label": "Folate, food",
              "quantity": 11.0,
              "unit": "µg"
          },
          "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITB12": {
              "label": "Vitamin B-12",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITD": {
              "label": "Vitamin D (D2 + D3)",
              "quantity": 0.0,
              "unit": "µg"
          },
          "TOCPHA": {
              "label": "Vitamin E (alpha-tocopherol)",
              "quantity": 0.26,
              "unit": "mg"
          },
          "VITK1": {
              "label": "Vitamin K (phylloquinone)",
              "quantity": 1.8,
              "unit": "µg"
          },
          "WATER": {
              "label": "Water",
              "quantity": 77.28,
              "unit": "g"
          }
      },
      "totalDaily": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4.3,
              "unit": "%"
          },
          "FAT": {
              "label": "Fat",
              "quantity": 0.07692307692307693,
              "unit": "%"
          },
          "FASAT": {
              "label": "Saturated",
              "quantity": 0.09,
              "unit": "%"
          },
          "CHOCDF": {
              "label": "Carbs",
              "quantity": 6.706666666666667,
              "unit": "%"
          },
          "FIBTG": {
              "label": "Fiber",
              "quantity": 12.0,
              "unit": "%"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 3.14,
              "unit": "%"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "%"
          },
          "NA": {
              "label": "Sodium",
              "quantity": 2.2916666666666665,
              "unit": "%"
          },
          "CA": {
              "label": "Calcium",
              "quantity": 3.0,
              "unit": "%"
          },
          "MG": {
              "label": "Magnesium",
              "quantity": 5.9523809523809526,
              "unit": "%"
          },
          "K": {
              "label": "Potassium",
              "quantity": 7.170212765957447,
              "unit": "%"
          },
          "FE": {
              "label": "Iron",
              "quantity": 3.388888888888889,
              "unit": "%"
          },
          "ZN": {
              "label": "Zinc",
              "quantity": 2.727272727272727,
              "unit": "%"
          },
          "P": {
              "label": "Phosphorus",
              "quantity": 6.714285714285714,
              "unit": "%"
          },
          "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 78.77777777777777,
              "unit": "%"
          },
          "VITC": {
              "label": "Vitamin C",
              "quantity": 2.6666666666666665,
              "unit": "%"
          },
          "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 6.5,
              "unit": "%"
          },
          "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 4.692307692307692,
              "unit": "%"
          },
          "NIA": {
              "label": "Niacin (B3)",
              "quantity": 3.48125,
              "unit": "%"
          },
          "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 16.076923076923077,
              "unit": "%"
          },
          "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 2.75,
              "unit": "%"
          },
          "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
          },
          "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
          },
          "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.7333333333333334,
              "unit": "%"
          },
          "VITK1": {
              "label": "Vitamin K",
              "quantity": 1.5,
              "unit": "%"
          }
      },
      "totalNutrientsKCal": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 85,
              "unit": "kcal"
          },
          "PROCNT_KCAL": {
              "label": "Calories from protein",
              "quantity": 6,
              "unit": "kcal"
          },
          "FAT_KCAL": {
              "label": "Calories from fat",
              "quantity": 0,
              "unit": "kcal"
          },
          "CHOCDF_KCAL": {
              "label": "Calories from carbohydrates",
              "quantity": 79,
              "unit": "kcal"
          }
      }
  }
  },
  {
    name: "Asparagus",
    data: {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e62ea83c8b864be39442f534bffcfed6",
      "yield": 2.0,
      "calories": 20,
      "totalWeight": 100.0,
      "dietLabels": [
          "LOW_FAT",
          "LOW_SODIUM"
      ],
      "healthLabels": [
          "FAT_FREE",
          "LOW_FAT_ABS",
          "SUGAR_CONSCIOUS",
          "LOW_POTASSIUM",
          "KIDNEY_FRIENDLY",
          "KETO_FRIENDLY",
          "VEGAN",
          "VEGETARIAN",
          "PESCATARIAN",
          "PALEO",
          "SPECIFIC_CARBS",
          "MEDITERRANEAN",
          "DASH",
          "DAIRY_FREE",
          "GLUTEN_FREE",
          "WHEAT_FREE",
          "EGG_FREE",
          "MILK_FREE",
          "PEANUT_FREE",
          "TREE_NUT_FREE",
          "SOY_FREE",
          "FISH_FREE",
          "SHELLFISH_FREE",
          "PORK_FREE",
          "RED_MEAT_FREE",
          "CRUSTACEAN_FREE",
          "CELERY_FREE",
          "MUSTARD_FREE",
          "SESAME_FREE",
          "LUPINE_FREE",
          "MOLLUSK_FREE",
          "ALCOHOL_FREE",
          "NO_OIL_ADDED",
          "NO_SUGAR_ADDED",
          "SULPHITE_FREE",
          "KOSHER"
      ],
      "cautions": [],
      "totalNutrients": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 20.0,
              "unit": "kcal"
          },
          "FAT": {
              "label": "Total lipid (fat)",
              "quantity": 0.12,
              "unit": "g"
          },
          "FASAT": {
              "label": "Fatty acids, total saturated",
              "quantity": 0.04,
              "unit": "g"
          },
          "FAMS": {
              "label": "Fatty acids, total monounsaturated",
              "quantity": 0.0,
              "unit": "g"
          },
          "FAPU": {
              "label": "Fatty acids, total polyunsaturated",
              "quantity": 0.05,
              "unit": "g"
          },
          "CHOCDF": {
              "label": "Carbohydrate, by difference",
              "quantity": 3.88,
              "unit": "g"
          },
          "FIBTG": {
              "label": "Fiber, total dietary",
              "quantity": 2.1,
              "unit": "g"
          },
          "SUGAR": {
              "label": "Sugars, total",
              "quantity": 1.88,
              "unit": "g"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 2.2,
              "unit": "g"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "mg"
          },
          "NA": {
              "label": "Sodium, Na",
              "quantity": 2.0,
              "unit": "mg"
          },
          "CA": {
              "label": "Calcium, Ca",
              "quantity": 24.0,
              "unit": "mg"
          },
          "MG": {
              "label": "Magnesium, Mg",
              "quantity": 14.0,
              "unit": "mg"
          },
          "K": {
              "label": "Potassium, K",
              "quantity": 202.0,
              "unit": "mg"
          },
          "FE": {
              "label": "Iron, Fe",
              "quantity": 2.14,
              "unit": "mg"
          },
          "ZN": {
              "label": "Zinc, Zn",
              "quantity": 0.54,
              "unit": "mg"
          },
          "P": {
              "label": "Phosphorus, P",
              "quantity": 52.0,
              "unit": "mg"
          },
          "VITA_RAE": {
              "label": "Vitamin A, RAE",
              "quantity": 38.0,
              "unit": "µg"
          },
          "VITC": {
              "label": "Vitamin C, total ascorbic acid",
              "quantity": 5.6,
              "unit": "mg"
          },
          "THIA": {
              "label": "Thiamin",
              "quantity": 0.143,
              "unit": "mg"
          },
          "RIBF": {
              "label": "Riboflavin",
              "quantity": 0.141,
              "unit": "mg"
          },
          "NIA": {
              "label": "Niacin",
              "quantity": 0.978,
              "unit": "mg"
          },
          "VITB6A": {
              "label": "Vitamin B-6",
              "quantity": 0.091,
              "unit": "mg"
          },
          "FOLDFE": {
              "label": "Folate, DFE",
              "quantity": 52.0,
              "unit": "µg"
          },
          "FOLFD": {
              "label": "Folate, food",
              "quantity": 52.0,
              "unit": "µg"
          },
          "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITB12": {
              "label": "Vitamin B-12",
              "quantity": 0.0,
              "unit": "µg"
          },
          "VITD": {
              "label": "Vitamin D (D2 + D3)",
              "quantity": 0.0,
              "unit": "µg"
          },
          "TOCPHA": {
              "label": "Vitamin E (alpha-tocopherol)",
              "quantity": 1.13,
              "unit": "mg"
          },
          "VITK1": {
              "label": "Vitamin K (phylloquinone)",
              "quantity": 41.6,
              "unit": "µg"
          },
          "WATER": {
              "label": "Water",
              "quantity": 93.22,
              "unit": "g"
          }
      },
      "totalDaily": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1.0,
              "unit": "%"
          },
          "FAT": {
              "label": "Fat",
              "quantity": 0.18461538461538463,
              "unit": "%"
          },
          "FASAT": {
              "label": "Saturated",
              "quantity": 0.2,
              "unit": "%"
          },
          "CHOCDF": {
              "label": "Carbs",
              "quantity": 1.2933333333333332,
              "unit": "%"
          },
          "FIBTG": {
              "label": "Fiber",
              "quantity": 8.4,
              "unit": "%"
          },
          "PROCNT": {
              "label": "Protein",
              "quantity": 4.4,
              "unit": "%"
          },
          "CHOLE": {
              "label": "Cholesterol",
              "quantity": 0.0,
              "unit": "%"
          },
          "NA": {
              "label": "Sodium",
              "quantity": 0.08333333333333333,
              "unit": "%"
          },
          "CA": {
              "label": "Calcium",
              "quantity": 2.4,
              "unit": "%"
          },
          "MG": {
              "label": "Magnesium",
              "quantity": 3.3333333333333335,
              "unit": "%"
          },
          "K": {
              "label": "Potassium",
              "quantity": 4.297872340425532,
              "unit": "%"
          },
          "FE": {
              "label": "Iron",
              "quantity": 11.88888888888889,
              "unit": "%"
          },
          "ZN": {
              "label": "Zinc",
              "quantity": 4.909090909090909,
              "unit": "%"
          },
          "P": {
              "label": "Phosphorus",
              "quantity": 7.428571428571429,
              "unit": "%"
          },
          "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 4.222222222222222,
              "unit": "%"
          },
          "VITC": {
              "label": "Vitamin C",
              "quantity": 6.222222222222222,
              "unit": "%"
          },
          "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 11.916666666666666,
              "unit": "%"
          },
          "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 10.846153846153845,
              "unit": "%"
          },
          "NIA": {
              "label": "Niacin (B3)",
              "quantity": 6.1125,
              "unit": "%"
          },
          "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.999999999999999,
              "unit": "%"
          },
          "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 13.0,
              "unit": "%"
          },
          "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
          },
          "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
          },
          "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 7.533333333333332,
              "unit": "%"
          },
          "VITK1": {
              "label": "Vitamin K",
              "quantity": 34.666666666666664,
              "unit": "%"
          }
        },
      "totalNutrientsKCal": {
          "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 20,
              "unit": "kcal"
          },
          "PROCNT_KCAL": {
              "label": "Calories from protein",
              "quantity": 7,
              "unit": "kcal"
          },
          "FAT_KCAL": {
              "label": "Calories from fat",
              "quantity": 1,
              "unit": "kcal"
          },
          "CHOCDF_KCAL": {
              "label": "Calories from carbohydrates",
              "quantity": 12,
              "unit": "kcal"
          }
      }
  }
  },
  {
    name: "Potato",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_2bd0bd8850064aeb9622a509d3631602",
      yield: 2.0,
      calories: 77,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 77.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.09,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.026,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.002,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.043,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 17.47,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.2,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.78,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 2.02,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 6.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 12.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 23.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 421.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.78,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.29,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 57.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 19.7,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.08,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.032,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 1.054,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.295,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 16.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 16.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.01,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 1.9,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 79.34,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 3.85,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.13846153846153847,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.13,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 5.823333333333333,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.8,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 4.04,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.25,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.2,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.476190476190476,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 8.957446808510639,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 4.333333333333333,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 2.6363636363636362,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 8.142857142857142,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 21.88888888888889,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 6.666666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 2.4615384615384617,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 6.5875,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 22.69230769230769,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 4.0,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.06666666666666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.5833333333333333,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 77,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 8,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 1,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 68,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Carrots",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_d6bb374f5f544b6b970348a028cbe6e4",
      yield: 2.0,
      calories: 41,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 41.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.24,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.037,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.0,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.014,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.117,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 9.58,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.8,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 4.74,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.93,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 69.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 33.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 12.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 320.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.3,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.24,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 35.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 835.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 5.9,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.066,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.058,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.983,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.138,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 19.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 19.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.66,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 13.2,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 88.29,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 2.05,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.36923076923076925,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.185,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 3.1933333333333334,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 11.2,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.86,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 2.875,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 3.3,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.857142857142857,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 6.808510638297872,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 1.6666666666666667,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 2.1818181818181817,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 5.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 92.77777777777777,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 6.555555555555555,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 5.500000000000001,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 4.461538461538462,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 6.14375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 10.615384615384615,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 4.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 4.4,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 11.0,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 41,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 3,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 2,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 36,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Peas",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3e2a8b4ff8fc4cfa965f7524f91a9b83",
      yield: 2.0,
      calories: 81,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 81.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.4,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.071,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.035,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.187,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 14.45,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 5.1,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 5.67,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 5.42,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 5.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 25.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 33.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 244.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 1.47,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.24,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 108.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 38.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 40.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.266,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.132,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 2.09,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.169,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 65.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 65.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.13,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 24.8,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 78.86,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 4.05,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.6153846153846154,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.355,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 4.816666666666666,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 20.4,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 10.84,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.20833333333333334,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 2.5,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 7.857142857142857,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 5.191489361702128,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 8.166666666666666,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 11.272727272727273,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 15.428571428571429,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 4.222222222222222,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 44.44444444444444,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 22.166666666666668,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 10.153846153846155,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 13.0625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 13.000000000000002,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 16.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.8666666666666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 20.666666666666668,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 81,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 21,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 4,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 56,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Broccoli",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_de93986798604755a6c040dc078a6967",
      yield: 2.0,
      calories: 34,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 34.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.37,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.039,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.011,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.038,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 6.64,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.6,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 1.7,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 2.82,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 33.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 47.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 21.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 316.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.73,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.41,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 66.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 31.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 89.2,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.071,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.117,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.639,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.175,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 63.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 63.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.78,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 101.6,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 89.3,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.7,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.5692307692307692,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.195,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 2.2133333333333334,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 10.4,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 5.64,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.375,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 4.7,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.0,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 6.723404255319149,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 4.055555555555555,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 3.727272727272727,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 9.428571428571429,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 3.4444444444444446,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 99.11111111111111,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 5.916666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 9.0,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 3.99375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 13.461538461538462,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 15.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 5.2,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 84.66666666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 34,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 9,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 3,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 22,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Cauliflower",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_167d66014edd4bd2b6351496d2dbe067",
      yield: 2.0,
      calories: 25,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 25.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.28,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.13,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.0,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.034,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.031,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 4.97,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 1.91,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.92,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 30.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 22.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 15.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 299.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.42,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.27,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 44.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 48.2,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.05,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.06,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.507,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.184,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 57.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 57.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.08,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 15.5,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 92.07,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.25,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.43076923076923085,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.65,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 1.6566666666666667,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 3.84,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.25,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 2.2,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 3.5714285714285716,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 6.361702127659575,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 2.3333333333333335,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 2.4545454545454546,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 6.285714285714286,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 53.55555555555556,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 4.166666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 4.615384615384615,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 3.16875,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 14.153846153846152,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 14.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.5333333333333333,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 12.916666666666666,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 25,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 6,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 2,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 17,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Bell Peppers",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_d777441ad42d49ab9e878e70650a83c7",
      yield: 2.0,
      calories: 31,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 31.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.3,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.027,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.003,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.07,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 6.03,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.1,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 4.2,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.99,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 4.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 7.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 12.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 211.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.43,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.25,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 26.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 157.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 127.7,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.054,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.085,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.979,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.291,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 46.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 46.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 1.58,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 4.9,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 92.21,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.55,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.46153846153846156,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.135,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 2.01,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.4,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.98,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.16666666666666666,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.7,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.857142857142857,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 4.48936170212766,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 2.388888888888889,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 2.272727272727273,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 3.7142857142857144,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 17.444444444444443,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 141.88888888888889,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 4.500000000000001,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 6.538461538461538,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 6.1187499999999995,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 22.384615384615383,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 11.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 10.533333333333333,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 4.083333333333334,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 31,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 4,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 3,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 24,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Mushrooms",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_913a0ce8135b4f11b62f1fdffda2a76a",
      yield: 2.0,
      calories: 22,
      totalWeight: 100.0,
      dietLabels: ["HIGH_PROTEIN", "LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 22.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.34,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.05,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.0,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.16,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 3.26,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 1.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 1.98,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 3.09,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 5.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 3.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 9.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 318.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.5,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.52,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 86.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 2.1,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.081,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.402,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 3.607,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.104,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 17.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 17.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.04,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.2,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.01,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.0,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 92.45,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.1,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.5230769230769231,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.25,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 1.0866666666666667,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 4.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 6.18,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.20833333333333334,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.3,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.142857142857143,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 6.76595744680851,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 2.7777777777777777,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.7272727272727275,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 12.285714285714286,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 2.3333333333333335,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 6.75,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 30.923076923076923,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 22.543750000000003,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 8.0,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 4.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 1.6666666666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 1.3333333333333333,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.06666666666666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.0,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 22,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 10,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 2,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 10,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Spinach",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_d26c0fb7cd8541c7ae4658ef35675fe5",
      yield: 2.0,
      calories: 23,
      totalWeight: 100.0,
      dietLabels: ["LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DASH",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 23.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.39,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.063,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.01,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.165,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 3.63,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.2,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.42,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 2.86,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 79.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 99.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 79.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 558.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 2.71,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.53,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 49.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 469.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 28.1,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.078,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.189,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.724,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.195,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 194.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 194.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 2.03,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 482.9,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 91.4,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.15,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.6,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.315,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 1.21,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.8,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 5.72,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 3.2916666666666665,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 9.9,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 18.80952380952381,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 11.872340425531915,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 15.055555555555555,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.818181818181818,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 7.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 52.111111111111114,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 31.22222222222222,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 6.5,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 14.538461538461537,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 4.5249999999999995,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 15.0,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 48.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 13.533333333333331,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 402.4166666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 23,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 9,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 3,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 11,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Butter",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_fef8a1da72994f2299359c9b651ee552",
      yield: 4.0,
      calories: 717,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 717.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 81.11,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 51.368,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 3.278,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 21.021,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 3.043,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.06,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.06,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.85,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 215.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 11.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 24.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 2.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 24.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.02,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.09,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 24.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 684.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.005,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.034,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.042,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.003,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 3.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 3.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.17,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 1.5,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 2.32,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 7.0,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 17.94,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 35.85,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 124.78461538461538,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 256.84000000000003,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.02,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.7,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 71.66666666666667,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.4583333333333333,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 2.4,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 0.47619047619047616,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 0.5106382978723404,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.1111111111111111,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.8181818181818182,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 3.4285714285714284,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 76.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.4166666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 2.6153846153846154,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.2625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.23076923076923075,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 7.083333333333334,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 10.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 15.466666666666665,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 5.833333333333333,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 716,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 3,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 713,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Cheese",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_cbb28c007f9a4310a2b61b03048a344a",
      yield: 4.0,
      calories: 406,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 406.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 33.82,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 19.368,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 1.179,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 8.428,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 1.433,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 1.33,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.28,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 24.04,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 102.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 644.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 675.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 27.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 76.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.16,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 3.43,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 473.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 263.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.027,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.434,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.039,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.049,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 26.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 26.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.88,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.6,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.78,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 2.9,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 37.1,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 20.3,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 52.03076923076923,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 96.84,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.44333333333333336,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 48.08,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 34.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 26.833333333333332,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 67.5,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 6.428571428571429,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 1.6170212765957446,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.8888888888888888,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 31.181818181818183,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 67.57142857142857,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 29.22222222222222,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.2500000000000004,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 33.38461538461538,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.24375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 3.769230769230769,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 6.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 36.66666666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 4.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 5.2,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 2.4166666666666665,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 405,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 96,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 304,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 5,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Eggs",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0acc0efce13646989a0b03312c0a4ab1",
      yield: 2.0,
      calories: 143,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "SPECIFIC_CARBS",
        "MEDITERRANEAN",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 143.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 9.51,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 3.126,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.038,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 3.658,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 1.911,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.72,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.37,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 12.56,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 372.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 142.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 56.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 12.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 138.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 1.75,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.29,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 198.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 160.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.04,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.457,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.075,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.17,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 47.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 47.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.89,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 2.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 1.05,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.3,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 76.15,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 7.15,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 14.63076923076923,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 15.629999999999999,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.24,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 25.12,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 124.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 5.916666666666667,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 5.6,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.857142857142857,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.9361702127659575,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 9.722222222222221,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 11.727272727272727,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 28.285714285714285,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 17.77777777777778,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 3.3333333333333335,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 35.15384615384615,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.46875,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 13.076923076923077,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 11.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 37.083333333333336,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 13.333333333333334,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 7.0,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.25,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 143,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 52,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 88,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 3,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Milk",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_5b1a1fdd92c64727a511932faffca1f3",
      yield: 2.0,
      calories: 61,
      totalWeight: 100.0,
      dietLabels: ["LOW_SODIUM"],
      healthLabels: [
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "MEDITERRANEAN",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 61.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 3.25,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 1.865,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.812,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.195,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 4.8,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 5.05,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 3.15,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 10.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 43.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 113.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 10.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 132.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.03,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.37,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 84.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 46.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.046,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.169,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.089,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.036,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 5.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 5.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.45,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 1.3,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.07,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.3,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 88.13,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 3.05,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 5.0,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 9.325,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 1.6,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 6.3,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 3.3333333333333335,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.7916666666666667,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 11.3,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.380952380952381,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.8085106382978724,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.16666666666666666,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 3.3636363636363638,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 12.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 5.111111111111111,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 3.833333333333333,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 13.000000000000002,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.55625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.7692307692307687,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 18.75,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 8.666666666666666,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.46666666666666673,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.25,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 61,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 13,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 29,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 19,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Yoghurt",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_58fd11ac36d444f19f37f83d832b5f2d",
      yield: 2.0,
      calories: 61,
      totalWeight: 100.0,
      dietLabels: ["LOW_SODIUM"],
      healthLabels: [
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "MEDITERRANEAN",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 61.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 3.25,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 2.096,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.893,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.092,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 4.66,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 4.66,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 3.47,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 13.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 46.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 121.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 12.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 155.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.05,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.59,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 95.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 27.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.5,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.029,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.142,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.075,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.032,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 7.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 7.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.37,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.1,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.06,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.2,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 87.9,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 3.05,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 5.0,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 10.48,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 1.5533333333333332,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 6.94,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 4.333333333333333,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.9166666666666667,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 12.1,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.857142857142857,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 3.297872340425532,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.2777777777777778,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 5.363636363636363,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 13.571428571428571,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 3.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.5555555555555556,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.416666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 10.923076923076922,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.46875,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.4615384615384617,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 15.416666666666668,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.4,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.16666666666666666,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 61,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 14,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 29,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 18,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Hamburger",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_869b50a17e0d4f499e9d61f76df98328",
      yield: 2.0,
      calories: 254,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB", "LOW_SODIUM"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "SPECIFIC_CARBS",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 254.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 20.0,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 7.581,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 1.18,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 8.848,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.521,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 0.0,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 17.17,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 71.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 66.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 18.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 17.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 270.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 1.94,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 4.18,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 158.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 4.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.043,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.151,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 4.227,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.323,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 7.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 7.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 2.14,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.1,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.17,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 1.8,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 61.87,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 12.7,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 30.76923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 37.905,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.0,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 34.34,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 23.666666666666668,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 2.75,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.8,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 4.0476190476190474,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 5.74468085106383,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 10.777777777777779,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 38.0,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 22.571428571428573,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.4444444444444444,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 3.5833333333333335,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 11.615384615384615,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 26.418750000000003,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 24.84615384615385,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 89.16666666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.1333333333333333,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.5,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 254,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 70,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 184,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 0,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "French Fries",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_aa17667baa7e46beb17410974e38f69b",
      yield: 2.0,
      calories: 150,
      totalWeight: 100.0,
      dietLabels: [],
      healthLabels: [
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "MEDITERRANEAN",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 150.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 4.99,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 1.249,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.106,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 3.102,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.27,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 23.96,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.21,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 2.34,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 349.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 13.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 21.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 380.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.62,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.34,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 81.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 7.7,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.106,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.037,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 2.14,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.196,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 31.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 31.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.1,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 2.1,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 67.11,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 7.5,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 7.676923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 6.245,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 7.986666666666666,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 4.68,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 14.541666666666666,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.3,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.0,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 8.085106382978724,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 3.4444444444444446,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 3.090909090909091,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 11.571428571428571,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 8.555555555555555,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 8.833333333333334,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 2.846153846153846,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 13.375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 15.076923076923077,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 7.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.75,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 150,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 9,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 45,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 96,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Fizzy Drinks (Coke)",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_1300d692d4b94139a3e31ea497fc259c",
      yield: 2.0,
      calories: 37,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 37.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.02,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.0,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.0,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.0,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 9.56,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 8.97,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.07,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 4.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 2.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 0.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 2.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.11,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.02,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 10.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.0,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.0,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.0,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.0,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 0.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 0.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.0,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.0,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 90.31,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.85,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.03076923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.0,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 3.1866666666666665,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.14,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.16666666666666666,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.2,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 0.0,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 0.0425531914893617,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.6111111111111112,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.18181818181818182,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 1.4285714285714286,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.0,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.0,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.0,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.0,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.0,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.0,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.0,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 37,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 0,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 0,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 37,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Fried Chicken",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_760b066ad2b6429888813cb72eb1cb95",
      yield: 2.0,
      calories: 307,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "DAIRY_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 307.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 20.36,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 3.566,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.123,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 7.735,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 6.511,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 14.93,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.9,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.08,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 15.92,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 55.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 594.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 11.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 24.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 251.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.83,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.59,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 272.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 5.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.6,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.092,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.204,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 5.985,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.148,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 15.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 6.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 5.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.33,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.2,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 1.12,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 7.0,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 46.53,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 15.35,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 31.323076923076922,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 17.83,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 4.976666666666667,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 3.6,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 31.84,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 18.333333333333332,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 24.75,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.1,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.714285714285714,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 5.340425531914893,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 4.611111111111111,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 5.363636363636363,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 38.857142857142854,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.5555555555555556,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 7.666666666666666,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 15.69230769230769,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 37.40625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 11.384615384615383,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 3.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 13.75,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 1.3333333333333333,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 7.466666666666668,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 5.833333333333333,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 307,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 64,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 183,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 60,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Hotdogs",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_69fcd45e5f7146f3bd04d9eb0041a5fc",
      yield: 2.0,
      calories: 305,
      totalWeight: 100.0,
      dietLabels: ["LOW_CARB"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 305.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 27.64,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 10.77,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 13.67,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 2.73,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 1.72,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 0.0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 11.53,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 50.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 819.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 11.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 10.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 167.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 1.15,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.84,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 86.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 18.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.199,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.12,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 2.634,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.13,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 4.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 4.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 1.3,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.9,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.25,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 1.8,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 55.96,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 15.25,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 42.52307692307692,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 53.85,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 0.5733333333333334,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 23.06,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 16.666666666666668,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 34.125,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.1,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.380952380952381,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 3.5531914893617023,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 6.388888888888888,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 16.727272727272727,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 12.285714285714286,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 2.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 16.583333333333336,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 9.23076923076923,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 16.4625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 10.0,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.0,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 54.16666666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 6.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.6666666666666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.5,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 305,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 47,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 251,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 7,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Chocolate Milkshakes",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e24dbac95e5f47a2acd423e4fe2a2000",
      yield: 4.0,
      calories: 480,
      totalWeight: 100.0,
      dietLabels: ["LOW_SODIUM"],
      healthLabels: [
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 480.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 30.0,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 17.75,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 9.966,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.966,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 63.9,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 5.9,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 54.5,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 54.5,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 4.2,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 11.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 32.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 115.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 365.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 3.13,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.62,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 132.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.055,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.09,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.427,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.035,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 13.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 13.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.26,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 5.6,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 0.7,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 24.0,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 46.15384615384615,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 88.75,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 21.3,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 23.6,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 8.4,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.4583333333333333,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 3.2,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 27.38095238095238,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.76595744680851,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 17.38888888888889,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 14.727272727272727,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 18.857142857142858,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 4.583333333333334,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 6.9230769230769225,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 2.6687499999999997,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.6923076923076925,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 3.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.7333333333333334,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 4.666666666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 480,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 15,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 239,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 226,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Pizza",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_6a0bf48755b2416199398bfcbae983a6",
      yield: 2.0,
      calories: 268,
      totalWeight: 100.0,
      dietLabels: ["BALANCED"],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "EGG_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_SUGAR_ADDED",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 268.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 12.28,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 4.272,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 4.246,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 1.903,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 29.02,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.2,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 3.57,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 10.36,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 14.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 447.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 179.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 23.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 152.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 2.27,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.32,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 179.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 66.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 1.2,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.211,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.258,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 2.196,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.083,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 65.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 0.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 38.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.78,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 1.01,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 6.6,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 46.28,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 13.4,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 18.892307692307693,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 21.360000000000003,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 9.673333333333334,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.8,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 20.72,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 4.666666666666667,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 18.625,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 17.9,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.476190476190476,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 3.234042553191489,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 12.61111111111111,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 12.0,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 25.571428571428573,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 7.333333333333333,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 1.3333333333333333,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 17.583333333333332,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 19.846153846153847,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 13.725000000000001,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 6.384615384615385,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 16.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 32.5,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 6.733333333333333,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 5.5,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 268,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 41,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 111,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 116,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Chocolate",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_99b73832f3fd467eb8de9d4452a5e179",
      yield: 4.0,
      calories: 480,
      totalWeight: 100.0,
      dietLabels: ["LOW_SODIUM"],
      healthLabels: [
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "PALEO",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 480.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 30.0,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 17.75,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 9.966,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.966,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 63.9,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 5.9,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 54.5,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 54.5,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 4.2,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 11.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 32.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 115.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 365.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 3.13,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 1.62,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 132.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.055,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.09,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.427,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.035,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 13.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 13.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.26,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 5.6,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 0.7,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 24.0,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 46.15384615384615,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 88.75,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 21.3,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 23.6,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 8.4,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.4583333333333333,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 3.2,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 27.38095238095238,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.76595744680851,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 17.38888888888889,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 14.727272727272727,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 18.857142857142858,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 4.583333333333334,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 6.9230769230769225,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 2.6687499999999997,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.6923076923076925,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 3.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.7333333333333334,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 4.666666666666667,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 480,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 15,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 239,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 226,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Jelly Sweets",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3fe58e388bb1424d83bda139ed8503f6",
      yield: 2.0,
      calories: 266,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT", "LOW_SODIUM"],
      healthLabels: [
        "FAT_FREE",
        "LOW_FAT_ABS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGAN",
        "VEGETARIAN",
        "PESCATARIAN",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 266.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 0.02,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 0.005,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 0.001,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.004,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 69.95,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 1.0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 51.22,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 51.22,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.15,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 30.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 7.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 6.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 54.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.19,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.03,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 6.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 0.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.9,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.001,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.026,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.036,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.02,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 2.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 2.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.0,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.3,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 29.77,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 13.3,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 0.03076923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.025,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 23.316666666666666,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 4.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.3,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.25,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 0.7,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 1.4285714285714286,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 1.148936170212766,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 1.0555555555555556,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.2727272727272727,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 0.8571428571428571,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.0,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 1.0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.08333333333333334,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 2.0,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.22499999999999998,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 1.5384615384615383,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 0.5,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.0,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.0,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.25,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 266,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 1,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 0,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 265,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Cupcakes",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_f76c156ffd1b42feb877a63d6c33ae55",
      yield: 2.0,
      calories: 305,
      totalWeight: 100.0,
      dietLabels: ["LOW_FAT"],
      healthLabels: [
        "LOW_FAT_ABS",
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 305.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 3.7,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 1.08,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 1.84,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.48,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 67.2,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 4.3,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 4.3,
          unit: "g",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 413.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 36.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 25.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 224.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 1.54,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.55,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 183.0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.03,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.13,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.71,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.007000000000000001,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 22.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 5.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 10.0,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 22.8,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 15.25,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 5.6923076923076925,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 5.4,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 22.4,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 17.2,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 8.6,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 17.208333333333332,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 3.6,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.9523809523809526,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 4.76595744680851,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 8.555555555555555,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 5.000000000000001,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 26.142857142857142,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.5,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 10.0,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 4.4375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.5384615384615385,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 5.5,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 305,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 16,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 32,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 257,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Biscuits",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_6baac361e3e240388c5910d6748c9b3a",
      yield: 2.0,
      calories: 353,
      totalWeight: 100.0,
      dietLabels: [],
      healthLabels: [
        "SUGAR_CONSCIOUS",
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "MEDITERRANEAN",
        "EGG_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 353.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 16.3,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 4.324,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 6.93,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 4.163,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 44.6,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 1.5,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 2.18,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 7.0,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 3.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 580.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 235.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 18.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 121.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 2.9,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.54,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 164.0,
          unit: "mg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.2,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.356,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.31,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 2.949,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.035,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 95.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 12.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 49.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.08,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 28.9,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 17.65,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 25.076923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 21.619999999999997,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 14.866666666666667,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 6.0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 14.0,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 1.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 24.166666666666668,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 23.5,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 4.285714285714286,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.574468085106383,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 16.11111111111111,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.909090909090909,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 23.428571428571427,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.2222222222222222,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 29.666666666666668,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 23.846153846153847,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 18.43125,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.6923076923076925,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 23.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 3.3333333333333335,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 353,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 28,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 147,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 178,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Donuts",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_346266f97ca047a983532fbfe9f9081c",
      yield: 4.0,
      calories: 421,
      totalWeight: 100.0,
      dietLabels: ["LOW_SODIUM"],
      healthLabels: [
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "MEDITERRANEAN",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 421.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 22.7,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 9.453,
          unit: "g",
        },
        FATRN: {
          label: "Fatty acids, total trans",
          quantity: 0.455,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 7.248,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 3.588,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 47.93,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 2.1,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 22.75,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 6.14,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 30.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 316.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 101.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 17.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 102.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 2.38,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.61,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 117.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 5.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 1.2,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.312,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.185,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 2.61,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.037,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 155.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 40.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 68.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.11,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.1,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 1.43,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 11.5,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 22.0,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 21.05,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 34.92307692307692,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 47.265,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 15.976666666666667,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.4,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 12.28,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 10.0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 13.166666666666666,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 10.1,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 4.0476190476190474,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.1702127659574466,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 13.222222222222221,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 5.545454545454546,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 16.714285714285715,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.5555555555555556,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 1.3333333333333333,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 26.0,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 14.23076923076923,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 16.3125,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.846153846153846,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 38.75,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 4.583333333333334,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 9.533333333333333,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 9.583333333333334,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 422,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 25,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 205,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 192,
          unit: "kcal",
        },
      },
    },
  },
  {
    name: "Ice Cream",
    data: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_ce271ebb307e4f658c6a3990237c5b00",
      yield: 2.0,
      calories: 207,
      totalWeight: 100.0,
      dietLabels: ["LOW_SODIUM"],
      healthLabels: [
        "LOW_POTASSIUM",
        "KIDNEY_FRIENDLY",
        "VEGETARIAN",
        "PESCATARIAN",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "RED_MEAT_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "SULPHITE_FREE",
        "KOSHER",
      ],
      cautions: ["SULFITES"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 207.0,
          unit: "kcal",
        },
        FAT: {
          label: "Total lipid (fat)",
          quantity: 11.0,
          unit: "g",
        },
        FASAT: {
          label: "Fatty acids, total saturated",
          quantity: 6.79,
          unit: "g",
        },
        FAMS: {
          label: "Fatty acids, total monounsaturated",
          quantity: 2.969,
          unit: "g",
        },
        FAPU: {
          label: "Fatty acids, total polyunsaturated",
          quantity: 0.452,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbohydrate, by difference",
          quantity: 23.6,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber, total dietary",
          quantity: 0.7,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars, total",
          quantity: 21.22,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 21.22,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 3.5,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 44.0,
          unit: "mg",
        },
        NA: {
          label: "Sodium, Na",
          quantity: 80.0,
          unit: "mg",
        },
        CA: {
          label: "Calcium, Ca",
          quantity: 128.0,
          unit: "mg",
        },
        MG: {
          label: "Magnesium, Mg",
          quantity: 14.0,
          unit: "mg",
        },
        K: {
          label: "Potassium, K",
          quantity: 199.0,
          unit: "mg",
        },
        FE: {
          label: "Iron, Fe",
          quantity: 0.09,
          unit: "mg",
        },
        ZN: {
          label: "Zinc, Zn",
          quantity: 0.69,
          unit: "mg",
        },
        P: {
          label: "Phosphorus, P",
          quantity: 105.0,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A, RAE",
          quantity: 118.0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C, total ascorbic acid",
          quantity: 0.6,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin",
          quantity: 0.041,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin",
          quantity: 0.24,
          unit: "mg",
        },
        NIA: {
          label: "Niacin",
          quantity: 0.116,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B-6",
          quantity: 0.048,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate, DFE",
          quantity: 5.0,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate, food",
          quantity: 5.0,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0.0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B-12",
          quantity: 0.39,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D (D2 + D3)",
          quantity: 0.2,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E (alpha-tocopherol)",
          quantity: 0.3,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K (phylloquinone)",
          quantity: 0.3,
          unit: "µg",
        },
        WATER: {
          label: "Water",
          quantity: 61.0,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 10.35,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 16.923076923076923,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 33.95,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 7.866666666666666,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 2.8,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 7.0,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 14.666666666666666,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 3.3333333333333335,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 12.8,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 3.3333333333333335,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 4.23404255319149,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 0.5,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 6.2727272727272725,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 15.0,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 13.11111111111111,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.6666666666666666,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 3.4166666666666674,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 18.46153846153846,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.7250000000000001,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 3.692307692307692,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.25,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 16.25,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 1.3333333333333333,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 2.0,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.25,
          unit: "%",
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 207,
          unit: "kcal",
        },
        PROCNT_KCAL: {
          label: "Calories from protein",
          quantity: 14,
          unit: "kcal",
        },
        FAT_KCAL: {
          label: "Calories from fat",
          quantity: 99,
          unit: "kcal",
        },
        CHOCDF_KCAL: {
          label: "Calories from carbohydrates",
          quantity: 94,
          unit: "kcal",
        },
      },
    },
  },
];
