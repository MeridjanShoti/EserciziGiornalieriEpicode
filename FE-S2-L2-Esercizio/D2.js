/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("Esercizio 1")
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 4;
let b = 5;
let risposta;
if (a > b){
  risposta = a;
}
else {
  risposta = b;
}
console.log("la risposta è " + risposta);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("Esercizio 2")
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 7;
if (x!=5){
  console.log("not equal")
}
else {
  console.log("equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
console.log("Esercizio 3")
/* SCRIVI QUI LA TUA RISPOSTA */
let num1 =15;
if (num1%5==0){
  console.log("il numero " + num1 + " è divisibile per 5")
}
else{
  console.log("il numero " + num1 + " non è divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("Esercizio 4")
/* SCRIVI QUI LA TUA RISPOSTA */
let num2 = 5
let num3 = 8
if(num2%1 !=0||num3%1 !=0){ //serve a verificare di aver inserito numeri interi, in alternativa avrei potuto usare come condizione (num2.isInteger()==false||num3.isInteger()==false)
  alert("uno o più numeri non sono interi")
}
else if(num2==8||num3==8||num2+num3==8){
  console.log("il valore almeno uno dei numeri o la somma tra i due è 8")
}
else{
  console.log("nessuno dei due numeri o la loro somma è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("Esercizio 5")
/* SCRIVI QUI LA TUA RISPOSTA */
const spedizione = 10
let checkout;
let carrello = [12,2,30]
let totalShoppingCart = 0

for (let i = 0; i < carrello.length; i++) {
  totalShoppingCart += carrello[i];
}
if (totalShoppingCart>50) {
  checkout = totalShoppingCart
}
else{
  checkout = totalShoppingCart + spedizione
}
if (checkout==totalShoppingCart) {
console.log("il totale da pagare è " + checkout + " perchè non sono state aggiunge spese di spedizione")
}
else {
  console.log("il totale da pagare è" + checkout + "perchè sono state aggiunge le spese di spedizione")
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("Esercizio 6")
/* SCRIVI QUI LA TUA RISPOSTA */
blackfriday=true;
sconto= checkout -(checkout*20/100)
if (blackfriday==true){
  checkout = sconto
  console.log("il prezzo finale è" + checkout + " perché è stato applicato lo sconto del black friday")
}
else {
  console.log("il prezzo finale è " + checkout + "perché non è stato applicato alcuno sconto")
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("Esercizio 7")
/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5;
let n2 = 7;
let n3 = 3;

let array = [n1]
if (n2>n1&&n2>n3) {
array.unshift(n2);
}
else{
  array.push(n2)
}
if(n3>n1&&n3>n2){
  array.unshift(n3);
}
else if (n1>n3>n2||n2>n3>n2) {
 array.splice(1, 0, n3)
}
else {
  array.push(n3)
}
console.log("i tre numeri, ordinati dal più grande al più piccolo sono: " + array[0], array[1], array[2])
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("Esercizio 8")
/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 6
if (typeof numero == "number"){
  console.log("il valore fornito è un numero")
}
else{
  console.log("il valore fornito non è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("Esercizio 9")
/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 5
let num5 = 8
let numero2= num4
if (numero2%2==0){
  console.log("il numero " + numero2 + " è pari")
}
else{
  console.log("il numero " + numero2 + " è dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
console.log("Esercizio 10")
/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
if (5<= val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log("Esercizio 11")

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log("Esercizio 12")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log("Esercizio 13")
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
console.log("Esercizio 14")
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log("Esercizio 15")
/* SCRIVI QUI LA TUA RISPOSTA */
