/*
  Switch Challenge
*/

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }
// console.log(salary);

// switch (job) {
//     case "Manager":
//         salary = 8000;
//         break;
//     case "IT":
//     case "Support":
//         salary = 6000;
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         break;
//     default:
//         salary = 4000;
// }
// console.log(salary);

/*
  If Challenge
*/

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// if (holidays === 0) {
//     money = 5000;
// } else if (holidays === 1 || holidays === 2) {
//     money = 3000;
// }else if (holidays === 3) {
//     money = 2000;
// }else if (holidays === 4) {
//     money = 1000;
// } else {
//     money = 0;
// }
// console.log(`My Money is ${money}`);


// 1st Task

// let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
// day = day.trim();
// day = day[0].toUpperCase() + day.slice(1).toLowerCase();

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// switch (day) {
//     case "Friday":
//     case "Saturday":
//     case "Sunday":
//         console.log("No Appointments Available");
//         break;
//     case "Monday":
//     case "Thursday":
//         console.log("From 10:00 AM To 5:00 PM");
//         break;
//     case "Tuesday":
//         console.log("From 10:00 AM To 6:00 PM");
//         break;
//     case "Wednesday":
//         console.log("From 10:00 AM To 7:00 PM");
//         break;
//     default:
//         console.log("It is Not A Valid Day");
//         break;
// }