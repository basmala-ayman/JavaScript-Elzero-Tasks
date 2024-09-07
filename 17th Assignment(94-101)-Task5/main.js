document.addEventListener("click", function (event) {
    let tagElement = event.target.tagName;
    console.log(`This Is ${tagElement}`)
})