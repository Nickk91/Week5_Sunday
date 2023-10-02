// Front-end development: Tricky Parts
// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
// ● scope
// ● hoisting
// Instructions
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
// Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
//funcA will run first. it will console log a as unidenified because a is a  var which means it's hoisted
//it will run and display the return value within foo() which is the value of 2 due to function being hoisted - which means it can run before it's declared

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); // it will display in the console the full name of "Aurelio De Rosa" due the method within the oject prop reffering to the full name in the prop object
var test = obj.prop.getFullName;
console.log(test()); // it will will display undefined due to the variable "test" being declared in the outerscope

// Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB(); // the console won't display anything due the value of a being returned but not console logged
console.log(typeof a); // will display undefined in the console becuase the variable was declared inside the function with let. It's not accessible in the scope outside of funcB()
console.log(typeof b); // will display a type of number in the console, becuase due to the fact that b was assigned the value 0 without using let, const or var means it's accesible in the global scope outside of the func
// Block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// will console log "2" twice becuase functions are hoisted.
//the sequence of the way the code is being run funcb declared to console log "1",
//then it's redclared to console log "2". then it's being run twice; resulting in console l

// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); // will display 1 in the console due to d being assigned the value of one without being declared using var, const or var
function funcD2() {
  var e = 1;
}
funcD2(); // won't display anything
console.log(e); // will return error message undefined due e being not accesible in the outer scope and being hoisted due to being decaled as var inside the function
// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); //
var f = 1;
funcE();
//will console log "Value of f in global scope: ", undefined) f is var, is declared below. Which means it's hoisted inside the function
//will console log "Value of f in local scope: ", 1) f is var in the global scope. it's not being hoisted because funE is run after var f = 1 was declared and assigned a value
