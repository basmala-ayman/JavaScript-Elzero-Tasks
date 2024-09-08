// body style
document.body.style.cssText = "margin: 0; padding:0; background-color: #eee"

// header
let header = document.createElement("div")
header.className = "header";
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 0 15px; background-color: white;"

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

// content
let content = document.createElement("div");
content.className = "content";
content.style.cssText="display:flex; justify-content: space-between; flex-wrap: wrap; padding: 20px"
// items
for (let i = 0; i < 15; i++) {
    let item = document.createElement("div");
    item.className = "item";
    let span = document.createElement("span");
    span.innerHTML = i + 1;
    span.style.cssText = "display:block; font-size: 25px;";
    item.appendChild(span);
    let p = document.createElement("p");
    p.innerHTML = "Product";
    p.style.cssText = "color:#777;margin:0;";
    item.appendChild(p);
    item.style.cssText="width: 31%; text-align: center; background-color: white; padding: 20px 0; margin-bottom: 15px"
    content.appendChild(item);
}
document.body.appendChild(content);
