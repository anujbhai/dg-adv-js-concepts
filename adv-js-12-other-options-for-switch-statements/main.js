// Lookup objects
const extension = ".css";

const extensionObj = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".txt": "text/plain",
};

console.log(extensionObj[extension] || "text/html");

// using map
const my_map = new Map();

my_map.set(".css", "text/css");
my_map.set(".js", "text/javascript");
my_map.set(".json", "application/json");
my_map.set(".jpg", "image/jpeg");
my_map.set(".png", "image/png");
my_map.set(".txt", "text/plain");

console.log(my_map.get(extension) || "text/html");

