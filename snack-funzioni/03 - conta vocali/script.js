/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocali = ["a","e","i","o","u"]


// Dichiara la funzione qui.
function vocalNumber(word, vocali){
let numeber = 0;
for(let i = 0; i<word.length; i++){

    if(vocali.includes(word[i])) {
        numeber++
    }
  }
  return numeber;
}
// Invoca la funzione qui e stampa il risultato in console

const result=vocalNumber(word, vocali);
console.log(result,)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)