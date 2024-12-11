let btn = document.getElementById("btn")
btn.onclick = function insTask(){
    let inp = document.getElementById("input").value
    let item = document.createElement("li")
    item.innerText = inp
    item.onclick = function (){
    item.style.textDecoration = "line-through red"
    }
    document.querySelector("main div ul").appendChild(item)
}
