const display = document.getElementById("display");

function clickToEnter(input){
    display.value += input;
}

function calculateResult(){
    const result = eval(display.value);
    display.value = result;
}

function clearResult(){
    display.value = "";

}