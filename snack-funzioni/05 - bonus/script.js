/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const space = ' '
const orario = prompt('Seleziona Ora')

// Dichiara la funzione qui.
function saluto(name){
    const ora = parseFloat(orario)

    if(orario >= 5 && ora< 13){
        return 'Buongiorno' + space + name
    } else if (orario >= 13 && ora < 17)
        return 'Buonpomeriggio' + space + name
    else if (orario >= 24){
        return 'Ora non valida'
    }
    else 
    return 'Buonasera' + space + name
    
}


// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(name))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.