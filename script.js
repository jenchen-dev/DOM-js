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
    var newbutton = document.createElement("button");
    newbutton.appendChild(document.createTextNode("Del"));
    newbutton.classList.add("delete");
    li.appendChild(newbutton);
    li.appendChild(document.createTextNode(" " + input.value));
    li.classList.add("li-wrapper");
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

function deleteListElement(element) {
    if (element.target.className === "delete"){
        element.target.parentElement.remove();
    }
}

function deleteAllList() {
    ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeydown);
ul.addEventListener("click", toggleListItem);
ul.addEventListener("click", deleteListElement);
reset.addEventListener("click", deleteAllList);
