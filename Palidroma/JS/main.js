const userWorld = prompt('Inserisci una parola: ');

function getReverse(value = '') {

    for (let i = value.length; i > 0; value.length--) {
        let reverse = '';
        reverse += value[i];
        return reverse
    }

}

let reverse2 = getReverse(userWorld);


console.log(reverse2)

/*

for (let i = userWorld.length; i >= 0; i--) {
    let reverse = '';
    reverse += userWorld[i];

    console.log(reverse);
}
console.log(userWorld);*/

/*for (i = 0; i < reverse.length; i++){

    if (reverse[i] == userWorld[i]) {
        
        console.log('le parole sono palindrome');
        console.log('utente ' userWorld + 'palindroma ' + reverse);
    }
}*/

