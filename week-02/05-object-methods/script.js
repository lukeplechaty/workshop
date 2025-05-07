console.log("hi!");

const testObject = {
  name: "luke",
  age: 36,
  colour: "red",
  sayHi: function (user) {
    console.log(`${this.name} say hi ${user}\r\n`);
  },
  getColour: function () {
    return this.colour;
  },
};

testObject.sayHi("bob");

const car = {
  make: "jaguar",
  model: "f-type",
  colour: "night blue",
  advert: function () {
    return `${this.make} ${this.model} in ${this.colour}\r\n`;
  },
};

console.log(car.advert());

const book = {
  title: "Do-It-Yourself Multiplayer Java Games",
  author: "Annette Godtland",
  numberOfPages: 802,
  advert: () => {
    return "this book is to help peple in the codeing of multiplayer for java code";
  },
};

console.log(book.advert());
