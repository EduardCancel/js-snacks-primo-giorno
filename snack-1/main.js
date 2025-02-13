/* L'utente inserisce due numeri in succesione, con due prompt.
    il software stampa il maggiore.
 */

// #

const first_Number = Number(prompt("Scegli un numero"))
const second_Number = Number(prompt("Scegli un secondo numero"))

if (first_Number > second_Number){
    console.log(`Il numero maggiore è: ${first_Number}`);
} else if( second_Number > first_Number){
    console.log(`Il numero maggiore è: ${second_Number}`);
} else{
    console.log("I numeri sono uguali");
}
