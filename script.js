var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function creatListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        creatListElement();
    }
}

function addListAfterKeydown(Event) {
    if (inputLength() > 0 && Event.key === "Enter"){
        creatListElement();
    }
}

//callback function
button.addEventListener("click", addListAfterClick)
input.addEventListener("keydown", addListAfterKeydown)
