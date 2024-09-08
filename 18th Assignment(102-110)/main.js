// 1st Task
// let interval = prompt(`Print Number From – To`);
// let nums;
// if (interval === "") {
//     nums = ["10", "15"];
// }
// else {
//     nums = interval.split("-");
// }
// let min = Math.min(nums[0], nums[1]);
// let max = Math.max(nums[0], nums[1]);
// for (let i = min; i <= max; i++) {
//     console.log(i);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2nd Task
// window.setTimeout(function () {
//     // div
//     let mainDiv = document.createElement("div");
//     mainDiv.style.cssText = "width: 300px; background-color: #eee;border: 1px solid #777; text-align: center; margin: 100px auto; padding: 30px; position: relative;";
//     // heading 1
//     let heading = document.createElement("h1");
//     heading.innerHTML = "Welcome";
//     mainDiv.appendChild(heading);
//     // paragraph
//     let para = document.createElement("p");
//     para.innerHTML = "Welcome To Elzero Web School";
//     mainDiv.appendChild(para);
//     // button
//     let btn = document.createElement("button");
//     btn.innerHTML = "X";
//     btn.style.cssText ="position: absolute; top: -20px; right: -20px; background-color: red; width: 40px; height: 40px; color: white; border: none; border-radius: 50%; cursor: pointer;"
//     mainDiv.appendChild(btn);
//     // event on button
//     btn.onclick = function () {
//         mainDiv.remove();
//     }
//     document.body.appendChild(mainDiv);
// }, 5000)
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3rd Task
// let div = document.createElement("div");
// div.innerHTML = "10";
// let counter = window.setInterval(function () {
//     div.innerHTML -= 1;
//     if (div.innerHTML === "0") {
//         window.clearInterval(counter);
//     }
// },1000)
// document.body.appendChild(div);
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 4th Task
// let div = document.createElement("div");
// div.innerHTML = "5";
// let counter = window.setInterval(function () {
    //     div.innerHTML -= 1;
    //     if (div.innerHTML === "0") {
                // window.location.assign("https://elzero.org");
        //     }
        // }, 1000)
// document.body.appendChild(div);
////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5th Task
let div = document.createElement("div");
div.innerHTML = "10";
let counter = window.setInterval(function () {
    div.innerHTML -= 1;
    if (div.innerHTML === "5") {
        window.open("https://elzero.org", "_blank", "width = 400, height = 400, left = 300, top = 100")
    }
    if (div.innerHTML === "0") {
        window.clearInterval(counter)
    }
}, 1000)
document.body.appendChild(div);