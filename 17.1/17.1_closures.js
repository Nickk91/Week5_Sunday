// Front-end development: Tricky Parts
// JavaScript – closures
// The following exercise contains the following subjects:
// ● closures
// Instructions
// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.
// Block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2); //b is initially set to 1.someFunction is called with the argument 9.
//Inside someFunction, otherFunction is defined, and b is updated to 5.
//firstResult is assigned a reference to otherFunction.
//firstResult(2) is called, invoking otherFunction, which returns the current value of b, which is 5.
//result is assigned the value 5.
//So, the final value of result is 5.

// Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2(); // this will run b2 -which will won't result itll run until return - which will end the function
console.log(a); // here it'll check in the outer scope what value is a, and will display 1 due to var a =1 being declared in the global scope
// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
//the setTimeout function initate the count up of i in the loop, while at the same time, the console log action is postponed.
//When the 100ms delay is up the value of i already reached 3. Then the console proceeds the delayed logging activty. and displays i in the console 3 time (since the count up has already reached 3)
