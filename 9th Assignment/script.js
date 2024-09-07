/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;
// //          5         6         5        5        5        5
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]; // length = 6
//                   1|-5      2|-4
// Write Code Here

// my = my.slice(zero, my[zero].length).reverse();
// my.shift();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(-my[zero].length, counter).sort()); // ["Elham", "Mazero"]

// console.log(); // "Elzero"

// console.log(my[my[zero].length]); // "rO"

// 1st Task
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// myFriends.length = num;
// // Method 2
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// 2nd Task
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
// friends.shift();
// friends.pop();

// console.log(friends); // ["Eman", "Osama"]

// 3rd Task
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr = arrTwo.slice(arrTwo.indexOf("Z")).concat(arrOne.reverse(), arrTwo.slice(finalArr.length, arrTwo.indexOf("Z")).reverse());
// finalArr = [...arrOne, ...arrTwo].reverse();
// finalArr = arrOne.concat(arrTwo).sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// 4th Task
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// 5th Task
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// console.log(haystack.includes(needle));
// if (haystack.lastIndexOf !== -1) {
//     console.log("true")
// }
// if (haystack.indexOf !== -1) {
//     console.log("true")
// }

// 6th Task
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// x = arr1.pop();
// allArrs = arr2.slice(arr1.length).concat(x).sort();
// allArrs=allArrs.join("").toLowerCase();
// console.log(allArrs); // fxy