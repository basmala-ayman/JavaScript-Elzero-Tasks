let addClasses = document.getElementsByTagName("input")[0];
let removeClasses = document.getElementsByTagName("input")[1];
let myElement = removeClasses.nextElementSibling;
let result = myElement.nextElementSibling.lastElementChild;

function showClasses() {
	result.innerHTML = "";
	let classes = myElement.classList
	if (classes.length === 0) {
		result.innerHTML = "No Classes To Show";
		return;
	}
	let sortedClasses = Array.from(classes).sort();
	for (let i = 0; i < sortedClasses.length; i++) {
		result.innerHTML += sortedClasses[i] + " ";
	}
}
showClasses();
addClasses.addEventListener("blur", function () {
	if (this.value === "")
		return;
	let classes = this.value.split(" ");
	for (let i = 0; i < classes.length; i++) {
		myElement.classList.add(classes[i].toLowerCase());
	}
	this.value = "";
	showClasses()
});

removeClasses.addEventListener("blur", function () {
	if (this.value === "")
		return;
	let classes = this.value.split(" ");
	for (let i = 0; i < classes.length; i++) {
		myElement.classList.remove(classes[i].toLowerCase());
	}
	this.value = "";
	showClasses()
})