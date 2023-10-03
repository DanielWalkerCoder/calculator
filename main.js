let mathBox = document.querySelector('#result')

function clear(){
    mathBox.value = '';
}
 
function display(value){
    mathBox.value += value;
}

function squareRoot(){
    mathBox.value = Math.sqrt(mathBox.value)
}

function square(){
    mathBox.value = mathBox.value ** 2
}

function calculate(){
    mathBox.value = eval(mathBox.value);
}

document.querySelector('#clearButton').addEventListener('click', clear)