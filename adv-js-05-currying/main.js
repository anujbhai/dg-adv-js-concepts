// Currying
// - named after Haskell B. Curry
// - concept from lambda calculus
// - Currying takes a function that recieves more than one parameter
//    breaks it into a series of unary (one parameter) functions.
// - a curried function takes only one parameter at a time.

// Eg. 1
const build_sandwich = ingredient1 => {
  return ingredient2 => {
    return ingredient3 => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const my_sandwich = build_sandwich("Bacon")("Lettuce")("Tomato");
console.log(my_sandwich);

// refactored version:
const build_sandwich_01 = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`;

const my_sandwich_01 = build_sandwich_01("turkey")("cheese")("bread");
console.log(my_sandwich_01);

// Eg. 2
const multiply = (x, y) => x * y;

const curried_multiply = x => y => x * y;

console.log(multiply(2, 3));
console.log(curried_multiply(2));
console.log(curried_multiply(2)(3));

// Eg. 3 - common use cases
// Partially applied functions are a very common example of currying
const times_ten = curried_multiply(10);
console.log(times_ten(8)); // equivalent to curried_multiply(10)(8)

// Another partially applied function
const update_element_text = id => content => document.querySelector(`#${id}`).textContent = content;
const update_header_text = update_element_text("header");

update_header_text("Hello Anuj");

// Composition - allowing small function calls in a specific order
const add_customer = fn => (...args) => {
  console.log(`saving customer info...`);
  return fn(...args);
};

const process_order = fn => (...args) => {
  console.log(`processing order #${args[0]}`);
  return fn(...args);
};

let complete_order = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`);
};

complete_order = process_order(complete_order);
console.log(complete_order);
complete_order = add_customer(complete_order);
complete_order("9999");

// Requires a function with a fixed number of parameters
const curry_eg = fn => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }

    return fn(...args);
  };
};

const total = (x, y, z) => x + y + z;

const curried_total = curry_eg(total);
console.log(curried_total(10)(20)(30));

