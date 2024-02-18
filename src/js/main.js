var hambuger = document.getElementById("hambuger");
var links = document.getElementById("links");

hambuger.addEventListener("click", () => {
  links.classList.toggle("active");
});

//1. Select the hambuger icon
//2. select the links container
//3. Add click event to hambuger
//4. Onclick of the hambuger toggle the class of active on the links container
