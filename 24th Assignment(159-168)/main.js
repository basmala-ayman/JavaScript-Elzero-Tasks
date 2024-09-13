// 1st Task
// let myBirthDate = new Date("2004/9/19");
// let now = new Date();
// let diff = now - myBirthDate;
// console.log(`${parseInt(diff / 1000)} Seconds`);
// console.log(`${parseInt(diff / 1000 / 60)} Minutes`)
// console.log(`${parseInt(diff / 1000 / 60 / 60)} Hours`)
// console.log(`${parseInt(diff / 1000 / 60 / 60 / 24)} Days`)
// console.log(`${parseInt(diff / 1000 / 60 / 60 / 24 / 30)} Months`)
// console.log(`${parseInt(diff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`)

// // Needed Output
// // "1247939400 Seconds"
// // "20798990 Minutes"
// // "346650 Hours"
// // "14444 Days"
// // "481 Months"
// // "40 Years"
//////////////////////////////////////////////////////////////////////////////////////////

// 2nd Task
// let d = new Date(0);
// d.setFullYear(1980);
// d.setHours(0,0,1)
// console.log(d)

// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
//////////////////////////////////////////////////////////////////////////////////////////

// 3rd Task
// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];
// let date = new Date();
// date.setDate(0);
// console.log(date);
// console.log(`Previous Month Is ${months[date.getMonth()]} And Last Day Is ${date.getDate()}`);
// // Needed Output
// // "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// // "Previous Month Is April And Last Day Is 30"
//////////////////////////////////////////////////////////////////////////////////////////

// 4th Task
// let date1 = new Date("2004/9/19");
// let date2 = new Date(2004, 8, 19);
// let dateMilliSeconds = Date.parse("Sep 19 2004")
// let date3 = new Date(dateMilliSeconds)
// console.log(date1)
// console.log(date2)
// console.log(date3)

// // Needed Output
// // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
//////////////////////////////////////////////////////////////////////////////////////////

// 5th Task
// for (let i = 1; i < 10000; i++) {
//     console.log(i);
//     performance.now();
// }
// console.log(`Loop Took ${performance.now().toFixed(0)} Milliseconds.`)
// // Needed Output
// // "Loop Took 1921 Milliseconds."
//////////////////////////////////////////////////////////////////////////////////////////

// 6th Task
// Write Your Generator Function Here
// function* gen() {
//     let index = 0;
//     while (true) {
//         yield index++;
//     }
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
//////////////////////////////////////////////////////////////////////////////////////////

// 7th Task
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here
// function* genAll() {
//     yield* new Set(genNumbers())
//     yield* new Set(genLetters())
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}
//////////////////////////////////////////////////////////////////////////////////////////

// 8th Task
// import calc from "./mod-one.js";
// import * as modOne from "./mod-two.js";
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
//////////////////////////////////////////////////////////////////////////////////////////