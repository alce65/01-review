const data = [1, 2, 2, 8];

const forWork = (iterator) => {
    console.log(iterator);
    // TODO hacer más cosas
};

for (let i = 0; i < data.length; i++) {
    const iterator = data[i];
    console.log(iterator);
    // TODO hacer más cosas
}

for (let i = 0; i < data.length; i++) {
    const iterator = data[i];
    forWork(iterator);
}

data.forEach((iterator) => {
    console.log(iterator);
    // TODO hacer más cosas
});

data.forEach((iterator) => {
    forWork(iterator);
});

const newData = data.map((iterator) => {
    return iterator * 2;
});

console.log(newData);

const totalAdd = data.reduce((previous, current) => {
    return previous + current;
});

console.log(totalAdd);

const cloneData = data.map((iterator) => iterator);

console.log(cloneData);
