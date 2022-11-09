import { ChartColours, NHSBoundaries } from "../models/AnalyticsChartConfig";

function ProcessNutritionData(Amounts: number[]) {
  const colours = {
    red: { primary: "#ea5053", secondary: "#f4babb" },
    yellow: { primary: "#f4f277", secondary: "#faf8c8" },
    green: { primary: "#8ded8e", secondary: "#d1f7d2" },
  };

  const Labels = ["Fat", "Saturates", "Sugars", "Salt"];

  const chartColours: ChartColours[] = [];

  Labels.forEach((label: string, index: number) => {
    if (Amounts[index] >= NHSBoundaries[label as keyof typeof NHSBoundaries].high) {
      chartColours.push({
        name: label,
        primary: colours.red.primary,
        secondary: colours.red.secondary,
        status: 3,
        position: index + 2,
      });
    } else if (Amounts[index] <= NHSBoundaries[label as keyof typeof NHSBoundaries].low) {
      chartColours.push({
        name: label,
        primary: colours.green.primary,
        secondary: colours.green.secondary,
        status: 1,
        position: index + 2,
      });
    } else {
      chartColours.push({
        name: label,
        primary: colours.yellow.primary,
        secondary: colours.yellow.secondary,
        status: 2,
        position: index + 2,
      });
    }
  });
  // manually adding Protein details
  chartColours.unshift({
    name: "Protein",
    primary: "#ACCDF6",
    secondary: "#ACCDF6",
    status: 3,
    position: 1,
  });

  return chartColours;
}

export default ProcessNutritionData;
