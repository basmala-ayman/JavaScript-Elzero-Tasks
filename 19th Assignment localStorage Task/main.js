if (window.localStorage.getItem("fontFamily")) {
    document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
    // remove selected Att.
    document.querySelectorAll("#fonts option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Att.
    document.querySelectorAll("#fonts option").forEach(function (op) {
        if (localStorage.getItem("fontFamily").split(",")[0].toLowerCase() == op.value) {
            op.selected = true;
            // op.setAttribute("selected", "selected")
        }
    })
}
if (window.localStorage.getItem("color")) {
    document.body.style.color = localStorage.getItem("color")
    // remove selected Att.
    document.querySelectorAll("#colors option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Att.
    document.querySelectorAll("#colors option").forEach(function (op) {
        if (localStorage.getItem("color") == op.value) {
            op.selected = true;
            // op.setAttribute("selected", "selected")
        }
    })
}
if (window.localStorage.getItem("fontSize")) {
    document.body.style.fontSize = `${localStorage.getItem("fontSize")}px`
    // remove selected Att.
    document.querySelectorAll("#fontSize option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Att.
    document.querySelectorAll("#fontSize option").forEach(function (op) {
        if (localStorage.getItem("fontSize") == op.value) {
            op.selected = true;
            // op.setAttribute("selected", "selected")
        }
    })
}
// font family
document.getElementById("fonts").onchange = function () {
    // set font-family
    this.value === "cairo" ? document.body.style.fontFamily = `"Cairo", sans-serif`
        : this.value === "roboto" ? document.body.style.fontFamily = `"Roboto", sans-serif`
            : document.body.style.fontFamily = `"Open Sans", sans-serif`;

    localStorage.setItem("fontFamily", window.getComputedStyle(document.body).getPropertyValue("font-family"));
    // remove selected Att.
    document.querySelectorAll("#fonts option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Att.
    document.querySelectorAll("#fonts option").forEach(function (op) {
        if (this.value == op.value) {
            op.selected = true;
            // op.setAttribute("selected","selected")
        }
    })
}
// color
document.getElementById("colors").onchange = function () {
    let color = this.value
    // set color
    document.body.style.color = color;
    localStorage.setItem("color", color);
    // remove selected Att.
    document.querySelectorAll("#colors option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Att.
    document.querySelectorAll("#colors option").forEach(function (op) {
        if (localStorage.getItem("color") == op.value) {
            op.selected = true;
            // op.setAttribute("selected", "selected")
        }
    })
}
// font size
document.getElementById("fontSize").onchange = function () {
    let fontSize = this.value
    // set font-size
    document.body.style.fontSize = `${fontSize}px`
    localStorage.setItem("fontSize", fontSize);
    // remove selected Att.
    document.querySelectorAll("#fontSize option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Att.
    document.querySelectorAll("#fontSize option").forEach(function (op) {
        if (localStorage.getItem("fontSize") == op.value) {
            op.selected = true;
            // op.setAttribute("selected", "selected")
        }
    })
}