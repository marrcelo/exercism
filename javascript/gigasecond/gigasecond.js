export const gigasecond = startDate => {
  const startDateInMilliseconds = startDate.getTime();
  const dateAfterOneGigaSecondInMilliseconds = startDateInMilliseconds + GIGASECONDINMILLISECONDS;
  const dateAfterOneGigaSecond = new Date(dateAfterOneGigaSecondInMilliseconds);
  return dateAfterOneGigaSecond;
};

const GIGASECOND = 1000000000;
const GIGASECONDINMILLISECONDS = GIGASECOND * 1000;
