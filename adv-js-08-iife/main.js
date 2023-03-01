// First introduced by Ben Alman as "Iffy"

// Variations
// ---------
// Anonymous arrow functions
(() => {
  // do stuff
})();

// regular function with or without name
(function my_IIFE() {
  num++;
  console.log(num);
  return num !== 5 ? my_IIFE(num) : console.log("Finished");
})(num = 0);

// Advantages
// 1. does not pollute the global object namespace

// global
const x = "whatever";
const hello_world = () => "Hello World";

// 2. isolate declarations within the function
(() => {
  const x = "iife whatever";
  const hello_world = () => "Hello IIFE";

  console.log(x);
  console.log(hello_world());
})();

console.log(x);
console.log(hello_world);

// 3. private variables and methods from closure
const increment = (() => {
  let counter = 0;
  console.log(counter);

  const credits = num => console.log(`I have ${num} credit(s).`);

  return () => {counter++; credits(counter)};
})();
increment();
increment();

// 4. module pattern
const Score = (() => {
  let count = 0;

  return {
    current: () => {return count},
    increment: () => {count++},
    reset: () => {count = 0},
  };
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.reset();
console.log(Score.current());

// 5. revealation pattern - variation of the module pattern
const Game = (() => {
  let count = 0;
  const current = () => { return `Game score is ${count}.` };
  const increment = () => {count++};
  const reset = () => {count = 0};

  return {
    current: current,
    increment: increment,
    reset: reset,
  };
})();
Game.increment();
console.log(Game.current());
Game.increment();
console.log(Game.current());
Game.reset();
console.log(Game.current());

// 6, Injecting a namespace object
((namespace) => {
  namespace.count = 0;
  namespace.current = function () {return `App count is ${this.count}.`};
  namespace.increment = function () {this.count++};
  namespace.reset = function () {this.count = 0};
})(window.App = window.App || {});
App.increment();
console.log(App.current());
App.increment();
console.log(App.current());
App.reset();
console.log(App.current());

