/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("Esercizio 1");
/* SCRIVI QUI LA TUA RISPOSTA */
let area = function (l1, l2){
    l1 = parseInt(prompt("scrivi la lunghezza del lato 1"))
    l2 = parseInt(prompt("scrivi la lunghezza del lato 2"))
    if((Number.isInteger(l1) == true && Number.isInteger(l2) == true)) {
    return "l'area è " + l1*l2
}
else {
    return "inserisci dei numeri validi";
}
}
console.log(area())
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("Esercizio 2");
/* SCRIVI QUI LA TUA RISPOSTA */
let result;
function crazySum(a,b){
    a = parseInt(prompt("scrivi il primo numero intero"))
    b = parseInt(prompt("scrivi il secondo numero intero"))
    switch(true){
    case a==b && (Number.isInteger(a) == true && Number.isInteger(b) == true): result = "i due numeri sono uguali, quindi la loro somma moltiplicata per 3 è " + (a+b)*3;
    break;
    case Number.isInteger(a) == true && Number.isInteger(b) == true: result = "la somma dei due numeri è " + (a+b);
    break;
    default: result = "inserisci dei numeri validi"
}
}
crazySum()
console.log(result)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("Esercizio 3");
/* SCRIVI QUI LA TUA RISPOSTA */
let result2;
function crazyDiff(a){
    a = parseInt(prompt("scrivi un numero intero"))
    
    switch(true){
    case a>19 && Number.isInteger(a) == true: result2 = "il numero è maggiore di 19, quindi la differenza assoluta con 19 moltiplicata per 3 è " + Math.abs(a-19)*3;
    break;
    case Number.isInteger(a) == true: result2 = "il valore assoluto della differenza con 19 è " + Math.abs(a-19);
    break;
    default: result2 = "inserisci un numero valido"
}
}
crazyDiff()
console.log(result2)
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("Esercizio 4");
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    n = parseInt(prompt("scrivi un numero intero"))
    if(n>20 && n<= 100){
        return true
    }
    else if(n==400) {
        return true
    }
    else{
        return false
    }
}
console.log("n è compreso tra 20 e 100(incluso) oppure uguale a 400? " + boundary())
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("Esercizio 5");
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(a){
    a = prompt("inserisci un testo")
    if (a.indexOf("EPICODE")==0){
        return a
    }
    else{
        return "EPICODE " + a
    }
}
 console.log(epify())
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("Esercizio 6");
/* SCRIVI QUI LA TUA RISPOSTA */
let result3;
function check3and7(a){
a = parseInt(prompt("inserisci un numero intero positivo"))
switch (true){
    case a != Math.abs(a) || Number.isInteger(a) == false : result3 = "il numero inserito non è intero positivo";
    break;
    case a%3===0 || a%7 === 0 : result3 ="il numero è divisibile per 3 o per 7";
    break;
    default: result3 = "il numero non è divisibile per 3 o per 7"
}
}
check3and7()
console.log(result3)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("Esercizio 7");
/* SCRIVI QUI LA TUA RISPOSTA */ 
function reverseString(a){
    a = prompt("inserisci il tuo testo da invertire")
    let arr = [...a.split("")]
    let arrR = [...arr.reverse()]
    let reverse = arrR.join("")
    return reverse
}
console.log(reverseString())
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("Esercizio 8");
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(a){
    a = prompt("inserisci il testo a cui va resa maiuscola la prima lettera")
    aStr= [...a.split(" ")]
    aString = []
    for(i=0; i< aStr.length; i++){

        aString.push(aStr[i].replace(aStr[i].charAt(0), aStr[i].charAt(0).toUpperCase()))
    }
    return aString.join(" ")
}
console.log(upperFirst())
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("Esercizio 9");
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString (a){
    a = prompt("inserisci il tuo testo da tagliare")
    return a.slice(1, (a.length-1))
}
console.log(cutString())
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("Esercizio 10");
/* SCRIVI QUI LA TUA RISPOSTA */
let array = []
function giveMeRandom(n){
n = parseInt(prompt("inserisci un numero intero"))
for (i=0; i<n; i++){
if(n>0 === true && Number.isInteger(n) === true) {
    r = (Math.floor(Math.random()*11))
    array.push(r)
}
else {
return "il numero inserito non è valido"
}
}
return array
}
console.log(giveMeRandom())
