import { GridItemVariants } from '../components/GridItem';

interface IGridItem {
  [key: string]: string;
}

export const generateGridItemDisplay = (
  gridColumns: GridItemVariants['gridColumn']
): IGridItem =>
  typeof gridColumns === 'object'
    ? Object.entries(gridColumns).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value === 0 ? 'none' : 'unset',
        }),
        {}
      )
    : gridColumns === 0
    ? 'none'
    : 'unset';

export const generateGridItemColumns = (cols = 12): IGridItem => {
  return [...Array(cols + 1)].reduce(
    (previous, _, i) => ({
      ...previous,
      [`${i}`]: `auto / span ${i}`,
    }),
    {}
  );
};
