console.log("hi");

function doThis(text) {
  let addText = "!";
  let temp = `${text}${addText}`;
  return temp;
}

console.log(doThis("hi all"));

console.log(`this dont work ${addText}`);
