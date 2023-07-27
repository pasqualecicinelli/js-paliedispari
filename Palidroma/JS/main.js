const userWorld = prompt('Inserisci una parola: ');


//function getPalindroma()



for (let i = userWorld.length; i >= 0; i--) {
    let reverse = '';
    reverse += userWorld[i];

    console.log(reverse);
}
console.log(userWorld);
