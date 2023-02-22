// Official definition of Recursion:
// A method of solving a problem where the solution depends on solutions to smaller instances of the same problem.

// In programming, recursion occurs when a function calls itself.

// Anu iterator function can be recursive.

// iterator function
const count_to_ten = (num = 1) => {
  while (num <= 10) {
    // console.log(num);
    num++;
  }
};
count_to_ten();

// resursive functions have 2 parts
// 1. the recursive call to the function
// 2. at least 1 condition to exit
const recur_to_ten = (num = 1) => {
  if (num > 10) return

  // console.log(num);

  num++;

  recur_to_ten(num);
};

recur_to_ten();

// standard example: Fibonacci sequence
// ===================================

// without recursion
const fib_01 = (num, arr = [0, 1]) => {
  while(num > 2) {
    const [next_to_last, last] = arr.slice(-2);

    arr.push(next_to_last + last);

    num -= 1;
  }

  return arr;
};
console.log(fib_01(12));

// with recursion
const fib_02 = (num, arr = [0, 1]) => {
  if (num <= 2) return arr;

  const [next_to_last, last] = arr.slice(-2);

  return fib_02(num - 1, [...arr, next_to_last + last]);
};
console.log(fib_02(12));

// nth position number in the Fibonacci sequence
// ============================================

// without recursion
const fib_pos_01 = (pos) => {
  if (pos <= 1) return pos;

  const seq  = [0, 1];

  for (let i = 2; i <= pos; i++) {
    const [next_to_last, last] = seq.slice(-2);
    seq.push(next_to_last + last);
  }

  return seq[pos];
};
console.log(fib_pos_01(8));

// with recursion
/* const fib_pos_02 = pos => {
  if (pos < 2) return pos;

  return fib_pos_02(pos - 1) + fib_pos_02(pos - 2);
}; */
const fib_pos_02 = pos => pos < 2
  ? pos
  : fib_pos_02(pos - 1) + fib_pos_02(pos - 2);
console.log((fib_pos_02(8)))

// real-life examples
// ==================

// 1. continuation token from an API
const get_AWS_product_id_images = async () => {
  // get the data with await fetch request
  if (data.isTruncated) {
    // recursive
    return await get_AWS_product_id_images(
      productId,
      s3,
      resultArr,
      data.nextContinuationToken
    );
  }

  return resultArr;
};

// 2. A Parser:
// an XML or JSON data export
const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Seger", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The Killers"],
      current: ["Joywave", "Sir Sly"]
    }
  },
  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris"]
  }
};

const get_artist_names = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach(key => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach(artist => arr.push(artist));
    }

    get_artist_names(dataObj[key], arr);
  });

  return arr;
};
console.log(get_artist_names(artistsByGenre));

