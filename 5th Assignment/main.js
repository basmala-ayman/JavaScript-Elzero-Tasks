/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase()+ a.slice(3,6)); // Zero

// // 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(a.split(" ",1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0,6)} ${a.substr(-6,6)}`); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(a[0].toLowerCase()+a.slice(1,-1).toUpperCase()+a.substr(-1,1).toLowerCase()); // eLZERO WEB SCHOOl

// 1st Task
// let userName = "Elzero";
// console.log(userName.toLowerCase().charAt(0)); // e
// console.log(userName.toLowerCase().slice(0,1)); // e
// console.log(userName.toLowerCase().substring(0,1)); // e
// console.log(userName.toLowerCase().substr(0,1)); // e
// console.log(userName[0].toLowerCase()); // e
// console.log(userName[0].toLowerCase().repeat(3)); // eee

// 2nd Task
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.toLocaleUpperCase().includes(letterZ.toUpperCase())); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True