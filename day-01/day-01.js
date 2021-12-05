// imports
import { depthMeasurements } from './day-01-input.js'

/**
 * ==============================================
 * General Setup & Utility Functions
 * ==============================================
 */
const countIncreases = (measurementArr) => {
  let counter = 0;
  measurementArr.forEach((measurement, idx, arr) => {
    if (idx > 0) {
      if (measurement > arr[idx - 1]) { counter++ }
    }
  });
  return counter;
}

/**
 * ==============================================
 * Part 1
 * ==============================================
 */
const counterSingleMeasurements = countIncreases(depthMeasurements);

/**
 * ==============================================
 * Part 2
 * ==============================================
 */
const groupMeasurements = [];
depthMeasurements.forEach((measurement, idx, arr) => {
  if ((idx + 2) <= arr.length) {
    groupMeasurements.push(measurement + arr[idx+1] + arr[idx+2]);
  }
});

const counterGroupMeasurements = countIncreases(groupMeasurements);

/**
 * ==============================================
 * Print Solutions
 * ==============================================
 */
console.log(`
  ======================

  Part 1:
  ${counterSingleMeasurements} measurements are larger than the one before them.

  ======================

  Part 2:
  ${counterGroupMeasurements} groups increased compared to the previous group's value.

  ======================
`);