const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const phrases = ['Iron Man', 'The Hulk', 'Black Widdow', 'Dr Strange', 'Thanos'];

const getRandomPhrase = (a) => {
	let randomPhrase = a[Math.floor(Math.random() * phrases.length)];
	let randomPhraseLower = randomPhrase.toLowerCase();
	return randomPhraseLower.split("");
};


keyboard.onclick = function(event){
	event.target.className += " chosen";
	let letterFound = event.target.innerHTML;
	checkLetter(letterFound);

}


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


//Check Letter
const checkLetter = (a) => {
	i = 0;
	let letterCheck = document.querySelectorAll('.letter');

		for (i = 0; i < letterCheck.length; i++) {
			if (a == letterCheck[i].innerHTML) {
				letterCheck[i].className += " show";
				console.log('Yay');
			}

			else{
				console.log('nope')
				return null;
				
			} 	
		}
}



const phraseArray = getRandomPhrase(phrases);
addPhraseToDisplay(phraseArray);
console.log(phraseArray);
