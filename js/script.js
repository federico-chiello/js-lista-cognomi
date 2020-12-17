// Creare una lista di cognomi

// Istruzioni:
// (1) Chiedere all’utente il cognome;
// (2) Inserirlo in un array con altri cognomi;
// (3) Stampare la lista ordinata alfabeticamente;
// (4) Scrivere la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova.


// (1) Chiedere cognome.
var cognomeUtente = prompt('Inserisci il tuo cognome:');
var iniziale = cognomeUtente.charAt(0).toUpperCase();
var restoDelNome = cognomeUtente.substring(1).toLowerCase();
cognomeUtente = iniziale + restoDelNome;

// (2) Creare array con altri cognomi ed inserire quello dell'utente.
var cognomi = ['Rossi', 'Aquilani', 'Immobile', 'Ronaldo', 'Maldini'];

cognomi.push(cognomeUtente);

// console.log(cognomi);

// (3) Stampare lista in ordine alfabetico.
cognomi.sort();

console.log(cognomi);
document.getElementById("lista-cognomi").innerHTML = cognomi

// (4) Scrivere posizione "umana" della lista in base a dove si trova il nuovo utente.

// **** Primo metodo
// for( var i = 0; i < cognomi.length; i++ ){
//   if(cognomi[i] == cognomeUtente) {
//    document.getElementById("cognome-inserito").innerHTML += i + 1;
//   }
// }

// **** Secondo metodo
document.getElementById("cognome-inserito").innerHTML += cognomi.indexOf(cognomeUtente) + 1;
