var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if(element.matches("div")) {
    var state = element.getAttribute("data-state");
    var number = element.getAttribute("data-number");
    if(state === "hidden") {
      element.dataset.state = "revealed";
      element.setAttribute("data-state", "revealed");
      element.textContent = number;
      
    } else {
      element.dataset.state = "hidden";
      element.setAttribute("data-state", "hidden");
      element.textContent = ""
    }
  }
});
