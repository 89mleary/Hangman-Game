var words_list = ["HUND", "KATZE", "VOGEL", "PFERD", "FISCH", "TIGER", "BÄR", "FUCHS", "SCHLANGE", "WOLF", "HAND", "FUß", "KOPF", "NASE", "AUGE", "MUND", "ARM", "BEIN", "SCHULTER", "OHR", "SCHWEIN", "KUH", "GRÜN", "ROT", "BRAUN", "SCHWARZ", "GELB", "BLAU", "ORANGE", "MORGEN", "NACHT", "ABEND", "AUTO", "RAD", "BUS", "ZUG", "BAHN", "STUHL", "SOFA", "BUCH", "COMPUTER", "HANDY", "KULI", "TISCH", "HAUS", "DEUTSCH", "HEFT", "REGAL", "MUSIK", "KLAVIER", "BAUM", "STRAUCH", "GROß", "KLEIN", "FREUNDLICH", "ALT", "NEW", "JUNG", "FROH", "WÜTEND", "HOSE", "HEMD", "KLEID"];


function clearGameboard() {

	for (var i = 0; i < word_at_play_length; i++) {
		document.getElementById("guess" + i).remove();
	};

	num_wrong_letter_guessed = 0;
	document.getElementById("remaining-guesses-num").innerHTML = 10;
	getWord(words_list);

};


function resetLetterArea() {

	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü", "ß"];
	
	for (var i = 0; i < letters.length; i++) {
		document.getElementById(letters[i]).remove();
	};

	generateLetterArea();

};






