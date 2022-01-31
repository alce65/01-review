import { countLive, countLive2, showGrid } from "./helpers.js";
const data1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(countLive(data1, 0, 0)); // 0
console.log(countLive(data1, 0, 4)); // 0
console.log(countLive(data1, 4, 4)); // 0
console.log(countLive(data1, 4, 0)); // 0
console.log(countLive(data1, 2, 2)); // 3

console.log(countLive2(data1, 0, 0)); // 0
console.log(countLive2(data1, 0, 4)); // 0
console.log(countLive2(data1, 4, 4)); // 0
console.log(countLive2(data1, 4, 0)); // 0
console.log(countLive2(data1, 2, 2)); // 3

showGrid(data1);
