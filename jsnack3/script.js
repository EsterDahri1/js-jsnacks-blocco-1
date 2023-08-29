console.log('testing hello');

/* #snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

//enunciate how many times would you like to ask the user to insert a number
const howManyTimes = 10;
console.log(howManyTimes);

//build an array
const numberList =[];

//create a loop with for
for(let i = 0; i < howManyTimes; i++){
    //add a prompt with the question 
    const userNumbers = (Number(prompt('Insert a number'))); 
    console.log(userNumbers);

    //add answers in an array
    numberList.push(userNumbers);
    console.log(numberList);
};

//sum the inserted numbers 
// create a variable for the sum and initialize it
let sum = 0;

// calculate sum using forEach() method
numberList.forEach(num => {
    sum += num;
});

console.log(sum);

//print on page the result
document.querySelector('.result').innerHTML = `Result: ${sum}`;