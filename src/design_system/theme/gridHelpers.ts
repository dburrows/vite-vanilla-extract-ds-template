import { GridItemVariants } from '../components/GridItem';

interface IGridItem {
  [key: string]: string;
}

export const generateGridItemDisplay = (
  spans: GridItemVariants['gridColumn']
): IGridItem =>
  typeof spans === 'object'
    ? Object.entries(spans).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value === 0 ? 'none' : 'unset',
        }),
        {}
      )
    : spans === 0
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
