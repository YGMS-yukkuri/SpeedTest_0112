const set = "1234567890abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-@;:,.=*"
function gen() {
    let resu = ""
    for (let i = 0; i < 12; i++){
        const rand = Math.floor(Math.random() * set.length) // randomは0~1なのでかける必要あり
        resu += set[rand]
        
    }
    document.querySelector("input").value = resu;
}