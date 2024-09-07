// Loop Challenge

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];

// document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
// document.write(`<hr>`);
// for (let i = 0; i < myAdmins.length; i++) {
//     if (myAdmins[i]==="Stop") {
//         break;
//     }
//   let counter = 0;
//   document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);
//   document.write(`<h2>Team Members:</h2>`);

//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myEmployees[j].startsWith(myAdmins[i][0])) {
//       document.write(`<p>- ${++counter} ${myEmployees[j]}</p>`);
//     }
//   }
//   document.write(`<hr>`);
// }

// 1st Task
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length) {
//   if (
//     (typeof friends[index] == "string" && friends[index].startsWith("A")) ||
//     typeof friends[index] == "number"
//   ) {
//     index++;
//     continue;
//   }
//   console.log(`${++counter} => ${friends[index]}`);
//   index++;
// }

// Output
// ("1 => Sayed");
// ("2 => Mahmoud");
