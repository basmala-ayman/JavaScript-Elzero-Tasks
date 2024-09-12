let chars = "aAbscsajSEG347753*/2DS%$224#rRfDCg";
// let reg = /[A-z]/g;
// let reg = /[a-zA-z]/g;
let reg = /[^A-z0-9]/g
console.log(chars.match(reg));