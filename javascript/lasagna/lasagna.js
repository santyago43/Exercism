
export const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;
 
export function remainingMinutesInOven(actualMinutesInOven) {
  return  (40 - actualMinutesInOven);
}

export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers*PREPARATION_MINUTES_PER_LAYER;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return numberOfLayers*PREPARATION_MINUTES_PER_LAYER + actualMinutesInOven;
}