console.log("hi");

const thisText = document.getElementById("this-text");
thisText.textContent = "it works";

const pText = document.createElement("p");
pText.textContent = "this is new";
document.body.appendChild(pText);

thisText.remove();

const myButton = document.getElementById("my-button");

myButton.addEventListener("click", () => {
  console.log("it works!");
});
