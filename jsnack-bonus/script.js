/*
Snack Bonus
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/* #Tools
- array vuoto
- for 
- if
*/

//creo array vuoto
const oddNumbers =[]

//for loop
for(let i = 0; i < 6; i++){
    let userNumber = Number(prompt('Insert a number'));
    console.log(userNumber);

    //if dispari inserisco nell'array
    if(userNumber % 2 != 0){
        console.log('dispari');
        oddNumbers.push(userNumber);
        console.log(oddNumbers, 'Odd numbers');
    }
}


