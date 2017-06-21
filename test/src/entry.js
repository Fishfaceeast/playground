// const string = 'food';
// const substring1= 'foo';
// const substring2= 'xoo';
// console.log(string.includes(substring1)); // true
// console.log(string.includes(substring2)); // false

// function repeat(string, count) {
//   "use strict";
//   var strings = [];
//   while(strings.length < count) {
//     strings.push(string);
//   }
//   return string.join();
// }
// console.log("meow".repeat(3));

/* 解构赋值要保证上一层非undefined
 If you’re trying to access a deeply nested property of a parent that doesn’t exist, then you’ll get an exception, though.
*/
// let flightInfo1 = {
//   flight: "mu5588",
//   registerInfo: {
//     bindExtParamsJson: {
//       isCheckSMRZ: false,
//       isMemberPrice: true
//     },
//     memberRegisterJson: {
//       noticeUrl: "xxxxx",
//       registerForm: [
//         {
//           type: "input",
//           sub: "tesyt"
//         },
//         {
//           type: "comb",
//           sub: "tesyt"
//         }
//       ]
//     }
//   }
// }
// let flightInfo2 = {
//   flight: "mu5588",
// }
// let flightInfo3 = {
//   flight: "mu5588",
//   registerInfo: {
//
//   }
// }
// let flightInfo4 = {
//   flight: "mu5588",
//   registerInfo: {
//     memberRegisterJson: {
//       noticeUrl: "xxxxx",
//       registerForm: [
//         {
//           type: "input",
//           sub: "tesyt"
//         },
//         {
//           type: "comb",
//           sub: "tesyt"
//         }
//       ]
//     }
//   }
// }
// let flightInfo5 = {
//   flight: "mu5588",
//   registerInfo: {
//     bindExtParamsJson: {
//       isMemberPrice: true
//     },
//     memberRegisterJson: {
//       noticeUrl: "xxxxx",
//       registerForm: [
//         {
//           type: "input",
//           sub: "tesyt"
//         },
//         {
//           type: "comb",
//           sub: "tesyt"
//         }
//       ]
//     }
//   }
// }
// console.log('5')
// let {
//   registerInfo: {
//     bindExtParamsJson: {
//       isCheckSMRZ
//     },
//     memberRegisterJson: {
//       noticeUrl
//     }
//   }
// } = flightInfo5;
// console.log({
//   isCheckSMRZ,
//   noticeUrl
// })

/*
import & export
*/
// import test from "./util.js"
//
// console.log(test)
// console.log(test.sumThree(6, 10, 4))

/*
* parameters
* */
// const addTwoNumbers = (x=0, y=0) => x + y;
// console.log(addTwoNumbers(3,8));
// console.log(addTwoNumbers());
//
// const logArguments = (...args) => {
//   for (let arg of args) {
//     console.log(arg);
//   }
// }
// logArguments("haha", "test", "cat")

// const initializeCanvas = (
//   { height=600, width=400, lineStroke='black'} = {}) => {
//   console.log(height)
//   console.log(width)
//   console.log(lineStroke)
// }
// initializeCanvas({width: 500})

/*
* Classes
* */
// the ES5 class
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// Person.prototype.incrementAge = function () {
//   "use strict";
//   return this.age += 1;
// }
// function Personal(name, age, gender, occupation, hobby) {
//   "use strict";
//   Person.call(this, name, age, gender);
//   this.occupation = occupation;
//   this.hobby = hobby;
// }
// Personal.prototype = Object.create(Person.prototype);
// Personal.prototype.constructor = Personal;
// Personal.prototype.incrementAge = function() {
//   "use strict";
//   Person.prototype.incrementAge.call(this);
//   this.age += 20;
//   console.log(this.age);
// }
// var Jack = new Personal("Jack", 30, "male", "teacher", "soccer");
// Jack.incrementAge();

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//
//   incremetAge() {
//     this.age += 2;
//   }
// }
// class Personal extends Person {
//   constructor(name, age, gender, occupation, hobby) {
//     super(name, age, gender);
//     this.occupation = occupation;
//     this.hobby = hobby;
//   }
//   incremetAge() {
//     super.incremetAge();
//     this.age += 20;
//     console.log(this.age);
//   }
// }
// let jerry = new Personal("Jerry", 18, "female", "doctor", "reading");
// jerry.incremetAge()

/*
* Map
* */
// let map = new Map([
//   ['name', 'david'],
//   [true, 'bool'],
//   [1, 'one'],
//   [{}, 'object'],
//   [() => {}, 'function']
// ]);
//
// for (let [key, value] of map.entries()) {
//   console.log(typeof key);
//   console.log(key, value);
// }

/*
* Getter and setter functions
* */
// class Employee {
//   constructor(name) {
//     this._name = name;
//   }
//
//   get name() {
//     if(this._name) {
//       return "Mr. " + this._name.toUpperCase();
//     } else {
//       return undefined;
//     }
//   }
//
//   set name(newName) {
//     if(newName == this._name) {
//       console.log('I already have this name');
//     } else {
//       this._name = newName;
//     }}
// }
//
// let Jerry = new Employee('jerry');
// if(Jerry.name) {
//   console.log(Jerry.name);
// }
// Jerry.name = '';
// console.log(Jerry.name)
//
// var person = {
//   firstName: 'James',
//   lastName: 'Bond',
//   get fullName() {
//     console.log('Getting FullName');
//     return this.firstName + ' ' + this.lastName;
//   },
//   set fullName (name) {
//     console.log('Setting FullName');
//     var words = name.toString().split(' ');
//     this.firstName = words[0] || '';
//     this.lastName = words[1] || '';
//   }
// }
//
// person.fullName; // James Bond
// person.fullName = 'Bond 007';
// person.fullName; // Bond 007

/*
* Use computed property names when creating objects with dynamic property names.
* Why? They allow you to define all the properties of an object in one place.
*/

// const getKey = (k) => {
//   return `a key named ${k}`;
// }
// // bad
// const obj = {
//   id: 5,
//   name: 'San Francisco',
// };
// obj[getKey('enabled')] = true;
//
// // good
// const obj2 = {
//   id: 5,
//   name: 'San Francisco',
//   [getKey('enabled')]: true,
// };

/*
* Use object method shorthand
* */
// const atom = {
//   value: 1,
//   addValue(value) {
//     "use strict";
//     return atom.value + value;
//   }
// };

/*
* Use property value shorthand
* */
// const lukeSkyWaler = 'luke skywalker';
// // bad
// const obj = {
//   lukeSkyWaler: lukeSkyWaler
// };
// // good
// const obj2 = {
//   lukeSkyWaler
// };

/*
* Prefer the object spread operator over Object.assign to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.
* */
// very bad
// const original = {
//   a: 1,
//   b: 2
// }
// const copy = Object.assign(original, { c: 3 });
// delete copy.a;
// console.log(original)
// console.log(copy)
//
// // bad
// const ori2 = {
//   a: 1,
//   b: 2
// };
// const copy2 = Object.assign({}, ori2, { c: 3});
// console.log(ori2)
// console.log(copy2)
//
// // good
// const ori3 = {
//   a: 1,
//   b: 2
// };
// const copy3 = { ...ori3, c: 3 };
// console.log(ori3)
// console.log(copy3)

// // bad
// const inbox = [];
// inbox.filter((msg) => {
//   const { subject, author } = msg;
//   if (subject === "Mockingbird") {
//     return author === 'Harper Lee';
//   } else {
//     return false;
//   }
// })
//
// // good
// inbox.filter((msg) => {
//   const { subject, author } = msg;
//   if (subject === "Mockingbird") {
//     return author === 'Harper Lee';
//   }
//
//   return false;
// })

/*
* Destructuring
* */
// // bad
// function getFullName(user) {
//   const firstName = user.firstName;
//   const lastName = user.lastName;
//
//   return `${firstName} ${lastName}`;
// }
// // good
// function getFullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }
// // best
// function getFullName({ firstName, lastName }) {
//   return `${firstName} ${lastName}`;
// }

/*
* Use object destructuring for multiple return values, not array destructuring. jscs:
* Why? You can add new properties over time or change the order of things without breaking call sites.
* */
// // bad
// function processInput(input) {
//   // then a miracle occurs
//   return [left, right, top, bottom];
// }
//
// // the caller needs to think about the order of return data
// const [left, __, top] = processInput(input);
//
// // good
// function processInput(input) {
//   // then a miracle occurs
//   return { left, right, top, bottom };
// }
//
// // the caller selects only the data they need
// const { left, top } = processInput(input);

/*
* Strings
* */
// Use single quotes '' for strings.

/*
* modules
* */
//  In modules with a single export, prefer default export over named export
// bad
// export function foo() {}
//
// // good
// export default function foo() {}
//
// // bad
// import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';
//
// // good
// import {
//   longNameA,
//   longNameB,
//   longNameC,
//   longNameD,
//   longNameE,
// } from 'path';

// // reduce
//
// const maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
// const maxCallback2 = ( max, cur ) => Math.max( max, cur );
//
// // reduce() without initialValue
// console.log([ { x: 22 }, { x: 42 } ].reduce( maxCallback )); // 42
// console.log([ { x: 22 }            ].reduce( maxCallback )); // { x: 22 }
// // console.log([                      ].reduce( maxCallback )); // TypeError
// // console.log([ { x: 22 }, { x: 42 } ].map( el => el.x )
// //   .reduce( maxCallback2, -Infinity ));
// console.log([                      ].reduce( maxCallback2, -Infinity ));
//
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
//
// var countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// // friends - an array of objects
// // where object field "books" - list of favorite books
// var friends = [{
//   name: 'Anna',
//   books: ['Bible', 'Harry Potter'],
//   age: 21
// }, {
//   name: 'Bob',
//   books: ['War and peace', 'Romeo and Juliet'],
//   age: 26
// }, {
//   name: 'Alice',
//   books: ['The Lord of the Rings', 'The Shining'],
//   age: 18
// }];
//
// var allbooks = friends.reduce(
//   (prev, cur) => [...prev, ...cur.books],
//   []
// )
// console.log(allbooks);

/*
* Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.
* Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays, and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects.
* */
// const numbers = [1, 2, 3, 4, 5];
// // // bad
// // let sum = 0;
// // for(let num of numbers) {
// //   sum += num;
// // }
// // // good
// // let sum = 0;
// // numbers.forEach(num => sum += num);
// // // best
// // const sum2 = numbers.reduce((total, num) => total + num, 0);
//
// // bad
// // const increasedByOne = [];
// // for(let i = 0; i < numbers.length; i++) {
// //   increasedByOne.push(numbers[i] + 1);
// // }
//
// // good
// // const increasedByOne = [];
// // numbers.forEach((num) => {
// //   increasedByOne.push(num + 1);
// // })
//
// // best
// const increasedByOne = numbers.map(num => num + 1);

/*
* Variables
* */
// // bad
// (function example() {
//   // JavaScript interprets this as
//   // let a = ( b = ( c = 1 ) );
//   // The let keyword only applies to variable a; variables b and c become
//   // global variables.
//   let a = b = c = 1;
// }());
//
// console.log(a); // throws ReferenceError todo: seems wrong!!
// console.log(b); // 1
// console.log(c); // 1
//
// // good
// (function example() {
//   let a = 1;
//   let b = a;
//   let c = a;
// }());
//
// console.log(a); // throws ReferenceError
// console.log(b); // throws ReferenceError
// console.log(c); // throws ReferenceError

// // bad
// const array = [1, 2, 3, 0, 0];
// let num = 1;
// num++;
// --num;
//
// // let sum = 0;
// // let truthyCount = 0;
// // for (let i = 0; i < array.length; i++) {
// //   let value = array[i];
// //   sum += value;
// //   if (value) {
// //     truthyCount++;
// //   }
// // }
// // good
// const sum = array.reduce((prev, cur) => prev + cur, 0);
// const truthyCount = array.filter(Boolean).length;

/*
* Hoisting
* */
// var declarations get hoisted to the top of their scope, their assignment does not.

// example()
//
// // we know this wouldn’t work (assuming there
// // is no notDefined global variable)
// function example() {
//   console.log(notDefined); // => throws a ReferenceError
// }
//
// // creating a variable declaration after you
// // reference the variable will work due to
// // variable hoisting. Note: the assignment
// // value of `true` is not hoisted.
// function example() {
//   console.log(declaredButNotAssigned); // => undefined
//   var declaredButNotAssigned = true;
// }
//
// // the interpreter is hoisting the variable
// // declaration to the top of the scope,
// // which means our example could be rewritten as:
// function example() {
//   let declaredButNotAssigned;
//   console.log(declaredButNotAssigned); // => undefined
//   declaredButNotAssigned = true;
// }
//
// // using const and let
// function example() {
//   console.log(declaredButNotAssigned); // => throws a ReferenceError
//   console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
//   const declaredButNotAssigned = true;
// }

// // Anonymous function expressions hoist their variable name, but not the function assignment.
// function example() {
//   console.log(anonymous); // => undefined
//
//   anonymous(); // => TypeError anonymous is not a function
//
//   var anonymous = function () {
//     console.log('anonymous function expression');
//   };
// }
// example()

// // Named function expressions hoist the variable name, not the function name or the function body.
// function example() {
//   console.log(named); // => undefined
//
//   named(); // => TypeError named is not a function
//
//   superPower(); // => ReferenceError superPower is not defined
//
//   var named = function superPower() {
//     console.log('Flying');
//   };
// }
//
// // the same is true when the function name
// // is the same as the variable name.
// function example() {
//   console.log(named); // => undefined
//
//   named(); // => TypeError named is not a function
//
//   var named = function named() {
//     console.log('named');
//   };
// }
//
// // Function declarations hoist their name and the function body
// function example() {
//   superPower(); // => Flying
//
//   function superPower() {
//     console.log('Flying');
//   }
// }

/*
* Comparison Operators & Equality
* */
// Use shortcuts for booleans, but explicit comparisons for strings and numbers.
// bad
// if (isValid === true) {
//   // ...
// }
//
// // good
// if (isValid) {
//   // ...
// }
//
// // bad
// if (name) {
//   // ...
// }
//
// // good
// if (name !== '') {
//   // ...
// }
//
// // bad
// if (collection.length) {
//   // ...
// }
//
// // good
// if (collection.length > 0) {
//   // ...
// }

/*
* Events
* When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value.
* This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event.
 * */

// bad
// $(this).trigger('listingUpdated', listing.id);
//
// // ...
//
// $(this).on('listingUpdated', (e, listingId) => {
//   // do something with listingId
// });
//
// // good
// $(this).trigger('listingUpdated', { listingId: listing.id });
//
// // ...
//
// $(this).on('listingUpdated', (e, data) => {
//   // do something with data.listingId
// });

function test() {
  let number = 10
  new Promise(function(resolve, reject) {
    // A mock async action using setTimeout
    setTimeout(function() { resolve(number); }, 3000);
  })
    .then(function(num) { console.log('first then: ', num); return num * 2; });
  return number;
}

const mock = test();
console.log('test' + mock);

/*
* http://javascript.ruanyifeng.com/advanced/promise.html#toc13
* https://wohugb.gitbooks.io/ecmascript-6/content/docs/promise.html
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
* http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html
* https://stackoverflow.com/questions/15151602/sending-data-between-jquery-deferred-objects
* http://jsfiddle.net/L96cD/
* https://www.airpair.com/javascript/posts/eleven-mistakes-developers-javascript#2-return-before-asynchronous-callbacks-have-completed
* */













































