// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import ProcessNutritionData from "../functions/ProcessNutritionData";

const exampleData = [20, 3, 0, 0]

const colours = {
  blue: "#ACCDF6",
  red: "#ea5053",
  yellow: "#f4f277",
  green: "#8ded8e",
};

test("checks sample nutritional ranking is correct", () => {
  const chartColours = ProcessNutritionData(exampleData);
  
  // High, High, Medium, Low, Low
  const expectedResults = [ 3, 3, 2, 1, 1 ];

  for (let i = 0; i < chartColours.length ; i++) {
    expect(chartColours[i].status).toBe(expectedResults[i]);
  }
});

test("checks sample primary color", () => {
  const chartColours = ProcessNutritionData(exampleData);
 
  // Protein (manual colour), High, Medium, Low, Low
  const expectedResults = [ 
    colours.blue, 
    colours.red, 
    colours.yellow, 
    colours.green, 
    colours.green ];

  for (let i = 0; i < chartColours.length; i++) {
    expect(chartColours[i].primary).toBe(expectedResults[i]);
  }
});