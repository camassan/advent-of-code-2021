// imports
import { directionInputs } from "./day-02-input.js";

/**
 * ==============================================
 * General Setup & Utility Functions
 * ==============================================
 */
const splitInputs = directionInputs.map(dirInput => {
  const splitCommand = dirInput.split(" ");
  return { command: splitCommand[0], value: splitCommand[1] };
});

const parseCommands = (forwardFn, downFn, upFn) => {
  splitInputs.forEach(input => {
    const command = input.command;
    const value = parseInt(input.value);
    
    switch (command) {
      case 'forward':
        forwardFn(value);
        break;
      case 'down':
        downFn(value);
        break;
      case 'up':
        upFn(value);
        break;
      default:
        console.log('ERROR: unknown command');
        break;
    }
  });
}

/**
 * ==============================================
 * Part 1
 * ==============================================
 */
let horizontalPos1 = 0;
let depth1 = 0;

const forwardFn1 = val => { horizontalPos1 += val }
const downFn1 = val => { depth1 += val }
const upFn1 = val => { depth1 -= val }

parseCommands(forwardFn1, downFn1, upFn1);

/**
 * ==============================================
 * Part 2
 * ==============================================
 */
let horizontalPos2 = 0;
let depth2 = 0;
let aim = 0;

const forwardFn2 = val => {
  horizontalPos2 += val;
  depth2 += (aim * val);
}
const downFn2 = val => { aim += val }
const upFn2 = val => { aim -= val }

parseCommands(forwardFn2, downFn2, upFn2);

/**
 * ==============================================
 * Print Solutions
 * ==============================================
 */
console.log(`
  ======================

  Part 1:
  
  Horizontal Position: ${horizontalPos1}
  Depth: ${depth1}

  Result: ${horizontalPos1 * depth1}

  ======================

  Part 2:

  Horizontal Position: ${horizontalPos2}
  Depth: ${depth2}

  Result: ${horizontalPos2 * depth2}

  ======================
`);