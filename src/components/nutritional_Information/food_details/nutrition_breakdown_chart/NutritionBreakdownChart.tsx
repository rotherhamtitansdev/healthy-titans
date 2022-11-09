import React, { useEffect, useMemo, useState } from "react";
import { VictoryChart, VictoryBar, VictoryLabel, VictoryAxis } from "victory";
import ClipLoader from "react-spinners/ClipLoader";
import { chartSizing, ChartColours, ChartData } from "../../../../models/AnalyticsChartConfig";
import "../../../../App.css";
import FirebaseAPI from "../../../../api/FirebaseAPI";
import ProcessNutritionData from "../../../../functions/ProcessNutritionData";
import FirstRender from "../../../../functions/FirstRender";

const NutritionBreakdownChart = (props: { name: string }) => {
  const isFirstRender = FirstRender();
  const { name } = props;
  const chartNameLabels = [
    "Protein\n\n\n\n",
    "Fat\n\n\n\n",
    "Saturates\n\n\n\n",
    "Sugars\n\n\n\n",
    "Salt\n\n\n\n",
  ];
  const [getLoading, setLoading] = useState(true);
  const [getChartAmountLabels, setChartAmountLabels] = useState<string[]>();
  const [getNutritionData, setNutritionData] = useState<ChartData>();
  const [getChartColours, setChartColours] = useState<ChartColours[]>([]);

  // fetch data on page load and set state for Nutrition Data and the chart label names
  useEffect(() => {
    FirebaseAPI.fetchNutritionChartData(name).then((data) => {
      if (data !== undefined) {
        setNutritionData(data as ChartData);
        setChartAmountLabels([
          `${data.Protein}g`,
          `${data.Fat}g`,
          `${data.Saturates}g`,
          `${data.Sugars}g`,
          `${data.Salt}g`,
        ]);
      }
    });
  }, []);

  // when NutritionData is updated, set the colours of the bars, but not on first render(page load)
  useEffect(() => {
    if (!isFirstRender && getNutritionData !== undefined) {
      setChartColours(
        ProcessNutritionData([
          getNutritionData.Fat,
          getNutritionData.Saturates,
          getNutritionData.Sugars,
          getNutritionData.Salt,
        ])
      );
      setLoading(false);
    }
  }, [getNutritionData]);

  const chartCircleRadius = useMemo(() => chartSizing.barWidth / 2, []);

  return (
    <div className="md:basis-1/2">
      <div className="bg-white rounded-3xl w-fit md:w-full lg:w-full xl:w-[40rem] mx-auto">
        {getLoading ? (
          <ClipLoader color="red" loading={getLoading} size={150} />
        ) : (
          <div>
            <div className="lg:mx-12 mx-8 my-8">
              <p className="text-[20px] md:text-[24px] lg:text-[24px] text-nutritionInformationHeader font-semibold">
                Nutrition Information
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[20px] text-primaryGrey font-medium">
                * Based on serving of 100 g
              </p>
            </div>
            <div className="lg:mx-12 mx-8 my-8">
              <p className="text-[16px] text-primaryGrey font-medium">Calories</p>
              <p
                data-testid="calorie-count"
                className="text-[36px] text-titansDarkBlue font-semibold"
              >
                {getNutritionData?.Calories}
              </p>
              <p className="text-[20px] text-titansDarkBlue">Kcal</p>
            </div>
            <VictoryChart title="Nutrition Information Chart" height={chartSizing.chartHeight}>
              {/* 5 bars in secondary colour */}
              <VictoryBar
                data={[
                  {
                    x: 1,
                    y: 3,
                  },
                  {
                    x: 2,
                    y: 3,
                  },
                  {
                    x: 3,
                    y: 3,
                  },
                  {
                    x: 4,
                    y: 3,
                  },
                  {
                    x: 5,
                    y: 3,
                  },
                ]}
                x="x"
                y="y"
                horizontal
                style={{
                  data: {
                    fill: ({ datum }) => getChartColours[datum.x - 1].secondary,
                  },
                }}
                barWidth={chartSizing.barWidth}
                cornerRadius={chartSizing.smallerRounded}
              />
              {/* bar in primary colour, with text labels */}
              <VictoryBar
                data={getChartColours}
                x="position"
                y="status"
                horizontal
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                style={{
                  data: {
                    fill: ({ datum }) => datum.primary,
                  },
                }}
                barWidth={chartSizing.barWidth}
                cornerRadius={chartSizing.smallerRounded}
                labelComponent={
                  <VictoryLabel
                    className="fade-in-text"
                    dx={({ datum }) => {
                      if (datum.status > 2) {
                        return -190;
                      }
                      if (datum.status <= 2 && datum.status > 1) {
                        return -130;
                      }
                      return -70;
                    }}
                    style={{
                      fontFamily: "Quicksand",
                      fontSize: 14,
                      textAlign: "center",
                      // type comes from chart package
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      fill: ({ datum }: any) => {
                        if (datum.status <= 2 || datum.position === 1) {
                          return "black";
                        }
                        return "white";
                      },
                    }}
                  />
                }
                labels={getChartAmountLabels}
              />
{/* coloured circles in primary colour for left edge of bar */}
              {getChartColours !== undefined && (
                <>
                     <circle
                    cx={50}
                    cy={chartSizing.CStartPos}
                    r={chartCircleRadius}
                    fill={getChartColours[0].primary}
                  />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif}
                    r={chartCircleRadius}
                    fill={getChartColours[1].primary}
                  />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif * 2}
                    r={chartCircleRadius}
                    fill={getChartColours[2].primary}
                  />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif * 3}
                    r={chartCircleRadius}
                    fill={getChartColours[3].primary}
                  />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif * 4}
                    r={chartCircleRadius}
                    fill={getChartColours[4].primary}
                  />
                </>
              )}
  {/* name labels for each bar (protein, fat etc.) */}
              <VictoryAxis
                invertAxis
                orientation="right"
                offsetX={420}
                tickValues={chartNameLabels}
                style={{
                  axis: { stroke: "transparent" },
                  ticks: { stroke: "transparent" },
                }}
                tickLabelComponent={
                  <VictoryLabel style={{ fontFamily: "Quicksand", fontSize: "14px" }} />
                }
              />
            </VictoryChart>
          </div>
        )}
      </div>
    </div>
  );
};
export default NutritionBreakdownChart;
