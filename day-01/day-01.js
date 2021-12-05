import { depthMeasurements } from './day-01-input.js'

const measurements = JSON.parse(JSON.stringify(depthMeasurements));

const countIncreases = (measurementArr) => {
  let counter = 0;
  measurementArr.forEach((measurement, idx, arr) => {
    if (idx > 0) {
      if (measurement > arr[idx - 1]) { counter++ }
    }
  });
  return counter;
}

// Part 1
const counterSingleMeasurements = countIncreases(measurements);

// Part 2
const groupMeasurements = [];
measurements.forEach((measurement, idx, arr) => {
  if ((idx + 2) <= measurements.length) {
    groupMeasurements.push(measurement + measurements[idx+1] + measurements[idx+2]);
  }
});

const counterGroupMeasurements = countIncreases(groupMeasurements);

console.log(`
  ======================
  Solution Day 01
  ======================

  Part 1:
  ${counterSingleMeasurements} measurements are larger than the one before them.

  ======================

  Part 2:
  ${counterGroupMeasurements} groups increased compared to the previous group's value.

  ======================
`);