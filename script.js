var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delbutton = document.querySelectorAll(".delete");
var reset = document.querySelector(".reset");

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

function toggleListItem(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("done");
    }
}

function deleteListElement() {
    var items = document.querySelectorAll(".li-wrapper");
    for (var ind = 0; ind < items.length; ind++) {
        this.parentNode.remove();
    }
}

function deleteListAfterClick() {
    for (var i = 0; i < delbutton.length; i++) {
        delbutton[i].addEventListener("click", deleteListElement);
    }
}

function deleteAllList() {
    ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeydown);
ul.addEventListener("click", toggleListItem);
reset.addEventListener("click", deleteAllList);

deleteListAfterClick();
