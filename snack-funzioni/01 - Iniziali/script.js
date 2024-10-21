const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function firstLetter(arr) {
  const initial = []; // Inizializza un array vuoto per conservare le iniziali

  // Ciclo for per scorrere ogni elemento dell'array
  for (let i = 0; i < arr.length; i++) {
    initial.push(arr[i][0]); 
  }

  return initial; // Restituisci l'array con le iniziali
}

// Invoca la funzione qui e stampa il risultato in console
const initials = firstLetter(names);
console.log(initials); 

// Risultato atteso: ["A", "L", "M", "A", "G", "A"]
