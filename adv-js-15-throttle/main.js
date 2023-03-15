const init_app = () => {
  const t_button = document.querySelector("button");

  t_button.addEventListener("click", throttle(click_log, 2000));
};

const click_log = () => console.log("click");

document.addEventListener("DOMContentLoaded", init_app);

const throttle = (fn, delay) => {
  let last_time = 0;

  console.log("called throttle immediately");

  let id = 0;

  return (...args) => {
    const now = new Date().getTime();
    
    id++;

    if (now - last_time < delay) return;

    last_time = now;

    console.log("event id:", id);

    fn(...args);
  };
};

