const init_app = () => {
  const button = document.querySelector("button");

  // button.addEventListener("click", debounce(click_log, 2000));
  button.addEventListener("click", () => {
    click_log();

    button.disabled = true;

    setTimeout(() => button.disabled = false, 2000);
  });
};

const click_log = () => {
  console.log("clicked");
};

document.addEventListener("DOMContentLoaded", init_app);

function debounce(fn, delay) {
  let id;

  console.log(`id at immediate load: ${id}`);

  return (...args) => {
    console.log(`previous id: ${id}`);

    if (id) clearTimeout(id);

    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


// review decorators

