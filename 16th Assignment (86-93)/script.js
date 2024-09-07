// 1st Task
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByName("js"));
// console.log(document.getElementsByTagName("div")[0]);

// console.log(document.querySelector("div"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("[name = 'js']"));

// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll("#elzero"));
// console.log(document.querySelectorAll(".element")[0]);
// console.log(document.querySelectorAll("[name = 'js']"));

// console.log(document.body.childNodes[1])
// console.log(document.body.children[0])
// console.log(document.body.firstElementChild)

// 2nd Task
// myImages = document.getElementsByTagName("img");
// for (let i = 0; i < myImages.length; i++) {
//     myImages[i].setAttribute("src", "img.png");
//     myImages[i].setAttribute("alt", "Elzero Logo");
// }

// 3rd Task
//<input type="number" name="dollar" placeholder="USD Dollar" />
//<div class="result">{<span id="dollar">0</span>} USD Dollar = {<span id="pound">0</span>} Egyptian Pound</div>

// input = document.getElementsByTagName("input")[0];
// input.addEventListener("input", function () {
// 	dollar = input.value;
// 	pound = dollar / 15.6;
// 	document.getElementById("dollar").innerHTML = dollar;
// 	document.getElementById("pound").innerHTML = pound.toFixed(2);
// });

// 4th Task
// //<div class="one" title="two">Two</div>
// //<div class="two" title="one">One</div>

// att = document.body.firstElementChild.getAttributeNames()
// attLength=att.length;
// att=att.pop();
// divOne = document.getElementsByClassName("one")[attLength-attLength];
// divTwo = document.getElementsByClassName("two")[attLength-attLength];

// tilteTwo = divOne.getAttribute(att)
// textTwo = divOne.innerHTML;
// divOne.innerHTML = divTwo.innerHTML;
// divTwo.innerHTML = textTwo + " " + attLength;

// divOne.setAttribute(att,divTwo.getAttribute(att));
// divTwo.setAttribute(att,tilteTwo)

// //<div class="one" title="one">One</div>
// //<div class="two" title="two">Two 2</div>

// 5th Task
// // <img decoding="async" src="#" alt="One" />
// // <img decoding="async" src="#" />
// // <img decoding="async" src="#" alt="Three" />
// // <img decoding="async" src="#" />
// // <img decoding="async" src="#" />

// myImgs=document.getElementsByTagName("img")
// for (let i = 0; i < myImgs.length; i++) {
//     if(myImgs[i].hasAttribute("alt")){
//         myImgs[i].setAttribute("alt","Old")
//     }else{
//         myImgs[i].setAttribute("alt","Elzero New")
//     }
// }

// 6th Task
//<form action="">
//	<input
//		type="number"
//		name="elements"
//		class="input"
//		placeholder="Number Of Elements"
//	/>
//	<input type="text" name="texts" class="input" placeholder="Elements Text" />
//	<select name="type" class="input">
//		<option value="Div">Div</option>
//		<option value="Section">Section</option>
//	</select>
//	<input type="submit" name="create" value="Create" />
//	<div class="results"></div>
//</form>

document.forms[0].onsubmit = function (event) {
	event.preventDefault();
	let result = document.getElementsByClassName("results")[0];
	result.innerHTML = "";
	result.style.cssText =
		"display:flex;justify-content: space-between;flex-wrap: wrap; margin-top: 20px;";
	let elementNums = document.querySelector("[name = 'elements']").value;
	let textElement = document.querySelector("[name = 'texts']").value;
	let typeElement = document.querySelector("[name= 'type']").value;
	typeElement = typeElement.toLowerCase();
	for (let i = 0; i < elementNums; i++) {
		result.innerHTML += `<${typeElement} class="box" title="Element" id="id-${i+1}">${textElement}</${typeElement}>`;
	}
};