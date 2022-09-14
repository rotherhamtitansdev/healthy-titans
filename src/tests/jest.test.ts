// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { ChartDataProcessor } from "../functions/ChartDataProcessor";
import { NHSNutritionalBoundaries } from "../models/AnalyticsChartConfig";
import { beefData, chocolateData } from "./data";

test("checks beef nutritional ranking is correct", () => {
  const NHSNutrients = ChartDataProcessor.parseAPINutritionalData(beefData);
  const graphData = ChartDataProcessor.calculateNutritionalBoundariesAll(NHSNutrients);

  const expectedResults = [3, 2, 2, 1, 1];

  for (let i = 0; i < graphData.chartData.data.length; i++) {
    expect(graphData.chartData.data[i].y).toBe(expectedResults[i]);
  }
});

test("checks chocolate nutritional ranking is correct", () => {
  const NHSNutrients = ChartDataProcessor.parseAPINutritionalData(chocolateData);
  const graphData = ChartDataProcessor.calculateNutritionalBoundariesAll(NHSNutrients);

  const expectedResults = [3, 3, 3, 3, 1];

  for (let i = 0; i < graphData.chartData.data.length; i++) {
    expect(graphData.chartData.data[i].y).toBe(expectedResults[i]);
  }
});

test("check beef fat is medium", () => {
  expect(ChartDataProcessor.calculateNutritionalBoundary(NHSNutritionalBoundaries[0], 4)).toBe(2);
});
