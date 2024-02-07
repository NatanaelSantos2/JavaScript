function main(numeros) {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(soma);
}

main([51, 52, 74, 46, 20, 82, 59, 39, 77, 23]);