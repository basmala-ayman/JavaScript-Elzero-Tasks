// 1st Task
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let ipReg = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/;
// console.log(ipReg.test(ip));
////////////////////////////////////////////////////////////////////////////////////////

// 2nd Task
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let reg = /os(\d*)o/ig
// console.log(specialNames.match(reg))
// // Output
// // ['Os10O', 'OsO', 'Os100O']
////////////////////////////////////////////////////////////////////////////////////////

// 3rd Task
// let phone = "+(995)-123 (4567)";
// let reg = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
// console.log(reg.test(phone))
////////////////////////////////////////////////////////////////////////////////////////

// 4th Task
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// // https? -> start with https or not
// // : -> :
// // \/\/ -> //
// // (?:[-\w]+\.)? -> followed by ( - a word character or more then . ) or not
// // ([-\w]+) -> ( - a word character or more )
// // \.\w+ -> . + a word character or more
// // (?:\.\w+)? -> followed by ( . + a word character or more ) or not
// // \/?.* -> / or not + . + no char or more
////////////////////////////////////////////////////////////////////////////////////////

// 5th Task
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{1,2}\s?(\/|-)?\s?\d{1,2}\s?(\/|-)?\s?\d{2,4}/;

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"
// console.log(re.test(date1));
// console.log(re.test(date2));
// console.log(re.test(date3));
// console.log(re.test(date4));
////////////////////////////////////////////////////////////////////////////////////////

// 6th Task
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url6 = 'https://chatgpt.com/c/98be7259-bb7e-4620-ae02-3169195d8cfc';
let url7 = 'https://www.youtube.com/watch?v=_n_oiZRqH_k&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=146';

let re = /(https?:\/\/)?(www\.)?\w+\.\w+/i; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(re.test(url1));
console.log(re.test(url2));
console.log(re.test(url3));
console.log(re.test(url4));
console.log(re.test(url5));
console.log(re.test(url6));
console.log(re.test(url7));
////////////////////////////////////////////////////////////////////////////////////////
