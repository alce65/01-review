const data = [
  ["a", "b", "c", "d"],
  ["A", "B", "C", "D"],
  ["a+", "b+", "c+", "d+"],
  ["a*", "b*", "c*", "d*"],
];

const n = data.length;
const m = data[0].length;
const i = 2; // fila
const j = 2; // columna
if (i !== 0) {
  console.log(data[i - 1][j - 1], data[i - 1][j], data[i - 1][j + 1]);
}
console.log(data[i][j - 1], data[i][j], data[i][j + 1]);
if (i + 1 !== n) {
  console.log(data[i + 1][j - 1], data[i + 1][j], data[i + 1][j + 1]);
}
