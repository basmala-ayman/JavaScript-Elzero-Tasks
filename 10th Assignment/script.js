// 1st Task
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i += start) {
//   if (i === exclude) continue;
//   console.log(i);
// }

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// 2nd Task
// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > end ; i--) {
//     if (i < 10) {
//         console.log(`${end}${i}`);
//     }
//     else {
//         console.log(i);
//     }
//     if (i === stop) break;

// }

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// 3rd Task
// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   for (let j = breaker; j < end; j += breaker) {
//     console.log("-- " + j);
//   }
// }

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// 4th Task
// let index = 10;
// let jump = 2;

// for (;;) {
//   console.log(index);
//   index -= jump;
//   if (index === jump) break;
// }

// Output
// 10
// 8
// 6
// 4


// 5th Task
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter = letter.length-letter.length;

// for (let i = (letter.length-letter.length) ; i < friends.length; i++) {
//     if (friends[i].toLowerCase().startsWith(letter)) continue;
//     console.log(`${counter + letter.length} => ${friends[i]}`);
//     counter++;
// }

// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");


// 6th Task
// let start = 0;
// let swappedName = "elZerO";
// let result = "";

// for (let i = start; i < swappedName.length; i++) {
//     if (swappedName[i] === swappedName[i].toLowerCase()) {
//       result += swappedName[i].toUpperCase();
//     } else if (swappedName[i] === swappedName[i].toUpperCase()) {
//       result += swappedName[i].toLowerCase();
//     }
// }
// console.log(result);

// Output
// ("ELzERo");


// 7th Task
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start; i < mix.length; i++) {
//     if (typeof mix[i] == "string" || mix[i] == start.toString().length) continue;
//     console.log(mix[i]);
// }

// Output
// 2
// 3
// 4