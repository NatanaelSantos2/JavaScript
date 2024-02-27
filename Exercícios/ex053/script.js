
function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}


function calculadora(string,num1, num2, operacao) {
    if(string === "adicao") {
        console.log(`${string} ${num1} + ${num2} = `, operacao(num1, num2)); 
    }
    if(string === "subtracao") {
        console.log(`${string} ${num1} - ${num2} = `, operacao(num1, num2)); 
    }
    if(string === "multiplicacao") {
        console.log(`${string} ${num1} * ${num2} = `, operacao(num1, num2)); 
    }
    if(string === "divisao") {
        console.log(`${string} ${num1} / ${num2} = `, operacao(num1, num2)); 
    }
    
}  


function main(num1, num2){
    calculadora("adicao", num1, num2, adicao);
    calculadora("subtracao", num1, num2, subtracao);
    calculadora("multiplicacao", num1, num2, multiplicacao);
    calculadora("divisao", num1, num2, divisao);
}

main(10,5);