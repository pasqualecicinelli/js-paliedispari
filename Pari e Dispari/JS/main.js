const choose = prompt('Scegli: Pari o Dispari?');
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

//funzione random

function getRandom(min = 1, max = 5, lastIncluded = true) {

    if (lastIncluded) max++;

    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
}


const randomComputer = getRandom();

console.log(userNumber);
console.log(randomComputer);

// funzione somma

function getSomma(firstNumber, secondNumber) {

    let somma = firstNumber + secondNumber;
    return somma;
}

const resultSomma = getSomma(userNumber, randomComputer);
console.log(resultSomma);

if (resultSomma % 2 == 0) {

    if (choose.toUpperCase() == 'PARI') {
        console.log('Vince l\'utente' + choose)
    } else {
        console.log('Vince il Computer' + choose)

    }

} else {
    if (choose.toUpperCase() == 'DISPARI') {
        console.log('Vince l\'utente' + choose)
    } else {
        console.log('Vince il Computer' + choose)

    }

}

//fare una funzione per il pari e dispari







