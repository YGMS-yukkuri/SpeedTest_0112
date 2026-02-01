// random -> toString(16)などで実

const colors = document.querySelector(".palette").querySelectorAll("div")

function rand() {
    return Math.random().toString(16).slice(-6).padStart(6, "0")
}

function gen() {
    colors.forEach(element => {
        let color = rand()
        element.innerHTML = `<span>#${ color }</span>`;
        element.style.backgroundColor = `#${color}`
        element.style.color = `#${color}`
    });
}

gen();