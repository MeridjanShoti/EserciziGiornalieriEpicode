let numeri = 90
let cells = []
let pescaggi = 0
for (i=0; i<numeri; i++){
let cell = document.createElement("div");
cell.className = "cell"
cell.innerText = +i+1
cells.push(cell)
}
for (element of cells){
document.getElementById("tabella").appendChild(element)
}
r = function(){
    let rand = Math.floor(Math.random()*numeri)
    return rand
}
let mainBtn = document.getElementById("pesca")
let colora = function(){
    
    let random = r()
    if (cells[random].style.backgroundColor !== "red"){
        cells[random].style.backgroundColor = "red"
    }
    else if (pescaggi === numeri){
        alert("PARTITA FINITA")
    }
    else {
        random = r()
        colora()
    }
}
mainBtn.addEventListener ("click", () => {
    colora()
    coloraTabelline()
    pescaggi++
})
let tabN = document.getElementById("tabelline")
let ind;
tabN.addEventListener("change", () => {
    ind = tabN.selectedIndex
    creaTabelline()
    document.getElementById("seleziona").style.display = "none"
    document.getElementById("tPlayer").style.border = "1px black solid"
})
function creaTabelline(){
    for (let i = 1; i<ind+1; i++){
        let tabellina = document.createElement("div")
        tabellina.classList.add("scheda")
        document.getElementById("tPlayer").appendChild(tabellina)
        for (let j = 0; j<15; j++){
        let tcell = document.createElement("div")
        tcell.classList.add("cell")
        tcell.classList.add("tcell")
        let nt = r()+1
        /* function noDoppi(){
        for (element of tcell){
            if (element.innerText===nt){
            nt=r()+1
            noDoppi()
            }
            else{}
        } */
            tcell.innerText=nt
        tabellina.appendChild(tcell)
    } 
    
}
}
let cellet = document.getElementsByClassName("tcell")
function coloraTabelline(){
    for(let i = 0; i<cells.length; i++){
        if (cells[i].style.backgroundColor === "red"){
            for(let j = 0; j<cellet.length; j++){
                if (cellet[j].innerText === cells[i].innerText){
                    cellet[j].style.backgroundColor = "red"
                }
            }
        }
    }
}
function reset(){
document.getElementById("seleziona").style.display = "block"
document.getElementById("tPlayer").innerHTML = ""
document.getElementById("tPlayer").style.border = "none"
tabN.selectedIndex = 0
pescaggi = 0
for (let i = 0; i< numeri; i++){
cells[i].style.backgroundColor = "wheat"
}
for (let i = 0; i< cellet.length; i++){
    cellet[i].style.backgroundColor = "wheat"
}
}
document.getElementById("RESET").addEventListener("click", reset)
