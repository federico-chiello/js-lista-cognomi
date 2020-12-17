// Creare una lista di cognomi

// Istruzioni:
// (1) Chiedere all’utente il cognome;
// (2) Inserirlo in un array con altri cognomi;
// (3) Stampare la lista ordinata alfabeticamente;
// (4) Scrivere la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova.


// (1) Chiedere cognome.
var cognomeUtente = prompt('Inserisci il tuo cognome:');

// (2) Creare array con altri cognomi ed inserire quello dell'utente.
var cognomi = ['Rossi', 'Immobile', 'Ronaldo', 'Maldini'];

cognomi.push(cognomeUtente);

// console.log(cognomi);

// (3) Stampare lista in ordine alfabetico.
cognomi.sort();

console.log(cognomi);
