// 1st Task
// let setOfNumbers = new Set([10])
// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers)
// // Set(3) { 10, 20, 2 }
// console.log([...setOfNumbers][setOfNumbers.size-1])
// // 2
/////////////////////////////////////////////////////////////////////////////

// 2nd Task
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set(myFriends.sort()));
// // Needed Output
// // (4)['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
/////////////////////////////////////////////////////////////////////////////

// 3rd Task
// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };

// let myMap = new Map(Object.entries(myInfo));
// console.log(myMap)
// // Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// console.log(myMap.size)
// // 3
// console.log(myMap.has("role"))
// // true
/////////////////////////////////////////////////////////////////////////////

// 4th Task
// let theNumber = 100020003000;
// console.log(+([...(Array.from(theNumber.toString()).filter((e) => e != 0))].join("")));
// Needed Output
// 123
/////////////////////////////////////////////////////////////////////////////

// 5th Task
// let theName = "Elzero";
// console.log(theName.split(""));
// console.log([...theName]);
// console.log(Array.from(theName))
// console.log(Object.assign([], theName))
// let arr = [];
// for (const char of theName) {
//     arr.push(char);
// }
// console.log(arr)
// // Needed Output
// // ['E', 'l', 'z', 'e', 'r', 'o']
/////////////////////////////////////////////////////////////////////////////

// 6th Task
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// // let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// // let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// let nums = 0;
// chars.forEach((e) => typeof e === "number" ? nums++ : nums);
// let charsOnly = chars.filter((e) => typeof e === "string");
// let numsOnly = chars.filter((e) => typeof e === "number");
// let sortedChars = [...numsOnly, ...charsOnly];

// let result = sortedChars.copyWithin(0, nums, nums * 2);
// console.log(result)

// // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]
/////////////////////////////////////////////////////////////////////////////

// 7th Task
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// console.log([...numsOne,...numsTwo])
// console.log(numsOne.concat(numsTwo))
// numsOne.push(...numsTwo)
// console.log(numsOne)
// // Needed Output
// // [1, 2, 3, 4, 5, 6]
/////////////////////////////////////////////////////////////////////////////

// 8th Task
// let n1 = [10, 30, 10, 20]; // length = 4
// let n2 = [30, 20, 10]; // length = 3

// console.log([...n1, ...n2].length * Math.max(...n1))
// // Needed Output
// // 210 // 7 * 30
/////////////////////////////////////////////////////////////////////////////