let btn = document.getElementById("btn")
btn.onclick = function insTask(){
    let inp = document.getElementById("input").value
    let item = document.createElement("li")
    let btn2 = document.createElement("button")
    btn2.style.float = "right"
    btn2.innerText = "X"
    btn2
    item.innerText = inp
    item.onclick = function(){
    item.style.textDecoration = "line-through red"
    item.style.color = "gray"
    }
    btn2.onclick = function(){
        btn2.parentNode.remove()
    }
    document.querySelector("main div ul").appendChild(item)
    item.appendChild(btn2)
    document.getElementById("input").value = ""
}
