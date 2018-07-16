const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
missed++;

const phrases = ['Iron Man', 'The Hulk', 'Black Widdow', 'Dr Strange', 'Thanos'];
const getRandomPhrase = (a) => {
	let randomPhrase = a[Math.floor(Math.random() * phrases.length)];
	return randomPhrase.split("");
};
const addPhraseToDisplay = (a) => {
	var i = 0;
	const letters = a;
	const letter = letters[i];
	const ul = document.querySelector('ul');
	for (i = 0; i < letters.length; i++) {
		const li = document.createElement('li');
		const liLetter = li.appendChild(document.createTextNode(letters[i]));
		if (li.textContent === " ") {
			li.className += "";
		} else {
			li.className += "letter";
		}
		ul.appendChild(li);
	}
}
const checkLetter = (a) => {
	let letter = document.querySelectorAll('.letter');
	i = 0;
	checkedLetter = a;
	for (i = 0; i < letter.length; i++) {
		if (a === letter[i]) {
			letter[i].className += " show";
			console.log('Yay');
		}
	}
}

const phraseArray = getRandomPhrase(phrases);
addPhraseToDisplay(phraseArray);
checkLetter();