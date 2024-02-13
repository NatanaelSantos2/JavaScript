function multiplicacao(valor1, valor2 = 5) {
    let mult = valor1 * valor2;
    return mult;
}


function main(numero1, numero2){
    console.log(multiplicacao(numero1, numero2));
}

main(3);