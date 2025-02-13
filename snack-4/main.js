/* 

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

const numb = []

for (let i = 0; i < 6; i++){
    const new_number = Number(prompt(`Type a number`))
    if ( new_number % 2 !== 0){
        numb.push(new_number)
    }    
} 

console.log(numb);