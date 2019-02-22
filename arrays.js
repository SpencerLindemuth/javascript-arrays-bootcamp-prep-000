var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(addArray, element){
  newArray = [element, ...addArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(addArray, element){
  return [element, ...addArray]
}

function addElementToEndOfArray(addArray, element){
  newArray = [...addArray, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(addArray, element){
  return addArray.push(element)
}
