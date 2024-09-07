//<div class="our-element">Our Element</div>
//<p>Paragraph</p>

//<div class="start" title="Start Element" data-value="Start">Start</div>
//<div class="our-element">Our Element</div>
//<div class="end" title="End Element" data-value="End">End</div>

document.querySelector("p").remove();

let ourDiv = document.getElementsByClassName("our-element")[0];

let start = document.createElement("div")
start.className = "start";
start.setAttribute("title", "Start Element")
start.setAttribute("data-value", "Start")
start.innerHTML = "Start";
ourDiv.before(start)

let end = document.createElement("div");
end.className = "end";
end.setAttribute("title", "End Element")
end.setAttribute("data-value", "End");
end.innerHTML = "End";
ourDiv.after(end)