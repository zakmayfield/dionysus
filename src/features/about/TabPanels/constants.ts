export enum LegendColors {
  MAIN = '#ffffff',
  SECONDARY = '#d3d3d3',
  TERTIARY = '#a9a9a9',
}

export type LegendItemProps = {
  color: LegendColors;
  content: string;
};

export const legendData = [
  {
    title: 'main',
    content: 'Main: Mon-Sat delivery',
    color: LegendColors.MAIN,
  },
  {
    title: 'secondary',
    content: 'Secondary: Mon-Thu delivery',
    color: LegendColors.SECONDARY,
  },
  {
    title: 'tertiary',
    content:
      'Tertiary: Outside of Main & Secondary. Extra fees/order minimum may apply',
    color: LegendColors.TERTIARY,
  },
];
