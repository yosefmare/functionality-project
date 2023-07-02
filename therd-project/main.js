const btns = document.getElementsByClassName("btn");
const screen = document.getElementById("screen");
for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function(){
        screen.value += btns[i].textContent
    }
}