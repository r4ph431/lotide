// FUNCTION IMPLEMENTATION
function tail (array) {
  let output = [];
  for ( let i = 1; i < array.length; i++ ) {
    output.push(array[i]);
  }
  return output;
}


// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};


// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// TEST CASES 1
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log('result: ', result)
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// TEST CASES 2
// const result = tail(["Lighthouse", "Labs"]);
// console.log('result: ', result)
// assertEqual(result.length, 1); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// TEST CASES 3 - array with one element
// const result = tail(["Lighthouse"]);
// console.log('result: ', result)
// assertEqual(result.length, 0); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// TEST CASES 3 - empty array
const result = tail([]);
console.log('result: ', result)
assertEqual(result.length, 0); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
