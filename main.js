// 1
let width = 100;
let height = 50;
let rectArea = width * height;

console.log(`The area of the rectangle is ${rectArea}`);

// 2
let degC = 5;
console.log(`${degC}'c is 44 F`);
let degF = 44;
console.log(`${degF}'c is 5 F`);

// 3
let hour = 1;
let seconds = 60 * 60 * hour;

console.log(`${hour} hour = ${seconds} seconds`);

// 4
let thingOne = "thing one";
let thingTwo = "thing two";
console.log(thingOne + thingTwo);

// 5
let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.015;

let total = bill + tip;
console.log(total);

// 6
("The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!");
let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
let madLib = `The Intro to JavaScript course is ${adjective1}_. James and Julia are so  ${adjective2}. I cannot wait to work through the rest of this  ${adjective3} content!`;
console.log(madLib);

// 7
let firstName = "Julia";
let interest = "cats";
let hobby = "play video games.";
let awesomeMessage =
  " Hi, my name is" +
  firstName +
  ". I love" +
  interest +
  "In my spare time, I like to." +
  hobby;

console.log(awesomeMessage);
