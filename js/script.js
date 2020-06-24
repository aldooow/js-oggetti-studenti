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
var studentiBoolean = [
  {
    "index" : 1,
    "nome" : "Carlo",
    "cognome" : "Ferrero",
    "eta" : 30
  },
  {
    "index" : 2,
    "nome" : "Valerio",
    "cognome" : "Barbanti",
    "eta" : 30
  },
  {
    "index" : 3,
    "nome" : "Robert",
    "cognome" : "Campobasso",
    "eta" : 30
  },
  {
    "index" : 4,
    "nome" : "Massimo",
    "cognome" : "Manelli",
    "eta" : 30
  }

];

var source = document.getElementById("template").innerHTML;
var template = Handlebars.compile(source);
// var myData = {
//   nome: "nomeTest",
//   cognome: "cognomeTest"
// };
// var html = template(myData);
// $(".container").append(html);
var studenteNuovo = {
  "nome" : prompt("Inserisce Nome"),
  "cognome" : prompt("Inserisce Cognome")
}
studentiBoolean.push(studenteNuovo)
for(var i = 0; i<studentiBoolean.length; i++){
  var html = template(studentiBoolean[i]);
  // console.log(i + 1)
  $(".container").append(html);

};
