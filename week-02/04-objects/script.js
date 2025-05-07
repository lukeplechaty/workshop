console.log("hi!");

let testObject = {
  infoString: "text hear",
  infoNumber: 7,
  infoBoolean: false,
  infoArray: ["text 2", 4, true],
  infoObject: { test1: "yo", test2: 9, test3: true },
};

console.log(testObject + "\r\n");
console.log(testObject.infoString);
console.log(testObject.infoNumber);
console.log(testObject.infoBoolean);
console.log(testObject.infoArray[1]);
console.log(testObject.infoObject.test1);
console.log(testObject.infoArray.length + "\r\n");

testObject.infoNew = "this is new";

console.log(testObject.infoNew + "\r\n");

let car = {
  make: "jaguar",
  model: "f-type",
  colour: "night blue",
};

console.log(`for sale ${car.make} ${car.model} in ${car.colour}\r\n`);

let book = {
  title: "Do-It-Yourself Multiplayer Java Games",
  author: "Annette Godtland",
  numberOfPages: 802,
};

console.log(
  `for sale ${book.title} by ${book.author} with ${book.numberOfPages} pages\r\n`
);
