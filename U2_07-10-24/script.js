function appendToDisplay(value) {
    document.getElementsById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function deleteDisplay(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slince(0, -1);
}

function calculateResult(){
    try{
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    }catch (error){
        alert('Expresión inválida');
    }
}