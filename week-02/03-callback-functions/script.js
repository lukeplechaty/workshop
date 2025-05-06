console.log("hi!");

function myFunction() {
  console.log("callback text");
}

function myCallback(callback) {
  console.log("befor callback");
  callback();
}

myCallback(myFunction);

myCallback(() => {
  console.log("a new callback");
});

function myCallback2(callback1, callback2) {
  console.log("befor callback");
  const temp = Math.random() > 0.5;
  if (temp) callback1();
  else callback2();
}

myCallback2(
  () => {
    console.log("bigger");
  },
  () => {
    console.log("smaller");
  }
);

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function dividing(a, b) {
  return a / b;
}
function subtracting(a, b) {
  return a - b;
}
function calculator(a, b, callback) {
  console.log("calculation with", a, b);
  return callback(a, b);
}

console.log(calculator(2, 5, add));
console.log(calculator(7, 4, subtracting));
console.log(calculator(3, 4, multiply));
console.log(calculator(14, 3, dividing));
