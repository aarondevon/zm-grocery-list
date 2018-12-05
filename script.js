var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("#list");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addRemoveButton(li);
	list.appendChild(li);
	input.value = "";
}

function addRemoveButton(li) {
	var remove = document.createElement("button");
	remove.className = "remove";
	remove.textContent = "Remove";
	li.appendChild(remove);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// use event bubbling to add done class
function toggleDoneClass(event) {
	if (event.target.tagName === 'LI') {
		if (event.target.classList.contains("done")) {
			event.target.classList.remove('done');
		} else {
			event.target.classList.add('done');
		}
	}
}

// remove list item
function removeListItem(event) {
	if (event.target.classList.contains('remove')) {
		let li = event.target.parentNode;
		let ul = li.parentNode;
		ul.removeChild(li);
	}
}

for (let i = 0; i < li.length; i++) {
	addRemoveButton(li[i]);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener("click", toggleDoneClass);

list.addEventListener("click", removeListItem);