// Lexical scope defines how variable names are resolved in nested functions.

// Nested (child) functions have access to the scope of their parent functions.

// Not to be confused with closure, lexical scope is only an important part of closure.

// A closure is a function having access to the parent scope, even after the parent function has closed.

// A closure is created when we define a function, not when a function is executed.
  
// global scope
let x = 1;

const parent_function = () => {
  // local scope
  let my_value = 2;
  console.log(x);
  console.log(my_value);

  const child_function = () => {
    console.log(x += 5);
    console.log(my_value += 1);
  };

  return child_function;
};

const result = parent_function();

console.log(result);

result();

// IIFE (Immediately Invoked Function Expression)
const private_counter = (() => {
  let count = 0;

  console.log(`initial value: ${count}`);

  return () => {
    count += 1;
    console.log(count);
  }
})();
private_counter();
private_counter();
private_counter();

