/*
- Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


// - Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente0 = {
  "nome" : "Aldo",
  "cognome" : "Cahuana",
  "eta" : 30
}

for(var key in studente0 ){
  console.log(studente0[key]);
}

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
// stampare per ognuno nome e cognome

// var studente1 = {
//   "nome" : "Carlo",
//   "cognome" : "Ferrero",
//   "eta" : 30
// };
//
// var studente2 = {
//   "nome" : "Valerio",
//   "cognome" : "Barbanti",
//   "eta" : 30
// };
//
// var studente3 = {
//   "nome" : "Robert",
//   "cognome" : "Campobasso",
//   "eta" : 30
// };
//
// var studente4 = {
//   "nome" : "Massimo",
//   "cognome" : "Manelli",
//   "eta" : 30
// }

var studentiBoolean = [
  {
    "nome" : "Carlo",
    "cognome" : "Ferrero",
    "eta" : 30
  },
  {
    "nome" : "Valerio",
    "cognome" : "Barbanti",
    "eta" : 30
  },
  {
    "nome" : "Robert",
    "cognome" : "Campobasso",
    "eta" : 30
  },
  {
    "nome" : "Massimo",
    "cognome" : "Manelli",
    "eta" : 30
  }

];

console.log(studentiBoolean)
