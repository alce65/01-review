import { countLive, showGrid } from "./helpers.js";

/**
 * Una célula viva sigue las siguientes reglas:
 *      - Si tiene menos de 2 células contiguas vivas,
 *      (countLive < 2) muere por "soledad".
 *      - Si tiene más de 3 células contiguas vivas
 *       (countLive > 3) , muere por "sobrepoblación".
 *      - Si tiene 2 o 3 células contiguas vivas, sobrevive.
 *  Una célula muerta sigue la siguiente regla:
 *      Permanece muerta hasta que tiene exactamente
 *      3 células contiguas vivas, momento en el que "nace".
 *
 * @param {Array} data
 */
const stepOfLive = (data) => {
  const newData = [...data];
  const newData = data.map((item) => [...item]);
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === 0) {
        // célula muerta
        newData[i][j] = countLive(data, i, j) === 3 ? 1 : 0;
      } else {
        // célula viva
        newData[i][j] =
          countLive(data, i, j) > 1 && countLive(data, i, j) < 4 ? 1 : 0;
      }
    }
  }
  return newData;
};

const data1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

showGrid(data1);
let newData = data1;
setInterval(() => {
  newData = stepOfLive(newData);
  console.log("---------------------------");
  showGrid(newData);
}, 1000);
