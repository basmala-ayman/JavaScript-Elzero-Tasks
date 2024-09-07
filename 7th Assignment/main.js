/*
  If Condition Challenge
*/

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }
// // Write Previous Condition With Ternary If Syntax
// var res = a < 10 ? 10 : a >= 10 && a <= 40 ? "10 To 40" : a > 40 ? "> 40" : "Unknown";
// console.log(res); 


// let st = "Elzero Web School";

// if ((st.length*2).toString() === "34") {
//   console.log("Good1");
// }

// // W Position May Change
// if (st.charAt(st.toLowerCase().search("w")).toLowerCase() === "w") {
//   console.log("Good2");
// }

// if (st !== "string") {
//   console.log("Good3");
// }

// if (typeof(st.length) === "number") {
//   console.log("Good4");
// }

// if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good5");
// }

// 1st Task
// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

// if (num >= 0 && num < 10) {
//     console.log("00" + num);
// } else if (num >= 10 && num < 100) {
//     console.log("0" + num);
// } else if (num >= 100) {
//     console.log(num.toString());
// }


// 2nd Task
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//     console.log(num1 + " Is The Same Value As " + str);
// }
// if (num1 == str && num1 !== str) {
//     console.log(num1 + " Is The Same Value As " + str + " But Not The Same Type");
// }
// if (num1 != str2 && num1 !== str2) {
//     console.log(num1 + " Is Not The Same Value Or The Same Type As " + str2);
// }
// if (str != str2 && typeof (str) === typeof (str2)) {
//     console.log(str + " Is The Same Type As " + str2 + " But Not The Same Value");
// }


// 3rd Task
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && typeof (num3) !== typeof (num2)) {
//     console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
// }
// if (num3 > num1 && num3 == num2) {
//     console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// }
// if (num3 !== num1 && typeof (num3) !== typeof (num2)) {
//     console.log(num3 + " Value And Type Is Not The Same As " + num1 + " And Type Is Not The Same As " + num2);
// }

// 4th Task
// Edit What You Want Here
// let num1 = 10;
// let num2 = 1;
// let num3 = 10;
// let num4 = 40;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1
// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2
// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3
// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4
// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5
// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6
// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7
// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }