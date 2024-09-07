let mix = "A13BS2ZX";
let mixedNumbers = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  });
console.log(mixedNumbers);
