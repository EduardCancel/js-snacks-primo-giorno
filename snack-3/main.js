/* 

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

let numb_sum = 0

for (let i = 0; i < 10; i++){
    const number = Number(prompt(`Inserisci il numero`))
    console.log(number);
    numb_sum += number
}

console.log(numb_sum);