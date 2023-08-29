console.log('testing hello');

/* #snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

//enunciate how many times would you like to ask the user to insert a number
const howManyTimes = 10;
console.log(howManyTimes);

//create a loop with for
for(let i = 0; i < howManyTimes; i++){
    const userAnswers = Number(prompt('Insert a number'));
    console.log(userAnswers);
}
//add a prompt with the question 

//sum the inserted numbers 

//print on page the result