function hasTargetSum(array, target) {
  // Write your algorithm here
}
function hasTargetSum(arr, target) {
  // Loop through each number
  for (let i = 0; i < arr.length; i++) {
    // Loop through remaining numbers to find a pair
    for (let j = i + 1; j < arr.length; j++) {
      // If current pair adds up to target, return true
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  // If no pair is found, return false
  return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  / Pseudocode:
// FUNCTION hasTargetSum(array, target)
//   FOR each number in array
//     FOR each other number in array
//       IF number1 + number2 equals target
//         RETURN true
//     END FOR
//   END FOR
//   RETURN false
// END FUNCTION
*/

/*
  Add written explanation of your solution here
  // Problem rephrased: Create a function that takes an array of numbers and a target number,
// and returns true if any two numbers in the array add up to the target, false otherwise

// Additional test cases:
// hasTargetSum([1, 2, 3, 4], 7)  // true (3 + 4)
// hasTargetSum([5], 10)          // false (only one number)
// hasTargetSum([-1, 2, 3], 1)    // true (-1 + 2)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
