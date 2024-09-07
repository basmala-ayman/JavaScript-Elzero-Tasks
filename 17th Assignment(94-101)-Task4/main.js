//<div>
//    <span>Hello</span>
//    <!-- We Need The Next Text Without Spaces -->
//    Elzero
//</div>

// let myElement = document.querySelector("div span").nextSibling.nextSibling.nextSibling.textContent.trim()
let myElement = document.querySelector("div").lastChild.textContent.trim();
console.log(myElement)