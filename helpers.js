/**
 *
 * @param {number | undefined } n
 * @returns number
 */
export const noUndefined = (n) => {
    if (typeof n !== 'number' && typeof n !== 'undefined') {
        throw new Error('Error de tipos');
    }
    return typeof n === 'undefined' ? 0 : n;
};

/**
 *
 * @param {Array} data
 */
export const showGrid = (data) => {
    data.forEach((item) => {
        console.log(item);
    });
};

/**
 *
 * @param {Array} data
 * @param {number} i
 * @param {number} j
 * @returns number
 */
export const countLive = (data, i, j) => {
    let liveNeigborous = 0;
    if (i !== 0) {
        liveNeigborous += noUndefined(data[i - 1][j - 1]);
        liveNeigborous += noUndefined(data[i - 1][j]);
        liveNeigborous += noUndefined(data[i - 1][j + 1]);
    }

    liveNeigborous += noUndefined(data[i][j - 1]);
    liveNeigborous += noUndefined(data[i][j + 1]);

    if (i + 1 !== data.length) {
        liveNeigborous += noUndefined(data[i + 1][j - 1]);
        liveNeigborous += noUndefined(data[i + 1][j]);
        liveNeigborous += noUndefined(data[i + 1][j + 1]);
    }
    return liveNeigborous;
};

export const countLive2 = (data, i, j) => {
    let liveNeigborous = [];
    if (i !== 0) {
        liveNeigborous = data[i - 1].map((item) => noUndefined(item));
    }
    liveNeigborous.push(noUndefined(data[i][j - 1]));
    liveNeigborous.push(noUndefined(data[i][j + 1]));

    if (i + 1 !== data.length) {
        liveNeigborous.concat(data[i + 1].map((item) => noUndefined(item)));
    }
    return liveNeigborous.reduce((prev, current) => prev + current);
};
