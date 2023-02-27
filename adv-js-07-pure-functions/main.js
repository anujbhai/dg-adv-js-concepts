// Advantages of pure functions
// 1. clean code
// 2. easy testing and debugging
// 3. isolated - decoupled and independent
// 4. great for using as utility functions

// rules for pure functions:
// 1. same input always gives same output
//    - should have at least 1 param
// 2. no side-effects

const add = (x, y) => x + y;
console.log(add(2, 3));

//  accessing a scope outsice the function makes it impure
const x = 1;
const y = 1;
const z = 5;
const my_arr = [1, 2, 3];

const sum = (x, y) => x + y + z;
console.log(sum(2, 2));

// pure functions egs
const pure_inc = num => num += 1;
console.log(pure_inc(x));
console.log(x);

const pure_add_to_arr = (arr, data) => [...arr, data];
console.log(pure_add_to_arr(my_arr, 5));
console.log(my_arr);

// These common HOC are pure functions
const one_to_five = [1, 2, 3, 4, 5];
const odd_to_five = one_to_five.filter(el => el % 2 !== 0);
console.log(odd_to_five);

const doubled = one_to_five.map(el => el * 2);
console.log(doubled);

const summed = one_to_five.reduce((acc, sum) => acc + sum);
console.log(summed);

console.log(one_to_five);

