const _ = require('lodash');

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7, 8];

const dif = _.difference(a, b);

console.log('Diferença entre os arrays:', dif);
