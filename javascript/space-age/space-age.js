export const age = (planet, seconds) => Number((seconds / planetsYearsInSeconds[planet].yearInSeconds).toFixed(2));

const EARTHYEARINSECONDS = 31557600;

const planetsYearsInSeconds = {
  mercury: { yearInSeconds: EARTHYEARINSECONDS * 0.2408467 },
  venus: { yearInSeconds: EARTHYEARINSECONDS * 0.61519726 },
  earth: { yearInSeconds: EARTHYEARINSECONDS },
  mars: { yearInSeconds: EARTHYEARINSECONDS * 1.8808158 },
  jupiter: { yearInSeconds: EARTHYEARINSECONDS * 11.862615 },
  saturn: { yearInSeconds: EARTHYEARINSECONDS * 29.447498 },
  uranus: { yearInSeconds: EARTHYEARINSECONDS * 84.016846 },
  neptune: { yearInSeconds: EARTHYEARINSECONDS * 164.79132 }
};
