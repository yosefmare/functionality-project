const btns = document.getElementsByClassName("btn");
const screen = document.getElementById("screen");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const deleteNumberByNumber = document.getElementById("delete");
let arr = [];

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        let numberStringType = String(btns[i].textContent);
        screen.value += numberStringType;
        arr.push(numberStringType);
        let calculation = eval(screen.value);

        equal.onclick = function() {
            screen.value = calculation;
        };

        reset.onclick = function() {
            screen.value = "";
        };

        deleteNumberByNumber.onclick = function() {
            screen.value = screen.value.slice(0, -1);
        };
    };
}
