var ingredient1 = "bread", ingredient2 = "mild cheese", ingredient3 = "sharp cheese", ingredient4 = "butter", ingredient5 = "tomato", ingredient6 = "garlic";
var chocolateBars = [snickers, hundred grand, kitkat, skittles];

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return arr.unshift(element);
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element];
}

function destructivelyAddElementToEndOfArray(arr, element) {
  return arr.push(element);
}