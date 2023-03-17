const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const init_app = async () => {
  // use_foreach(ids);  
  // get_post_serialized(ids);
  // get_post_concurrently(ids);
  get_post_serialized_reduce(ids);
};

document.addEventListener("DOMContentLoaded", init_app);

const get_post = async (id) => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await result.json();

  return data;
};

/* const use_foreach = ids => {
  ids.forEach(async (id) => {
    const data = await get_post(id);
    console.log(data);
  });
}; */

/* const get_post_serialized = async (ids) => {
  // for (let i = 0; i < ids.length; i++) {
  for (const id of ids) {
    // const data = await get_post(ids[i]);
    const data = await get_post(id);
    console.log(data);
  }

  console.log("I'll wail on you");
}; */

/* const get_post_concurrently = async (ids) => {
  const posts = await Promise.allSettled(ids.map(async (id) => get_post(id)));

  console.log(posts);
  console.log("I'll wail on you");
}; */

// reduced
const get_post_serialized_reduce = async (ids) => {
  await ids.reduce(async (acc, id) => {
    // waits for the previous item to complete
    await acc;

    // get the next item
    const post = await get_post(id);

    console.log(post);
  }, Promise.resolve());
  
  console.log("I'll wait on you!");
};

