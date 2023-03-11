// Functional programming
// - often uses pipe and compose = higher order functions
// - any function which takes a function as an argument, returns a function, or both

// example without compose
const add_2 = x => x + 2;
const subtract_1 = x => x - 1;
const multiply_by_5 = x => x * 5;

const result = multiply_by_5(subtract_1(add_2(4)));
console.log(result);

// ramda.js and lodash libraries have their own built-in compose and pipe functions.
// pipe os referred to as flow in lodash.

// a higher order function "reduce" takes a list of values and applies a function to each of those values, accumulating a single result.

// To get the compose order from right to left, as with nested function calls, we need reduceRight
const eg_compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);
const eg_comp_result = eg_compose(multiply_by_5, subtract_1, add_2)(4);
console.log(eg_comp_result);

// to do the same as above from left to right we use "pipe",
// - uses reduce instead of reduceRight
const eg_pipe = (...fns) => val => fns.reduce((previous, current) => current(previous), val);
const eg_pipe_result = eg_pipe(add_2, subtract_1, multiply_by_5)(5);
console.log(eg_pipe_result);

const eg_pipe_result_2 = eg_pipe(
  add_2,
  subtract_1,
  multiply_by_5
)(5);
console.log(eg_pipe_result_2);

// a "point free" style is where we do not see the unary parameter passed between each function

// example with a 2nd parameter
const divide_by = (divisor, num) => num / divisor;

const eg_pipe_result_3 = eg_pipe(
  add_2,
  subtract_1,
  multiply_by_5,
  x => divide_by(x, 2)
)(5);
console.log(eg_pipe_result_3);

// we can curry the divide_by function for a custom unary function
const divide_by_partial = divisor => num => num / divisor;
const divide_by_2 = divide_by_partial(2);

const eg_pipe_result_4 = eg_pipe(
  add_2,
  subtract_1,
  multiply_by_5,
  divide_by_2
)(5);
console.log(eg_pipe_result_4);

// Other examples
const lorem = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.";

const split_on_space = str => str.split(" ");
const count = arr => arr.length;
const word_count = eg_pipe(
  split_on_space,
  count
);
console.log(word_count(lorem));

// Check for palindrome: combine processes
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "Dave";

const custom_split = str => str.split("");
const custom_join = str => str.join("");
const custom_lower = str => str.toLowerCase();
const custom_reverse = arr => arr.reverse();

const forward = eg_pipe(
  split_on_space,
  custom_join,
  custom_lower
);

const rev = eg_pipe(
  forward,
  custom_split,
  custom_reverse,
  custom_join
);

console.log(forward(pal1) === rev(pal1));
console.log(forward(pal2) === rev(pal2));
console.log(forward(pal3) === rev(pal3));


// clone/copy functions within a pipe or compose function
// 1st approach - clone the function before an impure function mutates it
const score_obj = {home: 0, away: 0};
const shallow_clone = obj => Array.isArray(obj) ? [...obj] : {...obj};
const inc_home = obj => {
  obj.home += 1; // mutation
  return obj;
};

const home_score = eg_pipe(
  shallow_clone,
  inc_home
);

console.log(home_score(score_obj));
console.log(score_obj);
console.log(home_score(score_obj) === score_obj);

// 2nd approach - curry the function to create 
let inc_home_b = clone_fn => obj => {
  const new_obj = clone_fn(obj);

  new_obj.home += 1;
  
  return new_obj; 
};

inc_home_b = inc_home_b(shallow_clone); // partial through currying

const home_score_b = eg_pipe(
  inc_home_b
);
console.log(home_score_b(score_obj));
console.log(score_obj);
console.log(home_score_b(score_obj) === score_obj);

// 3rd approach - insert clone funtion as dependency
const inc_home_c = (obj, clone_fn) => {
  const new_obj = clone_fn(obj);

  new_obj.home += 1;

  return new_obj;
};

const home_score_c = eg_pipe(
  x => inc_home_c(x, shallow_clone)
);
console.log(home_score_c(score_obj));
console.log(score_obj);
console.log(home_score_c(score_obj) === score_obj);

