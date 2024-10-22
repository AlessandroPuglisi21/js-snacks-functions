function countVowels(string) {
  // Definire un insieme di vocali
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // Creare un contatore per le vocali
  let count = 0;

  // Ciclo attraverso ogni lettera della stringa
  for (let i = 0; i < string.length; i++) {
    const letter = string[i].toLowerCase(); // Converti la lettera in minuscolo per evitare problemi con maiuscole
    
    // Verifica se la lettera è una vocale
    if (vowels.includes(letter)) {
      count++; // Incrementa il contatore
    }
  }

  return count; // Restituisce il numero di vocali
}

const word = 'pippoepaperino'; 
const numVowels = countVowels(word);
console.log(numVowels);
