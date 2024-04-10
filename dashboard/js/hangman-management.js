let basePhrase = '';
let hangmanPhrase = '';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const currQuestionTypeRep = nodecg.Replicant('currQuestionType');
const currQuestionRep = nodecg.Replicant('currQuestion');
const hangmanQuestionRep = nodecg.Replicant('hangmanQuestion');

currQuestionTypeRep.on('change', (newValue) => {
    if (newValue == 'Hangman') {
        document.getElementById('hangman-container').style.visibility = 'visible';
        document.getElementById('no-hangman').innerHTML = 'Revealed answer:';
    } else {
        document.getElementById('hangman-container').style.visibility = 'hidden';
        document.getElementById('no-hangman').innerHTML = 'Current question not of type Hangman.';
    }
});

currQuestionRep.on('change', (newValue) => {
    for (let i = 0; i < ALPHABET.length; i++) {
        document.getElementById(`guessbutton-${ALPHABET[i]}`).disabled = false;
    }

    basePhrase = newValue;

    hangmanPhrase = '';
    setupHangman(basePhrase);
});

// Set up hangman board whenever a question loads
function setupHangman(text)
{
    console.log(text);
    
    // Blank out hangman board
    for (let i = 0; i < text.length; i++) {
        if (isAlphaNumeric(text[i])) {
            hangmanPhrase += '_ ';
        } else {
            hangmanPhrase += `${text[i]} `;
        }
    }

    console.log(hangmanPhrase);
    hangmanQuestionRep.value = hangmanPhrase;
    
    document.getElementById('currQuestionText').innerHTML = hangmanPhrase;
}

// Handle guess button press
function guessLetter(char)
{
    // Disable character button
    document.getElementById(`guessbutton-${char}`).disabled = true;

    for (let i = 0; i < basePhrase.length; i++) {
        if (basePhrase[i].toUpperCase() == char) {
            hangmanPhrase = hangmanPhrase.substring(0, i * 2) + char + hangmanPhrase.substring(i * 2 + 1);
            document.getElementById('currQuestionText').innerHTML = hangmanPhrase;
            hangmanQuestionRep.value = hangmanPhrase;
        }
    }
}

// Library function for checking if string is alphanumeric
function isAlphaNumeric(str) {
    var code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
            return false;
        }
    }
    return true;
};