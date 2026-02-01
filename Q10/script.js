let page = 0
const pages = document.querySelectorAll("div")

function next(){
    pages[page].style.display = "none";
    page++
    pages[page].style.display = "block"
    show()
    if(page === 3){
        document.querySelectorAll("button").forEach(elem => {
            elem.remove()
        })
    }
}

function prev(){
    if (page === 0) return
    pages[page].style.display = "none";
    page--
    pages[page].style.display = "block"
    show()
}

function show() {
    buttons = document.querySelectorAll("button")
    if(page === 2){
        buttons[1].textContent = "Finish"
    }
    else {
        buttons[1].textContent = "Next"
    }
}