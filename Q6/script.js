let isNight = false
function change(){
    if(isNight){
        document.getElementById("night").style.display = "none";
        document.getElementById("light").style.display = "flex";
        isNight = false
    }
    else {
        document.getElementById("night").style.display = "flex";
        document.getElementById("light").style.display = "none";
        isNight = true;
    }
}