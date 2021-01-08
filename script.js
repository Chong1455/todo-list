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
	var btn = document.createElement("i");
	btn.className = "delete fas fa-trash-alt box";
	// btn.onclick = removeParent;
	btn.addEventListener("click", removeParent);

	var li = document.createElement("li");
	li.appendChild(btn);
	li.appendChild(document.createTextNode(input.value));
	
	ul.appendChild(li);
	input.value = "";
}	

function addListAfterKeypress(event) {
	if (inputlength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", strikeThrough);