const prompt = require('prompt-sync')();

console.log("Welcome to our Sample Calculator Application");

let calculationHistory = [];

askForCalculation();

function calculate() {
    const operation = prompt('Choose operation: Addition, Subtraction, Multiplication, or Division: ').toLowerCase();

    if (isValidOperation(operation)) {
        const num1 = parseFloat(prompt('Enter the first number:'));
        const num2 = parseFloat(prompt('Enter the second number:'));

        let result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    console.log('Error: Cannot divide by zero.');
                    askForMoreOperations();
                    return;
                }
                break;
        }

        addToHistory(operation, num1, num2, result);
        console.log(`Result: ${result}`);

        askForMoreOperations();
    } else {
        console.log('Invalid operation. Please choose Addition, Subtraction, Multiplication, or Division.');
        askForMoreOperations();
    }
}

function isValidOperation(operation) {
    return ['add', 'sub', 'multi', 'div'].includes(operation);
}

function addToHistory(operation, num1, num2, result) {
    calculationHistory.push({
        operation: operation,
        num1: num1,
        num2: num2,
        result: result
    });
}

function displayHistory() {
    console.log('\nCalculation History:');
    calculationHistory.forEach((item, index) => {
        console.log(`${index + 1}. ${item.num1} ${item.operation} ${item.num2} = ${item.result}`);
    });
}

function askForMoreOperations() {
    const ask = prompt('Do you want more operations? (yes or no): ');

    if (ask.toLowerCase() === 'yes') {
        calculate();
    } 
    else if (ask.toLowerCase() === 'no') {
        displayHistory();
        console.log("Operation is closed now. Thank you.")
    }
    else {
        console.log("Operation is closed now. Thank you.");
    }

  
}

function askForCalculation(){
    const askQues = prompt('Do you want any calculation? (yes or no): ');
    if(askQues.toLocaleLowerCase() === 'yes'){
        calculate();
    }else{
        console.log("Thank you Sir, for visiting our Calculator Software");
        
    }
    
}

