// imports
import { diagnosticsData } from './day-03-input.js';

/**
 * ==============================================
 * General Setup & Utility Functions
 * ==============================================
 */
// TODO add general stuff

/**
 * ==============================================
 * Part 1
 * ==============================================
 */
// unnecessarily complicated way to initialize an Array with 12 0s :D
const dataOneCounter = Array.from(new Array(12)).map(x => 0);

// count number of 1s in every column
diagnosticsData.forEach((entry) => {
  const numberArr = entry.split('').map(strNr => parseInt(strNr));
  numberArr.forEach((diagNr, idx) => {
    if (diagNr) {
      dataOneCounter[idx]++;
    }
  });
});

// construct gammaRate, epsilonRate and powerConsumption
const mostCommonNrsInCols = dataOneCounter.map(colCounter => colCounter > (diagnosticsData.length / 2) ? '1' : '0');

const gammaRateBinary = mostCommonNrsInCols.join('');
const gammaRateDecimal = parseInt(gammaRateBinary, 2);
const epsilonRateBinary = mostCommonNrsInCols.map(nr => parseInt(nr) ? '0' : '1').join('');
const epsilonRateDecimal = parseInt(epsilonRateBinary, 2);

const powerConsumption = gammaRateDecimal * epsilonRateDecimal;

/**
 * ==============================================
 * Part 2
 * ==============================================
 */
// TODO: solve part 2

/**
 * ==============================================
 * Print Solutions
 * ==============================================
 */
console.log(`
  ======================

  Part 1:

  gammaRateBinary:      ${gammaRateBinary}
  epsilonRateBinary:    ${epsilonRateBinary}

  gammaRateDecimal:     ${gammaRateDecimal}
  epsilonRateDecimal:   ${epsilonRateDecimal}

  Power consumption = ${powerConsumption};

  ======================

  Part 2:

  ======================
`);