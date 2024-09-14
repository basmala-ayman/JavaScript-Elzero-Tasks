// 1st Task
// const getData = function (apiLink) {
//     return new Promise((resolve, reject) => {
//         let data = new XMLHttpRequest();
//         data.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText));
//             } else {
//                 reject(Error("No Data FOUND!!"));
//             }
//         };
//         data.open("GET", apiLink);
//         data.send();
//     })
// }
// getData("./data.json")
//     .then((result) => {
//         result.length = 5;
//         return result;
//     }).then((result) => {
//         for (let i = 0; i < result.length; i++) {
//             let div = document.createElement("div");
//             let h3 = document.createElement("h3")
//             h3.innerHTML = result[i].title;
//             div.appendChild(h3);
//             let p = document.createElement("p")
//             p.innerHTML = result[i].description;
//             div.appendChild(p);
//             document.body.appendChild(div);
//         }
//     }).catch((rej) => console.log(rej))
//////////////////////////////////////////////////////////////////////////////////////

// 2nd Task
// fetch("./data.json").then((result) => {
//     let myData = result.json();
//     return myData;
// }).then((result) => {
//     result.length = 5;
//     return result;
// }).then((result) => {
//     for (let i = 0; i < result.length; i++) {
//         let div = document.createElement("div");
//         let h3 = document.createElement("h3")
//         h3.innerHTML = result[i].title;
//         div.appendChild(h3);
//         let p = document.createElement("p")
//         p.innerHTML = result[i].description;
//         div.appendChild(p);
//         document.body.appendChild(div);
//     }
// })
//////////////////////////////////////////////////////////////////////////////////////