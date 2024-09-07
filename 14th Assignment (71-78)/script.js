/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .filter(function (ele) {
    return ele !== ",";
  })
  .map(function (ele) {
    return ele === "_" ? " " : ele;
  })
  .map(function (ele) {
    return ele.length > +true ? ele[ele.length - ele.length] : ele;
  });
solution.pop();
solution = solution.reduce(function (acc, current) {
  return acc + current;
});
console.log(solution); // Elzero Web School

// 1st Task
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let nameFromMix = mix
//   .map(function (ele) {
//     return isNaN(ele) ? ele : "";
//   })
//   .reduce(function (acc, current) {
//     return acc + current;
//   });

// // Elzero
// console.log(nameFromMix);

// 2nd Task
// let myString = "EElllzzzzzzzeroo";

// let filteredString = myString.split("").filter(function (ele, index) {
//     return ele !== myString[index - 1];
// }).join("")

// // Elzero
// console.log(filteredString);

// 3rd Task
// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let reducedArray = myArray.join(",").split(",").reduce(function (acc, current) {
//     return acc + current
// })
// // Elzero
// console.log(reducedArray);

// 4th Task
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let numsOnly = numsAndStrings.filter(function (ele) {
//     return !isNaN(ele);
// }).map(function (ele) {
//     return -ele;
// })

// // [-1, -10, 10, 20, -5, -3]
// console.log(numsOnly);

// 5th Task
// let nums = [2, 12, 11, 5, 10, 1, 99];

// let reducedNums = nums.reduce(function (acc, current) {
//   if (current % 2 !== 0) return acc + current;
//   else return acc * current;
// }, 1);

// // 500
// console.log(reducedNums);
