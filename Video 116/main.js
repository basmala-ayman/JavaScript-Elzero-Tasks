let myFriends = ["Ahmen", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
let [, , , [a, , [, b]]] = myFriends;
console.log(a)
console.log(b)