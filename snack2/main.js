/*Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]*/

const names =["pippo", "pluto", "paperino",]
const capitalizedWords = names.map(names => names[0].toUpperCase() + names.slice(1).toLowerCase());
console.log(capitalizedWords);
