console.log("hi");

export function findMaxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

export function factorial(n) {
  if (typeof n !== "number" || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

export function areArraysEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
}

export function toTitleCase(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function isPalindrome(text) {
  var temp = text.replace(/\s/g, ``);
  var reverse = temp.split("").reverse().join("");
  if (reverse === temp) return true;
  else return false;
}

export function add(a, b) {
  return a + b;
}
