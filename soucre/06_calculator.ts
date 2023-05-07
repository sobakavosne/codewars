const zero = (fn?: Function) => fn ? fn(0) : 0;
const one = (fn?: Function) => fn ? fn(1) : 1;
const two = (fn?: Function) => fn ? fn(2) : 2;
const three = (fn?: Function) => fn ? fn(3) : 3;
const four = (fn?: Function) => fn ? fn(4) : 4;
const five = (fn?: Function) => fn ? fn(5) : 5;
const six = (fn?: Function) => fn ? fn(6) : 6;
const seven = (fn?: Function) => fn ? fn(7) : 7;
const eight = (fn?: Function) => fn ? fn(8) : 8;
const nine = (fn?: Function) => fn ? fn(9) : 9;

const plus =
  (outerDigit: number) =>
    (innerDigit: number) =>
      innerDigit + outerDigit;
const minus =
  (outerDigit: number) =>
    (innerDigit: number) =>
      innerDigit - outerDigit;
const times =
  (outerDigit: number) =>
    (innerDigit: number) =>
      innerDigit * outerDigit;
const dividedBy =
  (outerDigit: number) =>
    (innerDigit: number) =>
      Math.floor(innerDigit / outerDigit);
