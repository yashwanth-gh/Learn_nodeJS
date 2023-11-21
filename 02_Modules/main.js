const math1 = require('./way1');

// const math2 = require('./way2');
const {div,mul} = require('./way2');

console.log(math1.add(1,2));    //^ Output: 3
console.log(math1.sub(4,2));    //^ Output: 2
console.log(mul);               //^ Output: [Function (anonymous)]
console.log(div(10,2));         //^ Output: undefined