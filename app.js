const keyBoard = document.querySelector('#qwerty');
const scoreBoard = document.querySelectorAll('.tries');
const overLay = document.getElementById('overlay');
const ul = document.querySelector('ul');
let missed = 0;

const phrases = ['Iron Man', 'The Hulk', 'Black Widdow', 'Dr Strange', 'Thanos'];

//Randomly selects a random phrase. 
const getRandomPhrase = (a) => {
    let randomPhrase = a[Math.floor(Math.random() * phrases.length)];
    let randomPhraseLower = randomPhrase.toLowerCase();
    return randomPhraseLower.split("");
};

overLay.onclick = function(event){
    overLay.style.display = 'none';


}

    
//Click event for on screen keyboard - result is passed to checkLetter. 
keyBoard.onclick = function(event) {

    event.target.classList.add("chosen");
    event.target.disabled = 'true';
    let letterFound = event.target.innerHTML;
    checkLetter(letterFound);
    if (checkLetter(letterFound) === null) {
        missed++;
        removeHeart(missed - 1);
    }
    checkWin();
}

//Creates a list and inserts them into the DOM. 
const addPhraseToDisplay = (a) => {
    var i = 0;
    const letters = a;
    const letter = letters[i];
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


//Compares the input with the list of items on screen for matches. Result is returned. 
const checkLetter = (a) => {
    let letterCheck = document.querySelectorAll('.letter');
    let i = 0
    let letterMatch = null;
    for (i = 0; i < letterCheck.length; i++) {

        if (a === letterCheck[i].innerHTML) {
            letterCheck[i].classList.add("show");
            letterMatch = letterCheck[i];
        }

    }
    return letterMatch;
};

//Removes Heart for the scrore board if the player guesses wrong. 
const removeHeart = (i) => {
    scoreBoard[i].childNodes[0].src = "images/lostHeart.png";

};

//Checks to see the players current score and display win or lose. 
const checkWin = () => {
    //
    const letterCheck = document.querySelectorAll('.letter').length;
    const letterCorrect = document.querySelectorAll('.show').length;
    if (letterCheck == letterCorrect) {
        console.log("You Win!");
        resetGame('win');
    } else if (missed >= 5) {
        console.log("you Lose");
        resetGame('lose');
    }
}
const buttons = document.querySelectorAll('button')
// Resets game screen and keyboard
const resetGame = (e) => {
	overLay.className = e;
	overLay.childNodes[1].innerHTML = "You" + " " + e;
	overLay.childNodes[3].innerHTML = 'Play Again';
	overLay.style.display = 'flex';
	missed = 0;
	//Remove the letters from the game. 
	ul.innerHTML = " ";
	//Reset keyboard to enabled. 
	for (i = 0; i < buttons.length; i++) {	
		buttons[i].disabled = false;
		buttons[i].className -= 'chosen';
		const scoreBoard = document.querySelectorAll('.tries');
		}
	//Reset the Lives
	for (i = 0; i < scoreBoard.length; i++){
		scoreBoard[i].childNodes[0].src = "images/liveHeart.png"
		;
	}
	const phraseArray = getRandomPhrase(phrases);
	addPhraseToDisplay(phraseArray);
	console.log(phraseArray);

}

const phraseArray = getRandomPhrase(phrases);
addPhraseToDisplay(phraseArray);
console.log(phraseArray);