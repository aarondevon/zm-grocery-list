var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value = "";
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
list.addEventListener('click', function(event){
	if (event.target.tagName === 'LI') {
		if (event.target.classList.contains("done")) {
			event.target.classList.remove('done');
		} else {
			event.target.classList.add('done');
		}
	}
});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);