// Decorators - wrap a function in another function 
// these wrappers "decorate" the original function with new capabilities.

// Benefits: DRY - don't repeat yourself
//              - clean code through composition

// Eg 1. Using Closure to log how many times a function is called

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

const call_counter = (fn) => {
  let count = 0;

  return (...args) => {
    // write to logs, console, db, etc
    console.log(`sum has been called ${count += 1} times.`);
    return fn(...args);
  };
};

sum = call_counter(sum);

console.log(sum(2, 3, 5));
console.log(sum(1, 5));
console.log(sum(14, 5));


// Eg. 2. Checking valid data and number of params

let rectangle_area = (length, width) => {
  return length * width;
};

const count_params = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of params for ${fn.name}`);
    }

    return fn(...params);
  };
};

const require_integers = (fn) => {
  return (...params) => {
    params.forEach(param => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Params for ${fn.name} must be integers.`);
      }
    });

    return fn(...params);
  };
};

rectangle_area = count_params(rectangle_area);
rectangle_area = require_integers(rectangle_area);

console.log(rectangle_area(20, 30));
// console.log(rectangle_area(20, "Hey"));

// Eg. 3. An async API call function - Time data requests during development

let data_request = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

const data_response_time = fn => {
  return async (url) => {
    console.time("fn");
    const data = await fn(url);

    console.timeEnd("fn");
    return data;
  };
};

const test_function = async () => {
  data_request = data_response_time(data_request);

  const data = await data_request("https://jsonplaceholder.typicode.com/posts");

  console.log(data);
};

test_function();

