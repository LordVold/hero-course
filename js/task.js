// ~~~~~~~~   task #1   ~~~~~~~~~
let strOne = 'There is a string one';
// console.log(String.fromCharCode(66));
// console.log(strOne.charCodeAt(3));
//___________________________________________________________________________
let str = 'some test string for some';
let first_lastLetters = str[0] + str[str.length - 1];
let first_lastLettersMod = str.slice(0, 1) + str.slice(-1);
let first_lastLettersUp = str.slice(0, 1).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
let position = str.indexOf(' ', str.indexOf(' ') + 1);
let from5Long4 = str.slice(4, 8);
let from5to9 = str.slice(4, 10);
let withoutLast6 = str.slice(0, -6);
let a = 20,
  b = 20;
let fromNumberToString = '' + a + b;
// ~~~ Math
Math.round();
Math.floor();
Math.ceil();
(1.234).toFixed();
// ~~~
const PI = Math.PI.toFixed(2);
let minNum = Math.min(15, 11, 16, 12, 51, 13, 51);
let hundred = '100$';
hundred = parseInt(hundred);
//___________________________________________________________________________
let obj1 = {
  product: 'iphone',
}
obj1.price = 1000;
obj1.currency = 'dollar';
obj1.details = {};
obj1.details.model;
obj1.details.model = 'lid';
obj1.details.color;
obj1.details.color = 'red';
// console.log("obj1", obj1)
// /|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|
// ~~~~~~~~   task #2   ~~~~~~~~~
let switchVar = 'b';

switch (switchVar) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
    // default: console.log('something else ');
    break;
    //___________________________________________________________________________
}
let someStr = 'I am in home';
let bigLetter = '';
for (let i = 0; i < someStr.length; i++) {
  if (someStr[i - 1] === ' ') {
    bigLetter += someStr[i].toUpperCase();
  } else {
    bigLetter += someStr[i];
  }
}
// console.log("bigLetter", bigLetter);
//___________________________________________________________________________
let revStr = 'emoh ni m\'I';
let rightStr = '';
for (let i = revStr.length - 1; i >= 0; i--) {
  rightStr += revStr[i]
}
// console.log("rightStr", rightStr);
//___________________________________________________________________________
let factorial = 10;
for (let i = factorial - 1; i > 0; i--) {
  factorial *= i;
}
// console.log("factorial", factorial);
//___________________________________________________________________________
let numForStr = 10;
let firstPartOfStr = 'Count to';
let numStr = '';
let resCountStr = '';
for (let i = 1; i <= numForStr; i++) {
  numStr += i + ', ';
}
numStr = numStr.slice(0, -2);
if (numForStr == 2 || numForStr == 3 || numForStr == 4) {
  resCountStr = `${firstPartOfStr} ${numForStr}х: ${numStr}`;
} else {
  resCountStr = `${firstPartOfStr} ${numForStr}и: ${numStr}`;
}
// console.log("resCountStr", resCountStr);
//___________________________________________________________________________
let someNum = 15;
let someNumRes = '';
for (let i = 1; i <= someNum; i++) {
  if ([i] == someNum && [i] % 2 != 0) {
    someNumRes += [i];
  } else if ([i] % 2 != 0) {
    someNumRes += [i] + ', ';
  }
}
// console.log("someNumRes", someNumRes);
// /|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|
// ~~~~~~~~   task #3   ~~~~~~~~~


//___________________________________________________________________________

// /|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|/|
// ~~~~~~~~   task #4   ~~~~~~~~~


//___________________________________________________________________________
