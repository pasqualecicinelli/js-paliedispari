// funzione reverse

function getReverse(value) {

    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {

        reverse += value[i];

    }
    return reverse
}

const userWorld = prompt('Inserisci una parola: ');

let reverse = getReverse(userWorld);


console.log(reverse)

// paragone parole

if (reverse == userWorld) {

    console.log('le parole sono palindrome ');
    console.log('utente ' + userWorld + ' palindroma ' + reverse);
} else {
    console.log('La parola non è palindroma');
}


