var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");

//click on a list item and it strikethroughs the text
function strikeThrough(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

//remove items
for (var i=0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", removeParent);
}

function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent);
	evt.target.parentNode.remove();
}

// add items
function inputlength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.className = "btn btn-danger";
	btn.innerHTML = "Delete";
	// btn.onclick = removeParent;
	btn.addEventListener("click", removeParent);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputlength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputlength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", strikeThrough);