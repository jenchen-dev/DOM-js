let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let delbutton = document.querySelectorAll(".delete");
let reset = document.querySelector(".reset");

function inputLength() {
    return input.value.length;
}

function creatListElement() {
    let li = document.createElement("li");
    let newbutton = document.createElement("button");
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
