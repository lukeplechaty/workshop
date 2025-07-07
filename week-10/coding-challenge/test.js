const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function createPhoneNumber(number) {
  //test if number has not got all needed number
  if (number.length < 10) return "number to small";
  else if (number.length > 10) return "number to big";
  let text = "("; //start of string
  number.forEach((num, id) => {
    //got over all numbers
    if (id === 3) text += ") "; //place arter 3ed number
    else if (id === 6) text += "-"; //place arter 6th number
    text += num; //allway add
  });
  return text;
}

console.log(createPhoneNumber(number));
