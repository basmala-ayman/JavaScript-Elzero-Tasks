// 1st Task
// function sayHello(theName, theGender) {
//     if (theGender === "Male") {
//         console.log("Hello Mr " + theName);
//     } else if (theGender === "Female") {
//         console.log("Hello Miss " + theName);
//     } else {
//         console.log("Hello " + theName);
//     }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// 2nd Task
// function calculate(firstNum, secondNum, operation = "add") {
//   if (firstNum === undefined || secondNum === undefined) {
//       console.log("Second Number Not Found");
//       return;
//   }
//   if (operation == "add") {
//     return console.log(firstNum + secondNum);
//   } else if (operation == "subtract") {
//     return console.log(firstNum - secondNum);
//   } else if (operation == "multiply") {
//     return console.log(firstNum * secondNum);
//   }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600

// 3rd Task
// function ageInTime(theAge) {
//   if (theAge < 10 || theAge > 100) {
//     console.log("Age Out of Range!!");
//     return;
//   }
//   let months = theAge * 12;
//   let weeks = theAge * 52;
//   let days = theAge * 365;
//   let hours = days * 24;
//   let minutes = hours * 60;
//   let seconds = minutes * 60;
//   console.log("Months: " + months);
//   console.log("Weeks: " + weeks);
//   console.log("Days: " + days);
//   console.log("Hours: " + hours);
//   console.log("Minutes: " + minutes);
//   console.log("Seconds: " + seconds);
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(20); // Months Example => 456 Months


// 4th Task
// function checkStatus({ a, b, c }) {
//     if (c) {
//         console.log("Hello " + a + ", Your Age Is " + b + ", You Are Available For Hire");
//     } else {
//         console.log("Hello " + a + ", Your Age Is " + b + ", You Are Not Available For Hire");
//   }
// }

// // Needed Output
// checkStatus({a: "Osama", b: 38, c: true}); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus({b: 38, a: "Osama", c: true}); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus({c: true, b: 38, a: "Osama"}); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus({ c: false, a: "Osama", b: 38 }); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Another Solution
// function checkStatus(a, b, c) {
//     let name;
//     let age;
//     let job;
//     typeof a == "string" ? name = a : typeof a == "number" ? age = a : job = a;
//     typeof b == "string" ? name = b : typeof b == "number" ? age = b : job = b;
//     typeof c == "string" ? name = c : typeof c == "number" ? age = c : job = c;
//     if (job) {
//         console.log("Hello " + name + ", Your Age Is " + age + ", You Are Available For Hire");
//     } else {
//         console.log("Hello " + name + ", Your Age Is " + age + ", You Are Not Available For Hire");
//   }
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, true, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


// 5th Task
// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`)
//     for (let i = startYear; i <= endYear; i++) {
//         document.write(`<option value="${i}">${i}</option>`);
//     }
//   document.write(`</select>`)
// }
// createSelectBox(2000, 2021);

// 6th Task
// function multiply(...numbers) {
//     let result = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[i] == "string") continue;
//         result *= Math.floor(numbers[i]);
//     }
//     console.log(result);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000