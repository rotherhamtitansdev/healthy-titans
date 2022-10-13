import React from "react";
import { VictoryBar } from "victory";
import { chartSizing } from "../../../../models/AnalyticsChartConfig";
import { NHSNutritionalDataModelChart } from "../../../../models/NHSNutritionalDataModel";

interface NutritionBreakdownChartDeluminatedBarProps {
  data: NHSNutritionalDataModelChart[];
}

const NutritionBreakdownChartDeluminatedBar = (
  props: NutritionBreakdownChartDeluminatedBarProps
) => (
  <VictoryBar
    data={[
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 3 }
    ]}
    x="x"
    y="y"
    horizontal
    style={{
      data: {
        fill: ({ datum }) => props.data[datum.x - 1].deluminatedColor
      }
    }}
    barWidth={chartSizing.barWidth}
    cornerRadius={chartSizing.smallerRounded}
  />
);

export default NutritionBreakdownChartDeluminatedBar;
