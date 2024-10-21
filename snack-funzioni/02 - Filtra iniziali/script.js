/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filter(names, iniziale) {
const first = [];

 for (let i = 0; i < names.length; i++) { 
     if (names[i][0] === iniziale) {
            first.push(names[i]);
 }
}

    return first;
}

// Invoca la funzione qui e stampa il risultato in console
const result = filter(names, 'A');
console.log(result);
