const add_to_score_history = (arr, score) => {
  arr.push(score);

  return arr;
};

const score_arr = [44, 23, 12];

console.log(add_to_score_history(score_arr, 10));

// deep clone function
const deep_clone = obj => {
  if (typeof obj !== "object" || obj === null) return obj;

  // create an array or object to hold the values
  const new_obj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    // recursive call for nested objects and arrays
    new_obj[key] = deep_clone(value);
  }

  return new_obj;
};

// pure functions
const pure_add_to_score_history = (arr, score, clone_fn) => {
  const new_array = clone_fn(arr);

  new_array.push(score);

  return new_array;
};

const pure_score_history = pure_add_to_score_history(score_arr, 18, deep_clone);
console.log("pure score history: ", pure_score_history);
console.log(pure_score_history === score_arr);

