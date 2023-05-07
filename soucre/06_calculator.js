// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

const zero = (fn = 0) => typeof fn === "function" ? fn(0) : 0;
const one = (fn = 1) => typeof fn === "function" ? fn(1) : 1;
const two = (fn = 2) => typeof fn === "function" ? fn(2) : 2;
const three = (fn = 3) => typeof fn === "function" ? fn(3) : 3;
const four = (fn = 4) => typeof fn === "function" ? fn(4) : 4;
const five = (fn = 5) => typeof fn === "function" ? fn(5) : 5;
const six = (fn = 6) => typeof fn === "function" ? fn(6) : 6;
const seven = (fn = 7) => typeof fn === "function" ? fn(7) : 7;
const eight = (fn = 8) => typeof fn === "function" ? fn(8) : 8;
const nine = (fn = 9) => typeof fn === "function" ? fn(9) : 9;

const plus =
  (outerDigit) =>
    (innerDigit) =>
      innerDigit + outerDigit;
const minus =
  (outerDigit) =>
    (innerDigit) =>
      innerDigit - outerDigit;
const times =
  (outerDigit) =>
    (innerDigit) =>
      innerDigit * outerDigit;
const dividedBy =
  (outerDigit) =>
    (innerDigit) =>
      Math.floor(innerDigit / outerDigit);
