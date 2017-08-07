function getWord(activeArray) {

	randomNum = Math.floor(Math.random() * activeArray.length);
	
	word_at_play = activeArray[randomNum];
	word_at_play_length = word_at_play.length;
	num_correct_letters_guessed = 0;
	generateGameBoard(word_at_play);

};


function generateGameBoard(word) {

	for (var i = 0; i < word.length; i++) {

		var newDiv = document.createElement('div');
		newDiv.innerHTML = "_";

		newDiv.className = "guess-style";
		newDiv.setAttribute("id", "guess"+ i);

		document.getElementById("gameboard").appendChild(newDiv);

	};

};


function updateGameboard(letterClicked) {

	for (var i = 0; i < word_at_play_length; i++) {

		if (letterClicked === word_at_play[i]) {

			var divToUpdate = document.getElementById("guess" + i);
			divToUpdate.innerHTML = letterClicked;

			// double letter function

		};

	};

};


function gameWon() {

	games_won += 1;

	document.getElementById("win-lose-alert").innerHTML = "GEWONNEN";
	document.getElementById("win-lose-alert").style["text-shadow"] = "0px 0px 1px rgba(12, 198, 93,1)";
	document.getElementById("win-lose-alert").style["color"] = "#0cc65d";
	
	setTimeout(function() {
		document.getElementById("win-lose-alert").innerHTML = "";
		document.getElementById("gewonnen-num").innerHTML = games_won;
		clearGameboard();
		document.getElementById("hm-pic").src="assets/images/hangman-0.gif";
		resetLetterArea();
	}, 3000);

};


function gameLost() {

	games_lost += 1;

	document.getElementById("win-lose-alert").innerHTML = "VERLOREN" + "<br>" + "\"" + word_at_play + "\"";
	document.getElementById("win-lose-alert").style["text-shadow"] = "0px 0px 1px rgba(198, 13, 13,1)";
	document.getElementById("win-lose-alert").style["color"] = "#c60d0d";
	
	setTimeout(function() {
		document.getElementById("win-lose-alert").innerHTML = "";
		document.getElementById("verloren-num").innerHTML = games_lost;
		clearGameboard();
		document.getElementById("hm-pic").src="assets/images/hangman-0.gif";
		resetLetterArea();
	}, 3000);

};



function gameplay(letterClicked) {

	// Correct guess
	if (word_at_play.includes(letterClicked)) {
		
		updateGameboard(letterClicked);
		num_correct_letters_guessed += 1;

		if (num_correct_letters_guessed === word_at_play_length) {
			gameWon();
		};

	};

	// Wrong guess
	if (word_at_play.includes(letterClicked) === false) {
		num_wrong_letter_guessed += 1;

		if (num_wrong_letter_guessed === 10) {
			document.getElementById("remaining-guesses-num").innerHTML = 10-num_wrong_letter_guessed;
			gameLost();
		};

		if (num_wrong_letter_guessed < 10) {
			var newPic = "assets/images/hangman-" + num_wrong_letter_guessed + ".gif";
			document.getElementById("hm-pic").src=newPic;
			document.getElementById("remaining-guesses-num").innerHTML = 10-num_wrong_letter_guessed;
		};

	};

};