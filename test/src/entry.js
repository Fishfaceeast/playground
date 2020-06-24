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

// // bad
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

// /*
//  * Design Pattern
//  * */
//
// const MyClass = function() {
//   this.name = "seven";
//   return {
//     name: "anne"
//   }
// }
//
// let test = new MyClass();
// console.log(test);
//
// const OtherClass = function() {
//   this.name = "seven";
//   return "anne";
// }
//
// let test2 = new OtherClass();
// console.log(test2);

/*
 * http://javascript.ruanyifeng.com/advanced/promise.html#toc13
 * https://wohugb.gitbooks.io/ecmascript-6/content/docs/promise.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html
 * https://stackoverflow.com/questions/15151602/sending-data-between-jquery-deferred-objects
 * http://jsfiddle.net/L96cD/
 * https://www.airpair.com/javascript/posts/eleven-mistakes-developers-javascript#2-return-before-asynchronous-callbacks-have-completed
 * */

// function square() {
//   let record = 10;
//   new Promise(function(resolve, reject) {
//     // A mock async action using setTimeout
//     setTimeout(function() { resolve(record); }, 3000);
//   })
//     .then(function(data) {
//       console.log('first then: ', data);
//       return data * data;
//     });
//   return record;
// }
//
// function submit() {
//   // ...
//   const result = square(); // => still 10
//   console.log(result)
//   // finalHandler(result);
// }
// submit();

// function square() {
//   let record = 10;
//   return new Promise(function(resolve, reject) {
//     // A mock async action using setTimeout
//     setTimeout(function() { resolve(record); }, 1000);
//   })
//     .then(function(data) {
//       console.log('first then: ', data);
//       return data * data;
//     });
// }
//
// function submit() {
//   // ...
//   const result = square()
//     .then(result => finalHandler(result));
// }
// function finalHandler(data) {
//   console.log(data);
// }
// submit();

// var Type = {};
// for(var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
//   (function(t){
//     Type[`is${t}`] = function(obj) {
//       console.log(t)
//       return Object.prototype.toString.call(obj) === `[object ${t}]`
//     }
//   }) (type);
// }
// console.log(Type.isString('test'));

// const curring = (fn) => {
//   let args = [];
//   return () => {
//     if(arguments.length === 0) {
//       return fn.apply(this, args);
//     } else {
//       [].push.apply(args, arguments);
//       return arguments.callee;
//     }
//   }
// }
//
// var cost = (() => {
//   let money = 0;
//   return () => {
//     for(let i = 0, l = arguments.length; i < l; i++) {
//       money += arguments[i];
//     }
//     return money;
//   }
// })();
//
// cost = curring(cost);
//
// cost(100);
// cost(200);
// cost(300);
//
// console.log(cost());

// const ensureNum = entity => typeof entity === 'string' ? parseInt(entity) : entity;
// const addDelta = (num, delta) => num + delta;
// const incrementEach = (arr, delta) => arr.map(ensureNum).map((num, delta) => num - delta);
// console.log(incrementEach([10,15,20], 5));

// const CreateDiv = function(html) {
//   this.html = html;
//   console.log(this.html)
//   this.init();
// }
// CreateDiv.prototype.init = function() {
//   let div = document.createElement('div');
//   div.innerHTML = this.html;
//   document.body.appendChild(div);
// }
//
// const ProxySingletonCreateDiv = (function () {
//   let instance;
//   return function(html) {
//     console.log(instance)
//     if(!instance) {
//       instance = new CreateDiv(html);
//     }
//     return instance;
//   }
// })();
//
// let a = new ProxySingletonCreateDiv('sven1');
// let b = new ProxySingletonCreateDiv('sven2');
// console.log(a === b);

// var getSingle = function(fn) {
//   var result;
//   return function() {
//     console.log(arguments);
//     return result || (result = fn.apply(this, arguments));
//   }
// }
//
// var createLoginLayer = function(m, n) {
//   console.log(n);
// }
//
// var createSingleLoginLayer = getSingle(createLoginLayer);
// console.log(createSingleLoginLayer)
// var loginLayer = createSingleLoginLayer(3, 10, 2000);

/*
* ch5
* */
// var tween = {
//   linear: function( t, b, c, d ){
//     return c*t/d + b;
//   },
//   easeIn: function( t, b, c, d ){
//     return c * ( t /= d ) * t + b;
//   },
//   strongEaseIn: function(t, b, c, d){
//     return c * ( t /= d ) * t * t * t * t + b;
//   },
//   strongEaseOut: function(t, b, c, d){
//     return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
//   },
//   sineaseIn: function( t, b, c, d ){
//     return c * ( t /= d) * t * t + b;
//   },
//   sineaseOut: function(t,b,c,d){
//     return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
//   }
// };
//
// var Animate = function( dom ){
//   this.dom = dom; // 进行运动的dom 节点
//   this.startTime = 0; // 动画开始时间
//   this.startPos = 0; // 动画开始时，dom 节点的位置，即dom 的初始位置
//   this.endPos = 0; // 动画结束时，dom 节点的位置，即dom 的目标位置
//   this.propertyName = null; // dom 节点需要被改变的css 属性名
//   this.easing = null; // 缓动算法
//   this.duration = null; // 动画持续时间
// };
//
//
// Animate.prototype.start = function( propertyName, endPos, duration, easing ){
//   this.startTime = +new Date; // 动画启动时间
//   this.startPos = this.dom.getBoundingClientRect()[ propertyName ]; // dom 节点初始位置
//   this.propertyName = propertyName; // dom 节点需要被改变的CSS 属性名
//   this.endPos = endPos; // dom 节点目标位置
//   this.duration = duration; // 动画持续事件
//   this.easing = tween[ easing ]; // 缓动算法
//   var self = this;
//   var timeId = setInterval(function(){ // 启动定时器，开始执行动画
//     if ( self.step() === false ){ // 如果动画已结束，则清除定时器
//       clearInterval( timeId );
//     }
//   }, 19 );
// };
//
// Animate.prototype.step = function(){
//   var t = +new Date; // 取得当前时间
//   if ( t >= this.startTime + this.duration ){ // (1)
//     this.update( this.endPos ); // 更新小球的CSS 属性值
//     return false;
//   }
//   var pos = this.easing( t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration );
//   // pos 为小球当前位置
//   this.update( pos ); // 更新小球的CSS 属性值
// };
//
// Animate.prototype.update = function( pos ){
//   this.dom.style[ this.propertyName ] = pos + 'px';
// };
//
// var div = document.getElementById( 'div' );
// var animate = new Animate( div );
// animate.start( 'left', 500, 1000, 'strongEaseOut' );
// // animate.start( 'top', 1500, 500, 'strongEaseIn' );

/*
* ch6
* */

// var myImage = (function(){
//   var imgNode = document.createElement( 'img' );
//   document.body.appendChild( imgNode );
//   return {
//     setSrc: function( src ){
//       imgNode.src = src;
//     }
//   }
// })();
// var proxyImage = (function(){
//   var img = new Image;
//   img.onload = () => {
//     myImage.setSrc( img.src );
//   }
//   return {
//     setSrc: function( src ){
//       myImage.setSrc( './loading.gif' );
//       img.src = src;
//     }
//   }
// })();
// proxyImage.setSrc( 'https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif' );

/*
* ch11
* */

// var Beverage = function( param ){
//   var boilWater = function(){
//     console.log( '把水煮沸' );
//   };
//   var brew = param.brew || function(){
//       throw new Error( '必须传递brew 方法' );
//     };
//   var pourInCup = param.pourInCup || function(){
//       throw new Error( '必须传递pourInCup 方法' );
//     };
//   var addCondiments = param.addCondiments || function(){
//       throw new Error( '必须传递addCondiments 方法' );
//     };
//   var F = function(){};
//   F.prototype.init = function(){
//     boilWater();
//     brew();
//     pourInCup();
//     addCondiments();
//   };
//   return F;
// };
// var Coffee = Beverage({
//   brew: function(){
//     console.log( '用沸水冲泡咖啡' );
//   },
//   pourInCup: function(){
//     console.log( '把咖啡倒进杯子' );
//   },
//   addCondiments: function(){
//     console.log( '加糖和牛奶' );
//   }
// });
//
// var Tea = Beverage({
//   brew: function(){
//     console.log( '用沸水浸泡茶叶' );
//   },
//   pourInCup: function(){
//     console.log( '把茶倒进杯子' );
//   },
//   addCondiments: function(){
//     console.log( '加柠檬' );
//   }
// });
// var coffee = new Coffee();
// coffee.init();
// var tea = new Tea();
// tea.init();
//
// console.log(coffee.init === tea.init);

// //抽象类继承
// var Beverage = function(){};
// Beverage.prototype.boilWater = function(){
//   console.log( '把水煮沸' );
// };
//
// Beverage.prototype.brew = function(){}; // 空方法，应该由子类重写
// Beverage.prototype.pourInCup = function(){}; // 空方法，应该由子类重写
// Beverage.prototype.addCondiments = function(){}; // 空方法，应该由子类重写
// Beverage.prototype.init = function(){
//   this.boilWater();
//   this.brew();
//   this.pourInCup();
//   this.addCondiments();
// };
//
// var Coffee = function(){};
// Coffee.prototype = new Beverage();
//
// Coffee.prototype.brew = function(){
//   console.log( '用沸水冲泡咖啡' );
// };
// Coffee.prototype.pourInCup = function(){
//   console.log( '把咖啡倒进杯子' );
//
// };
// Coffee.prototype.addCondiments = function(){
//   console.log( '加糖和牛奶' );
// };
// var coffee = new Coffee();
// coffee.init();
//
// var Tea = function(){};
// Tea.prototype = new Beverage();
// Tea.prototype.brew = function(){
//   console.log( '用沸水浸泡茶叶' );
// };
// Tea.prototype.pourInCup = function(){
//   console.log( '把茶倒进杯子' );
// };
// Tea.prototype.addCondiments = function(){
//   console.log( '加柠檬' );
// };
// var tea = new Tea();
// tea.init();
//
// console.log(coffee.init === tea.init);

// es6 class vs prototype-chain
// function P(name, id) {
//   this.name = name;
//   this.id = id;
// }
// P.prototype.compose = function(name, id){
//   return name + '-' + id;
// }
// var p = new P('Jack', 11212121);
//
// class Person {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }
//
//   compose() {
//     return `${this.name}-${this.id}`;
//   }
// }
//
// var person = new Person('Jeff', 88212901);
//
// var bar = new Bar();
// console.log(bar)
// function Bar() {};
// // new Foo(); // ReferenceError
// // class Foo {};

class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}







































