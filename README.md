# Advent of Code 2021

A series of puzzles that have to be solved in order to save Christmas.

## How this repository is used

### Template files

There are `.js` file templates in the `day-xx` directory that can be used when adding a new puzzle. `day-xx-template.js` for the puzzle solving and `day-xx-input.js` for the puzzle input.

When adding a new puzzle, create a new directory named `day-DAYNUMBER` (DAYNUMBER => the puzzle day's number) and copy the two template files in there and rename them accordingly.

### Run the puzzles

To run the puzzle solutions use the scripts in the `package.json` file.

When adding a new puzzle, add a script to the `package.json` following this pattern:

```json
"scripts": {
  "day-01": "node ./day-01/day-01.js",
  "day-02": "node ./day-02/day-02.js",
  "day-03": "node ./day-03/day-03.js"
}
```

Execute a script using npm.

```bash
# Example executing the day-01 puzzle 
$ npm run day-01
```
