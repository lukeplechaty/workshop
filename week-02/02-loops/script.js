console.log("hi!");

// loop 5 times
for (let i = 0; i < 5; i++) {
  console.log(`print ${i + 1} times`); // print out 5 times
}
console.log("");

let testArray = ["cat", "dog", "rat", "frog"];

// loop all item in array
for (let i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}
console.log("");

// loop all item in array but pull the item
for (test of testArray) {
  console.log(test);
}
console.log("");

// loop all item in array but pull the index
for (test in testArray) {
  console.log(test);
}
console.log("");

// loop all item in array from the array
testArray.forEach((test, id) => {
  console.log(test, id);
});
console.log("");

let tempNum = 0;
// loop useing numbers
while (tempNum < 3) {
  console.log(`gone ${tempNum} tims`);
  tempNum++;
}
console.log("");

let tempBoolean = true;
let tempNum2 = 0;
// loop useing boolean
while (tempBoolean) {
  console.log("it true");
  if (tempNum2 > 2) tempBoolean = false;
  else tempNum2++;
}
console.log("it false\r\n");

let animals = ["cat", "dog", "rat", "frog"];
animals.forEach((test) => {
  console.log(test);
});
let colours = ["red", "black", "gold", "green"];
for (let colour of colours) {
  console.log(colour);
}
let numbers = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
let temp = 0;
while (temp < numbers.length) {
  console.log(numbers[temp++]);
}
