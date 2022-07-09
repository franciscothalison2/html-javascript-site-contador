var numberCurrentWrapper = document.getElementById("currentNumber");
var numberCurrent = 0;

function somar1(){
    numberCurrent = numberCurrent + 1; // vai somar 1
    numberCurrentWrapper.innerHTML = numberCurrent;

    if(numberCurrent >= 0){
        var cor = document.getElementById("currentNumber");
        cor.style.color = 'white';
    }
}

function subtrair1(){
    numberCurrent = numberCurrent - 1;
    numberCurrentWrapper.innerHTML = numberCurrent;

    if(numberCurrent < 0){
        var cor = document.getElementById("currentNumber");
        cor.style.color = 'red';
    }
}