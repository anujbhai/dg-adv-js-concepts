const prepare = () => {
  return {
    prepare: () => console.log("Preparing ...")
  }
};
const bake = () => {
  return {
    bake: () => console.log("Baking ...")
  };
};
const ready = () => {
  return {
    ready: () => console.log("Ready!")
  };
};
const stuff = () => {
  return {
    stuff: () => console.log("Stuffing..")
  };
};
const butter = () => {
  return {
    butter: () => console.log("Butterring..")
  };
};
const toss = () => {
  return {
    toss: () => console.log("Tossing..")
  };
};

const create_pizza = (size, crust, sauce) => {
  const pizza = {
    size: size,
    crust: crust,
    sauce: sauce,
    toppings: []
  };

  return {
    ...pizza,
    ...prepare(),
    ...bake(),
    ...ready()
  };
};

const create_salad = (size, dressing) => {
  const salad = {
    size: size,
    dressing: dressing
  };

  return {
    ...salad,
    ...prepare(),
    ...toss(),
    ...ready()
  };
};

const create_stuffed_buttered_crust_pizza = (pizza) => {
  return {
    ...pizza,
    ...stuff(),
    ...butter()
  };
};

const another_pizza = create_pizza("medium", "cheese stuffed", "bbq sauce");
const somebodys_pizza = create_stuffed_buttered_crust_pizza(another_pizza);

somebodys_pizza.bake();
somebodys_pizza.stuff();

const tanus_salad = create_salad("side", "ranch");

tanus_salad.toss();

const add_toppings = (pizza, topping) => {
  pizza.toppings.push(topping);
  return pizza;
};

const dominos_pizza = create_pizza("large", "double cheese burst", "tabasco");
console.log(dominos_pizza);
console.log(add_toppings(dominos_pizza, "sausages"));

// Making shallow copy object to avoid mutation
// function composition (using decorator)
/* const shallow_pizza_clone = fn => {
  return (obj, array) => {
    const new_obj = {...obj};

    return fn(new_obj, array);
  };
}; */

// one liner function for the above
const shallow_pizza_clone = fn => (obj, array) => fn({...obj}, array);

let add_new_toppings = (pizza, toppings) => {
  pizza.toppings = [...pizza.toppings, ...toppings];
  return pizza;
};

// decorate the add_toppings function with shallow_pizza_clone
add_new_toppings = shallow_pizza_clone(add_new_toppings);

const jimus_pizza = create_pizza("medium", "thin", "original");
const jimus_pizza_with_toppings = add_new_toppings(jimus_pizza, ["black olives", "onion", "pepperoni"]);
console.log(jimus_pizza_with_toppings);
console.log(jimus_pizza);
console.log(jimus_pizza_with_toppings === jimus_pizza);

