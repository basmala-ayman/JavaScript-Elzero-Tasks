let fName = document.getElementById("fName")
let sName = document.getElementById("sName")
let email = document.getElementById("email")
let inputs = document.querySelectorAll("input");
let select = document.getElementsByTagName("select")[0];

// set first name
if (sessionStorage.getItem("fName")) {
    fName.value = sessionStorage.getItem("fName");
}
// set second name
if (sessionStorage.getItem("sName")) {
    sName.value = sessionStorage.getItem("sName");
}
// set email
if (sessionStorage.getItem("email")) {
    email.value = sessionStorage.getItem("email");
}
// set country
if (sessionStorage.getItem("country")) {
    select.value = sessionStorage.getItem("country");
    // remove selected Attr.
    document.querySelectorAll("select option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Attr.
    document.querySelectorAll("select option").forEach(function (op) {
        if (sessionStorage.getItem("country") === op.val) {
            op.selected = true;
        }
    })
}

inputs.forEach(function (input) {
    input.oninput = function () {
        let val = input.value;
        console.log(val);
        console.log(input.id);
        if (input.id === "fName") {
            window.sessionStorage.setItem("fName", val);
        } else if (input.id === "sName") {
            window.sessionStorage.setItem("sName", val);
        } else if (input.id === "email") {
            window.sessionStorage.setItem("email", val);
        }
    }
})

select.onchange = function () {
    let val = this.value;
    sessionStorage.setItem("country", val);
    // remove selected Attr.
    document.querySelectorAll("select option").forEach(function (op) {
        op.removeAttribute("selected");
    })
    // add selected Attr.
    document.querySelectorAll("select option").forEach(function (op) {
        if (val === op.val) {
            op.selected = true;
        }
    })
}

