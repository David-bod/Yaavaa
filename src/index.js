let last = [];
let tab_possibilities = "";
const option_number = "0123456789";
const mini_letter = "abcdefghijklmnopqrstuvwxyz";
const max_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "&()-_)=#/*+$%!?;.,:";
allow_key = document.getElementById('allow');
display_key = document.getElementById('random_key');
display_key.textContent = "Cliquez sur Générer un mot de passe";
history_style = document.getElementById('history');
history_style.style.display = 'none';
//-------------------------------

numberAllow(); miniAllow(); maxAllow();

function numberAllow() {
    if (dom_number = document.getElementById('number').checked) {
        if (tab_possibilities.indexOf(option_number) != -1) {
            tab_possibilities.replace(option_number, '');
            tab_possibilities = tab_possibilities + option_number;
            allow_key.textContent = tab_possibilities;
        } else {
            tab_possibilities = tab_possibilities + option_number;
            allow_key.textContent = tab_possibilities;
        }
    } else {
            tab_possibilities = tab_possibilities.replace(option_number, '');
            allow_key.textContent = tab_possibilities;
        }
}

function miniAllow() {
    if (dom_minil = document.getElementById('mini_letter').checked) {
        if (tab_possibilities.indexOf(mini_letter) != -1) {
            tab_possibilities.replace(mini_letter, '');
            tab_possibilities = tab_possibilities + mini_letter;
            allow_key.textContent = tab_possibilities;
        } else {
            tab_possibilities = tab_possibilities + mini_letter;
            allow_key.textContent = tab_possibilities;
        }
    } else {
        if (tab_possibilities.indexOf(mini_letter) != -1) {
            tab_possibilities = tab_possibilities.replace(mini_letter, '');
            allow_key.textContent = tab_possibilities;
        }
    }
}

function maxAllow() {
    if (dom_maxl = document.getElementById('max_letter').checked) {
        if (tab_possibilities.indexOf(max_letter) != -1) {
            tab_possibilities.replace(max_letter, '');
            tab_possibilities = tab_possibilities + max_letter;
            allow_key.textContent = tab_possibilities;
        } else {
            tab_possibilities = tab_possibilities + max_letter;
            allow_key.textContent = tab_possibilities;
        }
    } else {
        if (tab_possibilities.indexOf(max_letter) != -1) {
            tab_possibilities = tab_possibilities.replace(max_letter, '');
            allow_key.textContent = tab_possibilities;
        }
    }
}

function specialAllow() {
    if (dom_special = document.getElementById('special').checked) {
        if (tab_possibilities.indexOf(special) != -1) {
            tab_possibilities.replace(special, '');
            tab_possibilities = tab_possibilities + special;
            allow_key.textContent = tab_possibilities;
        } else {
            tab_possibilities = tab_possibilities + special;
            allow_key.textContent = tab_possibilities;
        }
    } else {
        if (tab_possibilities.indexOf(special) != -1) {
            tab_possibilities = tab_possibilities.replace(special, '');
            allow_key.textContent = tab_possibilities;
        }
    }
}

// END CHECKBOX
function createRandomNumber() {
    let t = "";
    //-------------------------------
    number = document.getElementById('number_key').value;
    display_key = document.getElementById('random_key');

    if (document.getElementById('number_key').value < 1) {
        display_key.textContent = "Choisissez un nombre > 0";
    }

    for (let i = 0; i < number; i++) {
        t += tab_possibilities.charAt(Math.floor(Math.random() * tab_possibilities.length));
        if (i == number - 1) {
            display_key.textContent = t;
            last.push(t);

            history_key = document.querySelectorAll('.last_number')[0];
            history_key.textContent = last;
            history_style = document.getElementById('history');
            history_style.style.display = 'block';
        }
    }

    if (number == 0) {
        display_key.textContent = "Choisissez un nombre > 0"
    }
}

function clearNumber() {
    number = document.getElementById('number_key');
    number.value = 0;
    display_key = document.getElementById('random_key');
    display_key.textContent = "Choisissez un nombre > 0"
    createRandomNumber();
}

function clearArray() {
    last = [];
    history_key = document.querySelectorAll('.last_number')[0];
    history_key.textContent = last;

    history_style = document.getElementById('history');
    history_style.style.display = 'none';
}

function copy() {

    let content = document.getElementById('random_key').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log('Copié !');
    })
        .catch(() => {
        console.log('Erreur :/');
    })

    alert("Mot de passe copié !");
}