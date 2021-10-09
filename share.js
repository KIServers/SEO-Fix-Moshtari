const button = document.querySelector(".share-btn")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const telegram = document.querySelector(".telegram")
const instagram = document.querySelector(".instagram")
const whatsapp = document.querySelector(".whatsapp")
const icon = document.querySelectorAll("i")
const body = document.querySelector("body")
const allElements = [button, bar1, bar2, telegram,
instagram, whatsapp, icon[0], icon[1], icon[2],body]
button.addEventListener("click", expand)
function expand(){
    allElements.forEach(element => element.classList.toggle("exp"))
}      