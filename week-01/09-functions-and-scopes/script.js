console.log("hi");

function cal(val1, val2, op) {
  switch (op) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "*":
      return val1 * val2;
    case "/":
      return val1 / val2;
  }
}

console.log(cal("2", "2", "*"));

function doThis(text) {
  let addText = "!";
  let temp = `${text}${addText}`;
  return temp;
}

console.log(doThis("hi all"));

console.log(`this dont work ${addText}`);
