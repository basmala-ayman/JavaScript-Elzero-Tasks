// 2nd Task
// let req = new XMLHttpRequest();
// req.open("GET", "./articles.json");
// console.log(req)
// req.onreadystatechange = function () {
//     // console.log(req.readyState);
//     // console.log(req.status);
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText)
//         console.log("Data Loaded");
//     }
// }
// req.send();
/////////////////////////////////////////////////////////////////////////////////
// 3nd Task
// let req = new XMLHttpRequest();
// req.open("GET", "./articles.json");
// console.log(req)
// req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let mainData = JSON.parse(this.responseText);
//         for (let i = 0; i < mainData.length; i++) {
//             mainData[i].section = "All";
//         }
//         for (let i = 0; i < mainData.length; i++) {
//             // for (let [key, value] of Object.entries(mainData[i])) {
//             //     console.log(`${key}: ${value}`);
//             // }
//             console.log(mainData[i])
//         }
//         let updatedData = JSON.stringify(mainData);
//         console.log(updatedData)
//     }
// }
// req.send();
////////////////////////////////////////////////////////////////////////////////////
// 4th Task
let req = new XMLHttpRequest();
req.open("GET", "./articles.json");
console.log(req)
req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        let mainDiv = document.createElement("div");
        mainDiv.id = "data";
        for (let i = 0; i < mainData.length; i++) {
            let childDiv = document.createElement("div");

            let h2 = document.createElement("h2");
            h2.innerHTML = mainData[i]["title"];
            childDiv.appendChild(h2)
            let p1 = document.createElement("p");
            p1.innerHTML = mainData[i]["content"]
            childDiv.appendChild(p1)
            
            let p2 = document.createElement("p");
            p2.innerHTML = mainData[i]["name"]
            childDiv.appendChild(p2)
            
            let p3 = document.createElement("p");
            p3.innerHTML = mainData[i]["section"]
            childDiv.appendChild(p3)
            
            mainDiv.appendChild(childDiv);
        }
        document.body.appendChild(mainDiv);
    }
}
req.send();
////////////////////////////////////////////////////////////////////////////////////