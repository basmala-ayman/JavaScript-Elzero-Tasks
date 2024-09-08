// body style
document.body.style.cssText = "margin: 0; padding:0; background-color: #eee"

// header
let header = document.createElement("div")
header.className = "header";
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 0 15px;"

// logo
let logo = document.createElement("img")
logo.className = "logo";
logo.src = "img.png";
logo.alt = "Logo";
logo.style.height = "60px";
header.appendChild(logo);

// links ul
let links = document.createElement("ul");
links.className = "menu";
links.style.cssText = "display:flex; justify-content: end; list-style:none;"
// li
let menuLinks = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < menuLinks.length; i++) {
    let li = document.createElement("li");
    li.className = "link";
    li.innerHTML = menuLinks[i];
    li.style.cssText = "margin-right: 10px";
    links.appendChild(li)
}
header.appendChild(links)



document.body.appendChild(header)