/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...data) {
//   return `String [${data.join("], [")}] => Done!`;
// };

// let names = (...data) => `String [${data.join("], [")}] => Done!`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// console.log(names("Basmla", "Sondos", "Mohamed", "Haneen", "Ahmed", "Eyad"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[+!Array.isArray(myNumbers)];

// function calc(one, two, ...nums) {
//   return one + two + nums[+!Array.isArray(myNumbers)];
// }

// console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

// 1st Task
// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     // Write Your Code Here
//     let pattern = zName.split(" ");
//     return pattern[0] + " " + pattern[1][0] + ".";
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//   }
//   function ageWithMessage(zAge) {
//     // Write Your Code Here
//     let age = zAge.split(" ");
//     return `Your Age Is ${age[0]}`;
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//   }
//   function countryTwoLetters(zCountry) {
//     // Write Your Code Here
//     let country = zCountry.toUpperCase().slice(0, 2);
//     return `You Live In ${country}`;
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }
//   function fullDetails() {
//     // Write Your Code Here
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(
//       zAge
//     )}, ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// 2nd Task
// function itsMe() {
//   return `I am A Normal Function`;
// }

// let itsMe = () => `I am A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// 3rd Task
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// 4th Task
// function specialMix(...data) {
//   let result;
//   if (typeof data[0] === "number") {
//     result = 0;
//     for (let i = 0; i < data.length; i++) {
//       result += data[i];
//     }
//     return result;
//   }

//   result = 0;
//   for (let i = 0; i < data.length; i++) {
//     let numString = "";
//     for (let j = 0; j < data[i].length; j++) {
//       if (data[i][j] >= "0" && data[i][j] <= "9") {
//         numString += data[i][j];
//       }
//     }
//     if (numString !== "") {
//       result += Number(numString);
//     }
//   }
//   if (result === 0) {
//     return "All Is String";
//   }
//   return result;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
