// 1st Task
// class Car{
//     constructor(name, model, price) {
//         this.n = name;
//         this.m = model;
//         this.p = price;

//     }
//     run() {
//         return `Car Is Running Now`;
//     }
//     stop() {
//         return `Car Is Stopped`;
//     }
// }

// let one = new Car("MG", "2022", 420000);
// let two = new Car("Car2", "102", 2000);
// let three = new Car("Car3", "103", 3000);

// console.log(`Car One Name Is ${one.n} And Model Is ${one.m} And Price Is ${one.p}`);
// console.log(one.run());

// // Needed Output
// // "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// // "Car Is Running Now"
//////////////////////////////////////////////////////////////////////////////////////////////

// 2nd Task
// class Phone {
//     constructor(name, serial, price) {
//         this.name = name;
//         this.serial = serial;
//         this.price = price;
//     }
// }
// // Write Tablet Class Here
// class Tablet extends Phone {
//     constructor(name, serial, price, size) {
//         super(name, serial, price);
//         this.size = size || "Unknown";
//     }
//     fullDetails() {
//         return `${this.name} Serial is ${this.serial} And Size is ${this.size}`;
//     }
// }
// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9
// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5
// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown
//////////////////////////////////////////////////////////////////////////////////////////////

// 3rd Task
// // Edit The Class
// class User {
//     #c;
//     constructor(username, card) {
//         this.u = username;
//         this.#c = typeof card == "number" ? card.toString() : card;
//         // or does not match with /.{4}-.{4}-.{4}.{4}/
//         if (!this.#c.includes("-")) {
//             this.#c = this.#c.replace(/(.{4})/g, '$1-');
//             this.#c = this.#c.endsWith('-') ? this.#c.slice(0, -1) : this.#c;
//         }
//     }
//     get showData() {
//         return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`
//     }
// }
// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined
//////////////////////////////////////////////////////////////////////////////////////////////

// 4th Task
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj, "score", {
    writable: false,
});
Object.defineProperty(myObj, "id", {
    enumerable: false,
});
delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
// "username => Elzero"
// "score => 1000"
// { username: 'Elzero', score: 1000, id: 100 }
//////////////////////////////////////////////////////////////////////////////////////////////