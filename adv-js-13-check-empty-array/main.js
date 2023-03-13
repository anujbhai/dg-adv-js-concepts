// Check empty arrays
let my_arr = [];

// Arrays have a length property
console.log(my_arr.length);

my_arr = undefined;

console.log(my_arr && my_arr.length ? true : false);

// Alternate methods
// 1. optional chaining
console.log(my_arr?.length ? true : false);

const my_arr_2 = [{"id" : 1}];

console.log(my_arr_2?.[0]?.id ? true : false);

// 2. null coalescing operator
console.log(my_arr_2?.[0]?.name ?? "No name property");

// find out if the data is an array
const my_arr_3 = [{"id": 1}];

console.log(Array.isArray(my_arr_3) && my_arr_3.length ? true : false);
console.log(Array.isArray(my_arr_3) && my_arr_3[0]?.name ? true : false);



