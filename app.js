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
	console.log(checkLetter(letterFound));
		if(checkLetter(letterFound)===null){missed++;}
	checkWin();
	
}

const checkWin = () => {
		let letterCheck = document.querySelectorAll('.letter').length;
		let letterCorrect = document.querySelectorAll('.show').length;
		if(letterCheck == letterCorrect){
			console.log("You Win!");
		}
		else if(missed >= 5){
			console.log("you Lose");
			
		}
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
	let letterCheck = document.querySelectorAll('.letter');
			while (i = 0; i < letterCheck.length; i++) {
				console.log(i);
				if (a === letterCheck[i].innerHTML) {
					letterCheck[i].className += " show";
					var letterMatch = letterCheck[i];
					return letterMatch;
					}
 				}

 	return null;


}

const phraseArray = getRandomPhrase(phrases);
addPhraseToDisplay(phraseArray);
console.log(phraseArray);
