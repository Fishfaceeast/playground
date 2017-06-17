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



