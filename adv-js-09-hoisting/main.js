// Hoisting

// declaration are hoisted / initialization are not
const init_app = () => {
  step_one();
};

document.addEventListener("DOMContentLoaded", init_app);

const step_one = () => {
  console.log("step one");
};

