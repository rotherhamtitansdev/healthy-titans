// These are the config parameters for the chart styling and sizing
export const chartSizing = {
  chartHeight: 500,
  barWidth: 30,
  CStartPos: 50,
  RStartPos: 60,
  circleYDif: 100,
  smallerRounded: 15,
};

export interface ChartColours {
  name: string;
  primary: string;
  secondary: string;
  status: number;
  position: number;
}

export interface ChartData {
  Calories: number;
  Protein: number;
  Fat: number;
  Saturates: number;
  Sugars: number;
  Salt: number;
}

export const NHSBoundaries = {
  Fat: { low: 3, high: 17.5 },
  Saturates: { low: 1.5, high: 5 },
  Sugars: { low: 5, high: 22.5 },
  Salt: { low: 0.1, high: 0.6 },
};