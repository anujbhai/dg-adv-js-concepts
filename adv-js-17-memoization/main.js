const init_app = () => {
  const memoized_fib = memoize(fib);
  
  console.log(memoized_fib(40));
  console.log(memoized_fib(40));
  console.log(memoized_fib(40));
};

document.addEventListener("DOMContentLoaded", init_app);

/*const multiply_by_10 = (num) => {
  return num * 10;
};

const add_3 = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const add_many = (...args) => {
  return args.reduce((acc, num) => acc + num);
};*/

// fibonacci with memoization
const fib = pos => {
  if (pos < 2) return pos;

  return fib(pos - 1) + fib(pos - 2);
};

// decorator function for memoization
const memoize = fn => {
  const cache = {};

  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }

    const result = fn(...args);

    cache[args.toString()] = result;

    return result;
  };
};

/* const memoized_multiply_by_10 = () => {
  const cache = {};

  return num => {
    if (num in cache) {
      console.log(cache);

      return cache[num];
    }

    const result = num * 10;

    cache[num] = result;

    return result;
  }
}; */

