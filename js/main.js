const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};
//ориентировалась на https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const checkStringLength = (string, maxLength) => string.length <= maxLength;