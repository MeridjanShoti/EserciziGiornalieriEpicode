let cells = []
for (i=0; i<76; i++){
let cell = document.createElement("div");
cell.className = "cell"
cell.innerText = +i+1
cells.push(cell)
}
for (element of cells){
document.getElementById("tabella").appendChild(element)
}
r = function(){
    let rand = Math.floor(Math.random()*76)
    return rand
}
let mainBtn = document.getElementById("pesca")
let colora = function(){
    let random = r()
    if (cells[random].style.backgroundColor !== "red"){
        cells[random].style.backgroundColor = "red"
    }
    else {
        random = r()
        colora()
    }
}
mainBtn.addEventListener ("click", () => {
    colora()
})
let tabN = document.getElementById("tabelline")
console.log(tabN)