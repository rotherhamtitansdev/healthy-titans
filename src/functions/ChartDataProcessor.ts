import { NHSNutritionalDataModel, NHSNutritionalDataModelChart } from "../models/NHSNutritionalDataModel";
import { ChartLabel, Colour, NHSNutritionalBoundaries } from "../models/AnalyticsChartConfig";
import { Nutrient, NutritionDetailsAPIModel, TotalNutrients } from "../models/NutritionDetailsAPIModel";

export class ChartDataProcessor {
  /* This reads in the entire response from the food api, and outputs an array of the needed
  nutrients,in the correct order as per NHS labels
  */
  static parseAPINutritionalData = (nutritionalDetails: NutritionDetailsAPIModel): Nutrient[] => {
    const parsedNutrients: Nutrient[] = [];

    Object.keys(nutritionalDetails.totalNutrients).forEach((key) => {
      const newNutrient = nutritionalDetails.totalNutrients[key as keyof TotalNutrients];
      if (newNutrient) {
        const keyIndex = Object.values(ChartLabel).indexOf(key as ChartLabel);
        newNutrient.label = Object.keys(ChartLabel)[keyIndex];
        newNutrient.quantity = Math.round(newNutrient.quantity * 10) / 10;

        if (key === ChartLabel.Salt) {
          newNutrient.unit = "g";
          newNutrient.quantity /= 1000;
          newNutrient.quantity = Math.round(newNutrient.quantity * 100) / 100;
        }
        parsedNutrients.push(newNutrient);
      }
    });

    const sortedNutrients: Nutrient[] = [];

    // The following lines sort the nutrients in order they are seen on NHS food labels
    // If a nutrient doesn't exist, it means its weight was 0, so add the nutrient with a weight of 0
    Object.keys(ChartLabel).forEach((label) => {
      const nutrient = parsedNutrients.find((element) => element.label === label);

      sortedNutrients.push(nutrient || { label, unit: "g", quantity: 0 });
    });

    return sortedNutrients;
  };

  // For each of the nutrients, this calculates whether it is green, yellow, or red
  // Returns the chart data, aswell as the labels.
  // labels contain the nutrient name and its weight (ie 5g)
  static calculateNutritionalBoundariesAll = (analyticsData: Nutrient[]):
    {
      chartData:
        {
          names: string[],
          labels: string[],
          data: NHSNutritionalDataModelChart[]
        },
      calories:
        {
          label: string,
          data: NHSNutritionalDataModelChart
        }
    } => {
    const newChartLabels: string[] = [];

    const calories = String(analyticsData[0].quantity);
    analyticsData.shift();

    analyticsData.forEach((element, index) => {
      const uniqueIdentifier = " ".repeat(index);
      newChartLabels.push(`${element.quantity}g${uniqueIdentifier}`);
    });

    const deluminatedChartData = [{
      x: 1, y: 3, color: "#ACCDF6", deluminatedColor: "#ACCDF6",
    }];

    for (let i = 1; i < 5; i++) {
      const boundary = ChartDataProcessor.calculateNutritionalBoundary(
        NHSNutritionalBoundaries[i - 1],
        analyticsData[i].quantity,
      );
      const colors = ChartDataProcessor.calculateColor(boundary);
      deluminatedChartData.push({
        x: i + 1, y: boundary, color: colors[0], deluminatedColor: colors[1],
      });
    }

    return {
      chartData: { names: analyticsData.map((item) => `${item.label}\n\n\n\n`), labels: newChartLabels, data: deluminatedChartData },
      calories: {
        label: calories,
        data: {
          x: 1, y: 3, color: "#ACCDF6", deluminatedColor: "#ACCDF6",
        },
      },
    };
  };

  static calculateNutritionalBoundary = (
    NHSBoundaries: NHSNutritionalDataModel,
    actual: number,
  ): number => {
    if (actual > NHSBoundaries.high) return Colour.Red;
    if (actual < NHSBoundaries.low) return Colour.Green;
    return Colour.Yellow;
  };

  static calculateColor = (boundary: number) => {
    if (boundary > 2) {
      return ["#ea5053", "#f4babb"];
    }
    if (boundary > 1 && boundary <= 2) {
      return ["#f4f277", "#faf8c8"];
    }
    return ["#8ded8e", "#d1f7d2"];
  };

  static constructRecommendedDailyArray = ():string[] => {
    const arr:string[] = [];

    for (let i = 0; i < 5; i++) {
      arr.push(`Recommended daily${" ".repeat(i)}`);
    }

    return arr;
  };
}

export default ChartDataProcessor;
