// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.




// 1
var studenteUno = [
  {
    "nome" : "marco",
    "cognome" : "bottoni",
    "eta" : 22
  }
];

for(let proprieta in studenteUno) {
  console.log(studenteUno[proprieta]);
}




// 2
var studenti = [
  {
    "nome" : "marco",
    "cognome" : "bottoni",
    "eta" : 22
  },
  {
    "nome" : "franco",
    "cognome" : "ballabio",
    "eta" : 42
  },
  {
    "nome" : "luigi",
    "cognome" : "sironi",
    "eta" : 39
  },
  {
    "nome" : "mimmo",
    "cognome" : "molteni",
    "eta" : 85
  },
  {
    "nome" : "gaetano",
    "cognome" : "storti",
    "eta" : 44
  },
];


for(i in studenti) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
  // console.log();
}


// 3
var agg = {
  "nome" : prompt("nome "),
  "cognome" : prompt("cognome "),
  "eta" : parseInt(prompt("eta "))
};

studenti.push(agg);
console.log(studenti);
