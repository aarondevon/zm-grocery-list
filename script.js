var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
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

// loop through li to add done class
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', function() {
		if (li[i].classList.contains("done")) {
			li[i].classList.remove('done');
		} else {
			li[i].classList.add('done');
		}
	})
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);