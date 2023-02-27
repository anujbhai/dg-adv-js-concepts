// Foundational knowledge for writing pure functions

// value vs reference
// -----------------
// primitives pass values:
let x = 2;
let y = x;

y += 1;
console.log("x: ", x);
console.log("y: ", y);

// structural types use references
let x_arr = [1, 2, 3];
let y_arr = x_arr;

y_arr.push(4);
console.log("x_arr: ", x_arr);
console.log("y_arr:", y_arr);

// Pure functions require you to avoid mutating the data

// impure functions
const add_to_score_history = (array, score) => {
  array.push(score);
  return array;
};

const score_array = [44, 23, 12];

console.log(add_to_score_history(score_array, 10));

// Shallow copy vs. Deep copy (clone)
// 1. shallow copy
// - spread operator
const z_arr = [...y_arr, 10];
console.log(z_arr);
console.log(y_arr);

console.log(x_arr === y_arr);
console.log(y_arr === z_arr);

// - Object.assign
const t_arr = Object.assign([], z_arr);
console.log(t_arr);
console.log(t_arr === z_arr);

t_arr.push(11);
console.log(t_arr);
console.log(z_arr);

// nested structural data types still share  a reference
y_arr.push([8, 9, 10]);

const v_arr = [...y_arr];

console.log(v_arr);

v_arr[4].push(5);

console.log(v_arr);
console.log(y_arr);

// Array.from() and slice() create shallow copies too.

// Object.freeze() works as shallow freeze
const score_object = {
  "first": 44,
  "second": 12,
  "third": {
    "a": 1,
    "b": 2,
  }
};

Object.freeze(score_object);
score_object.third.a = 8;
console.log(score_object);

// 2. Deep copy.
// To avoid mutiotions caused by shallow copy we can opt for deep copy.
// Libraries like lodash, ramda etc. have this feature built in

// A basic 1 line vanilla js solution
// however it does not work with Dates, function, undefined, infinity, regexp, maps,
// sets, blobs, filelists, imagedatas, and other complex data types.
const new_score_obj = JSON.parse(JSON.stringify(score_object));
console.log("new score obj: ", new_score_obj);
console.log(new_score_obj === score_object);

// js function solution
const deep_clone = obj => {
  if (typeof obj !== "object" || obj === null) return obj;

  // create an array or object to hold the values
  const new_object = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    // recursive call for nested objects and  arrays
    new_object[key] = deep_clone(value);
  }

  return new_object;
};

const new_score_array = deep_clone(score_array);
console.log("new score arr: ", new_score_array);
console.log(new_score_array === score_array);

const my_score_obj = deep_clone(score_object);
console.log("my score obj: ", my_score_obj);
console.log(my_score_obj === score_object);


// JS Data Types:
// =============
// Primitive:
// - undefined
// - Boolean
// - Number
// - String
// - BigInt
// - Symbols

// Structural
// - Object: (new) Object, Array, Map, Set, WeakMap, Date
// - functions

