console.log('hello!');

/* #Snack 2 
    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/* Tools:
- prompt 1
- prompt 2 
- if/else if/else
*/

//ask firt word
const firstWord = prompt('Insert a word of choice');

//ask second word
const secondWord = prompt('Insert a word of choice different from the first one');

console.log(firstWord, secondWord);

//if length 1 > length 2 print first length 1
if(firstWord.length > secondWord.length){
    document.querySelector('.more_letters').innerHTML = firstWord;
    document.querySelector('.less_letters').innerHTML = secondWord;
}else if(firstWord.length < secondWord.length){//else if length 1 < length 2 print first length 2
    document.querySelector('.less_letters').innerHTML = firstWord;
    document.querySelector('.more_letters').innerHTML = secondWord;
}else {//else Hanno la stessa lunghezza
    document.querySelector('.same_letters').innerHTML = 'They have the same number of letters'
}


/*BONUS snack 2 while loop
const userWords = [];

let i = 0;

while ( i < 2){
    const element = [i];
    //console.log(i);
    const userWord = prompt('Insert a word of your choice');
    //console.log(userWord);
    userWords.push = (userWord);
    



    i++
}

console.log(userWords);


    if (userWords[0].length > userWords[1].length) {
        document.querySelector('.more_letters').innerHTML = userWords[0];
        document.querySelector('.less_letters').innerHTML = userWords[1];
    } else if (userWords[0].length < userWords[1].length) {//else if length 1 < length 2 print first length 2
        document.querySelector('.less_letters').innerHTML = userWords[0];
        document.querySelector('.more_letters').innerHTML = userWords[1];
    } else {//else Hanno la stessa lunghezza
        document.querySelector('.same_letters').innerHTML = 'They have the same number of letters'
    }
*/
