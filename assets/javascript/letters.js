function activateClick() {

	this.innerHTML = "*";
	gameplay(this.getAttribute("id"));

};


function generateLetterArea() {
	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü", "ß"];
	
	for (var i = 0; i < letters.length; i++) {

		var newDiv = document.createElement('div');
		newDiv.innerHTML = letters[i];

		newDiv.className = "letters-style";
		newDiv.setAttribute("id", letters[i]);
		newDiv.onclick = activateClick;

		document.getElementById("letters-area").appendChild(newDiv);

	};

};



