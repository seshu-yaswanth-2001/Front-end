// concept of excution context
// contains two phase: memory creation phase and code execution phase
// memory creation phase: all the variables are stored in the memory
// code execution phase: all the functions are executed

// example 1
console.log(a);
var a = 10;
console.log(a);
// output: undefined, 10
// explanation: in the memory creation phase, the variable a is not yet created, so it is undefined and
// in the code execution phase, the value of a is assigned to 10 and printed as 10 in the console.

// for every function call, a new execution context is created
// example 2
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();

// output: 10
// explanation: when the outer function is called, a new execution context is created and the variable a is assigned to 10.
// when the inner function is called, a new execution context is created and the value of a is printed as 10 in the console.
// the inner execution context has access to the outer execution context's variables, so it can print the value of a as 10.
// the outer execution context is destroyed after the outer function is called, so the variable a is not accessible outside ->
// the outer function.
// the inner execution context is also destroyed after the inner function is called, so the variable a is not accessible outside ->
// the inner function.
// why execution context is deleted after the function call :
// because the memory is limited and the execution context is stored in the memory, so it is deleted after the function call ->
// to free up the memory.

// So, when every code is executed, the GEC(Global Execution Context) is created and the code is executed in the GEC(Global Execution Context).
// The GEC(Global Execution Context) is the parent of all the execution contexts.

// The concept of the call stack:
// The call stack is used to store the execution contexts.
// The call stack is a data structure that stores the execution contexts.
// The call stack follows the LIFO(Last In First Out) principle.
// Refer the notes for the call stack diagram.

// concept of hoisting
// hoisting is the process of moving the variables and functions to the top of the execution context.
// hoisting is done in the memory creation phase.
// hoisting is done only for the variables and functions.
// hoisting is not done for the function expressions.
// example 1
console.log(a);
var a = 10;
console.log(a);
// output: undefined, 10
// explanation: first a is created in the memory and assigned to undefined and then the value of a is assigned to 10 and printed as 10 in the console.
