// Closures with IIFE and a param
const credits = ((num) => {
  let credit_val = num;

  console.log(`initial credit value: ${credit_val}`);

  return () => {
    credit_val -= 1;

    if (credit_val > 0) console.log(`progressing, ${credit_val} remaining`);
    if (credit_val <= 0) console.log(`not enough credits`);
  };
})(3);
credits();
credits();
credits();

