var firstValue = null;
var secondValue = null;
var selectedOperation = null;
var inputNumber = document.getElementById("input-number");

function setValue(value) {
    inputNumber.value = inputNumber.value + String(value);
    console.log(value);
}

function setOperation(operation) {
    if(!firstValue && !selectedOperation) {
        firstValue = Number(inputNumber.value);
        selectedOperation = operation;
    }

    clearInput();
}

function clearValues() {
    firstValue = null;
    secondValue = null;
    selectedOperation = null;
    clearInput();
}



function clearInput() {
    inputNumber.value = "";
}

function calculate() {
    if(!firstValue) {
        showMessage("Valores não definidos");
        return;
    }
    secondValue = Number(inputNumber.value);

    let result = null;
    
    switch (selectedOperation) {
        case "/":
            if(secondValue === 0) {
                showMessage("Impossível fazer uma divisão por 0.");
                return;
            }

            result = firstValue / secondValue;
            inputNumber.value = String(result);
            break;

        case "*":
            result = firstValue * secondValue;
            inputNumber.value = String(result);
            break;

        case "-":
            result = firstValue - secondValue;
            inputNumber.value = String(result);
            break;

        case "+":
            result = firstValue + secondValue;
            inputNumber.value = String(result);
            break;
    }

    showMessage("");
}

var showMessage = (message) => {
    let messageDiv = document.getElementById("info-message");
    messageDiv.innerText = message;
}