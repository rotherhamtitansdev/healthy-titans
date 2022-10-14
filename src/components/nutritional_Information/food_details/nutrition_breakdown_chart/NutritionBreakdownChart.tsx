import React, { useCallback, useEffect, useMemo, useState } from "react";
import { VictoryChart, VictoryBar, VictoryLabel, VictoryAxis } from "victory";
import ClipLoader from "react-spinners/ClipLoader";
import getNutritionalDetailsSingular from "../../../../api/NutritionApi";
import { NHSNutritionalDataModelChart } from "../../../../models/NHSNutritionalDataModel";
import { chartSizing } from "../../../../models/AnalyticsChartConfig";
import { ChartDataProcessor } from "../../../../functions/ChartDataProcessor";
import { NutritionalBreakdownChartData } from "../../../../data/nutritional_information/FoodDetailsComponentData";
import { NutritionDetailsAPIModel } from "../../../../models/NutritionDetailsAPIModel";
import "../../../../App.css";

// eslint-disable no-promise-executor-return

const NutritionBreakdownChart = (props: { name: string }) => {
  const { name } = props;

  const [getLoading, setLoading] = useState(true);

  const [getChartAmountLabels, setChartAmountLabels] = useState<string[]>();
  const [getChartNameLabels, setChartNameLabels] = useState<string[]>();

  const [getChartData, setChartData] = useState<NHSNutritionalDataModelChart[]>();

  const [getCalories, setCalories] = useState<string>();

  const processChart = useCallback((unparsed: NutritionDetailsAPIModel) => {
    const parsed = ChartDataProcessor.parseAPINutritionalData(unparsed);
    const chartValues = ChartDataProcessor.calculateNutritionalBoundariesAll(parsed);

    setCalories(chartValues.calories.label);
    setChartNameLabels(chartValues.chartData.names);

    const timer = setTimeout(() => {
      setChartAmountLabels(chartValues.chartData.labels);
    }, 1000);

    setChartData(chartValues.chartData.data);
    setLoading(false);
  }, []);

  const chartCircleRadius = useMemo(() => chartSizing.barWidth / 2, []);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return,consistent-return
    const ChartData = NutritionalBreakdownChartData.find((object) => {
      if (object.name === name) {
        return object.data;
      }
    });

    if (ChartData !== undefined) {
      processChart(ChartData.data);
    } else {
      getNutritionalDetailsSingular(name).then((unparsed) => {
        processChart(unparsed);
      });
    }
  }, []);

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
                *Based on serving of 100 g
              </p>
            </div>
            <div className="lg:x-12 mx-8 my-8">
              <p className="text-[16px] text-primaryGrey font-medium">Calories</p>
              <p
                data-testid="calorie-count"
                className="text-[36px] text-titansDarkBlue font-semibold"
              >
                {getCalories}
              </p>
              <p className="text-[20px] text-titansDarkBlue">Kcal</p>
            </div>
            <VictoryChart height={chartSizing.chartHeight}>
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
                    fill: ({ datum }) => getChartData![datum.x - 1].deluminatedColor,
                  },
                }}
                barWidth={chartSizing.barWidth}
                cornerRadius={chartSizing.smallerRounded}
              />

              <VictoryBar
                data={getChartData}
                x="x"
                y="y"
                horizontal
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                style={{
                  data: {
                    fill: ({ datum }) => datum.color,
                  },
                }}
                barWidth={chartSizing.barWidth}
                cornerRadius={chartSizing.smallerRounded}
                labelComponent={
                  <VictoryLabel
                    className="fade-in-text"
                    dx={({ datum }) => {
                      if (datum.y > 2) {
                        return -195;
                      }
                      if (datum.y <= 2 && datum.y > 1) {
                        return -135;
                      }
                      return -75;
                    }}
                    style={{
                      fontFamily: "Quicksand",
                      fontSize: 14,
                      textAlign: "center",
                      fill: ({ datum }: any) => {
                        if (datum.y <= 2 || datum.x === 1) return "black";
                        return "white";
                      },
                    }}
                  />
                }
                labels={getChartAmountLabels}
              />

              {getChartData !== undefined && (
                <>
                  <circle cx={50} cy={chartSizing.CStartPos} r={chartCircleRadius} fill="#ACCDF6" />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif}
                    r={chartCircleRadius}
                    fill={getChartData[1].color}
                  />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif * 2}
                    r={chartCircleRadius}
                    fill={getChartData[2].color}
                  />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif * 3}
                    r={chartCircleRadius}
                    fill={getChartData[3].color}
                  />
                  <circle
                    cx={50}
                    cy={chartSizing.CStartPos + chartSizing.circleYDif * 4}
                    r={chartCircleRadius}
                    fill={getChartData[4].color}
                  />
                </>
              )}

              <VictoryAxis
                invertAxis
                orientation="right"
                offsetX={420}
                tickValues={getChartNameLabels}
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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default NutritionBreakdownChart;
