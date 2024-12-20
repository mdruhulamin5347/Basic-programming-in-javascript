var myVar = document.getElementById("heading");

myVar.addEventListener("mouseover",function(){
    myVar.classList.add("heading-style");
});
myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("heading-style");
});