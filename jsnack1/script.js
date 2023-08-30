//console.log('hello!');

/* #Snack 1

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/* Tools:
- prompt 1
- prompt 2
- log
- if/else
*/


//ask user the first number
const firstNumber = Number(prompt('Insert a number of your choice'));

//ask user the second number
const secondNumber = Number(prompt('Insert another number of your choice different from the first one'));

console.log(firstNumber, secondNumber);

//if a > b print a 
if (firstNumber > secondNumber){
    console.log(firstNumber);
    document.querySelector('.bigger_number').innerHTML = firstNumber;
} else { //else print b
    console.log(secondNumber);
    document.querySelector('.bigger_number').innerHTML = secondNumber;
}


/*BONUS con while loop
let i = 0;

const userNumbers = [];

while ( i < 2) {
    const element = [i];
    //console.log(element);
    const userNumber = Number(prompt('Insert a number of your choice'));
    //console.log(userNumber);
    userNumbers.push = (userNumber);

    i++
}
*/
