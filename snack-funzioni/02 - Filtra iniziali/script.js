// const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// // Dichiara la funzione qui.
// function filterByLetter(array, letter) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     // console.log(element)

//     // Verifica se la prima lettera è uguale a quella passata alla funzione
//     if (element[0].toLowerCase() === letter.toLowerCase()) {
//       result.push(element);
//     }
//   }

//   return result;
// }

// // Esegui la funzione con l'array e la lettera specificati
// const filteredNames = filterByLetter(names, 'A');
// console.log(filteredNames); // ["Anna", "Adele", "Alessandra"]


//!------------------------------------------------------------------------------------------


const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function nomiCheInizianoCon(array, lettera) {
    // Converti la lettera in minuscolo 
    const letteraMinuscola = lettera.toLowerCase();

    // Usa filter per ottenere solo le parole che iniziano con la lettera specificata
    return array.filter(nome => nome[0].toLowerCase() === letteraMinuscola);
}

const risultati = nomiCheInizianoCon(names, 'L');
console.log(risultati); 