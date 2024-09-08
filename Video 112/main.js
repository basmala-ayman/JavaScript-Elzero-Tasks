//<ul>
//    <li class="active" data-color="red"></li>
//    <li data-color="green"></li>
//    <li data-color="blue"></li>
//    <li data-color="black"></li>
//</ul>
//<div class="experiment"></div>

let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
    div.style.backgroundColor = window.localStorage.getItem("color");
    document.querySelector("ul li.active").classList.remove('active');
    document.querySelector(`[data-color = ${window.localStorage.getItem("color")}]`).classList.add("active");

}

lis.forEach((li) => {
    li.addEventListener('click', function (e) {
        document.querySelector("ul li.active").classList.remove('active');
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        div.style.backgroundColor = e.currentTarget.dataset.color;
    })
})