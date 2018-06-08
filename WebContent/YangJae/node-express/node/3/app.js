/*
const circle = require("./circle.js"); // == require("./circle")

console.log(`지름이 4인 원의 면적: ${circle.area(4)}`);
console.log(`지름이 4인 원의 둘레: ${circle.circumference(4)}`);
*/

/*
const circle = require('./circle');
const myCircle = circle(4);

console.log(`지름이 4인 원의 면적: ${myCircle.area()}`);
console.log(`지름이 4인 원의 둘레: ${myCircle.circumference()}`);
*/

/*
const value = require('./primitive');
console.log(value); // => 'primitive value'
*/

/*
const add = require('./foo');

const result = add(1, 2);
console.log(result); // => 3
*/

/*
const calc = require('./foo');

const result1 = calc.add(1, 2);
console.log(result1); // => 3

const result2 = calc.minus(1, 2);
console.log(result2); // => -1
*/

const myModule = require('./module');
// module/calc.js의 기능
const result = myModule.calc.add(1, 2);

console.log(result);

// module/print.js의 기능
myModule.print.sayHello();

const http = require('http');
const mongoose = require('mongoose');
// 코어 모듈과 외부 패키지 이외는 모두 파일 모듈이다. 파일 모듈을 로딩할 때에는 패스를 명시하여야 한다.
const foo = require('./lib/foo');