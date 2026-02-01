document.addEventListener("keyup", () => {
    val = document.querySelector("input").value
    len = val.length
    document.querySelector("p").textContent = `文字数: ${len}`
})
