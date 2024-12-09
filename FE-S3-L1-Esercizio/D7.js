/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("ESERCIZIO 1")
let string1= "goku"
let string2= "vegeta"
function potaraString(){
return (string1.slice(0,2) + string2.slice(string2.length - 3)).toUpperCase()
}
console.log(`la fusione tra goku e vegeta è  ${potaraString()}`)
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("ESERCIZIO 2")
function creaArray(){
let arr = []
for (i=0; i<10; i++){
arr.push(Math.floor(Math.random()*100))
}
return arr
}
console.log("l'array creato è il seguente: ")
console.log(creaArray())
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("ESERCIZIO 3")
const array = creaArray()
const arrayFiltrato = array.filter(pippo => pippo%2 === 0)
console.log("array di partenza: ")
console.log(array)
console.log("array filtrato: ")
console.log(arrayFiltrato)

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 4")
function somma(){
  let tot = 0
  array.forEach(element => {
    tot += element
  })
  return tot
}
console.log(`il totale della somma degli elementi contenuti nell'array è: ${somma()}`)

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
//per distinguerlo dall'esercizio precedente invece di sommare gli elementi di array, sommo quelli dell'array filtrato
console.log("ESERCIZIO 5")
function sommaReduce() {
  const tot = arrayFiltrato.reduce((pippo, paperino) => pippo + paperino , 0)
  return tot
}

console.log("la somma dell'array filtrato data dalla funzione reduce è :" + sommaReduce())
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("ESERCIZIO 6")
const n = 5
function incrementoArray(){
let array2 = array.map(numero => numero +n)
return array2
}
console.log("il nuovo array incrementato di 5 è il seguente: ")
console.log(incrementoArray());

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("ESERCIZIO 7")
stringArray = ["ma","che","figata","scrivere","codice","javascript"]
function lunghezza(){
  let lunghezza = []
  for (key in stringArray){
    lunghezza.push(stringArray[key].length)
  }
  return lunghezza
}
console.log("l'array di stringhe è il seguente: ");
console.log(stringArray);
console.log("l'array composto dalle lunghezze degli elementi dell'array di stringhe è il seguente: ");
console.log(lunghezza());


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("ESERCIZIO 8")
function odd(){
let oddNumbers = []
for (i=1; i<=99; i++){
  if (i%2 !== 0){
    oddNumbers.push(i)
  }
}
return oddNumbers
}
console.log("l'array di numeri dispari da 1 a 99 è composto così: ");

console.log(odd())
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("ESERCIZIO 9")

function trovaOldie(){
  const date = []
  movies.forEach(element => {
    date.push(element.Year)
  });
  let dataMin = Math.min(date)
  for(element of movies){
    if (element.Year == dataMin){
      return element
    }
  }
}
console.log(`il film più vecchio è: "${trovaOldie()}"`)
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 10")
function quantiFilm(){
  return movies.length
}
console.log (`nell'array fornito ci sono ${quantiFilm()} film`)
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 11")
function titoli(){
  let titoli = []
  movies.map((film) => titoli.push(film.Title))
  return titoli
}
console.log("i film nell'array sono: ")
console.log(titoli())
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("ESERCIZIO 12")
function filmNuovi(){
let filmNuovi = movies.filter(movies => movies.Year >= 2000)
return filmNuovi
}
console.log("i film usciti dal 2000 in poi sono i seguenti: ")
console.log(filmNuovi())
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 13")
function sommaAnni(){
  let sAnni = 0
  for (element of movies){
    sAnni += +element.Year
  }
  return sAnni
}
console.log("la somma degli anni dei film è " + sommaAnni())
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("ESERCIZIO 14")
let IDimdb;
function trovaID(){
for (element of movies){
  if  (IDimdb === element.imdbID){
    return element.Title
    }
}
}
IDimdb='tt0848228'
console.log("se l'ID imdb è " + IDimdb + "allora il titolo del film è " + trovaID())
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("ESERCIZIO 15")
let anno;
function primofilm(){
  for (element of movies){
    if (element.Year == anno)
      return element.Title
  }
}
anno = 2012
console.log(`il primo film dell'anno ${anno} è ${primofilm()}`)