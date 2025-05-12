console.log("hi");

async function getData(url) {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

const mainSection = document.getElementById("main-section");
function setDOM(head, text) {
  const headBox = document.createElement("h2");
  headBox.textContent = head;
  mainSection.appendChild(headBox);
  const textBox = document.createElement("p");
  textBox.textContent = text;
  mainSection.appendChild(textBox);
}

async function test() {
  const data = await getData(
    "https://uselessfacts.jsph.pl/api/v2/facts/random"
  );
  setDOM("Random uselest fact", data.text);

  const weather = await getData("http://goweather.xyz/weather/Norwich");
  let textSet = `${weather.description} at ${weather.temperature} with ${weather.wind} winds`;
  setDOM("Today Weather", textSet);
}

test();
