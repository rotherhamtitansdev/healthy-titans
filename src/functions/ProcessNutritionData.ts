import { ChartColours } from "../models/ChartColours";

const NHSBoundaries = {
  Fat: { low: 3, high: 17.5 },
  Saturates: { low: 1.5, high: 5 },
  Sugars: { low: 5, high: 22.5 },
  Salt: { low: 0.1, high: 0.6 },
};

function ProcessNutritionData(Amounts: number[]) {
  const colours = {
    red: { primary: "#ea5053", secondary: "#f4babb" },
    yellow: { primary: "#f4f277", secondary: "#faf8c8" },
    green: { primary: "#8ded8e", secondary: "#d1f7d2" },
  };
  // removing protein from array, as this doesn't need to be calculated
  const Protein: number | undefined = Amounts.shift();

  const Labels = ["Fat", "Saturates", "Sugars", "Salt"];

  const chartColours: ChartColours[] = [];

  Labels.forEach((label: string, index: number) => {
    if (Amounts[index] >= NHSBoundaries[label as keyof typeof NHSBoundaries].high) {
      chartColours.push({
        name: `${label}\n\n\n\n`,
        primary: colours.red.primary,
        secondary: colours.red.secondary,
        status: 3,
        position: index + 2,
      });
    } else if (Amounts[index] <= NHSBoundaries[label as keyof typeof NHSBoundaries].low) {
      chartColours.push({
        name: `${label}\n\n\n\n`,
        primary: colours.green.primary,
        secondary: colours.green.secondary,
        status: 1,
        position: index + 2,
      });
    } else {
      chartColours.push({
        name: `${label}\n\n\n\n`,
        primary: colours.yellow.primary,
        secondary: colours.yellow.secondary,
        status: 2,
        position: index + 2,
      });
    }
  });
  // manually adding Protein details
  chartColours.unshift({
    name: "Protein\n\n\n\n",
    primary: "#ACCDF6",
    secondary: "#ACCDF6",
    status: 3,
    position: 1,
  });

  // putting Protein back into array
  if (Protein) {
    Amounts.unshift(Protein);
  }
  return chartColours;
}

export default ProcessNutritionData;
