var $ = document;

function disableItems() {
    document.getElementById("mainPage").style.pointerEvents = "none";
    document.getElementById("contactPage").style.pointerEvents = "none";
    document.getElementById("portPage").style.pointerEvents = "none";
    document.getElementById("supportPage").style.pointerEvents = "none";
}
function disableItem1() {
    document.getElementById("mainPage").style.pointerEvents = "unset";
    document.getElementById("contactPage").style.pointerEvents = "none";
    document.getElementById("portPage").style.pointerEvents = "none";
    document.getElementById("supportPage").style.pointerEvents = "none";
}
function disableItem2() {
    document.getElementById("mainPage").style.pointerEvents = "none";
    document.getElementById("contactPage").style.pointerEvents = "unset";
    document.getElementById("portPage").style.pointerEvents = "none";
    document.getElementById("supportPage").style.pointerEvents = "none";
}
function disableItem3() {
    document.getElementById("mainPage").style.pointerEvents = "none";
    document.getElementById("contactPage").style.pointerEvents = "none";
    document.getElementById("portPage").style.pointerEvents = "unset";
    document.getElementById("supportPage").style.pointerEvents = "none";
}
function disableItem4() {
    document.getElementById("mainPage").style.pointerEvents = "none";
    document.getElementById("contactPage").style.pointerEvents = "none";
    document.getElementById("portPage").style.pointerEvents = "none";
    document.getElementById("supportPage").style.pointerEvents = "unset";
}

const colors = ['#f3ff51', '#6dfffc', '#81ff7a', '#ff0000']
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(tab => { tab.classList.remove("active") })
                let id = tab.dataset.id
                tab.style.setProperty("--bg", `${colors[id]}20`)
                tab.style.setProperty("--c", colors[id])
                tab.classList.add("active")
                // document.querySelector("body").style.background = colors[id]
            })
        })