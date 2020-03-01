export const decodedValue = colors =>
  Number(
    colors
      .slice(0, 2)
      .reduce((acc, curr) => (acc = [...acc, COLORS[curr]]), [])
      .join('')
  );

export const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};
