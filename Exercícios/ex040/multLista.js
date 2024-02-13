function main(numeros) {
    for(let i = 0; i < numeros.length; i++){
        const mult = numeros[i];
        console.log(mult * 2);
    }
}

main([51, 52, 74, 46, 20, 82, 59, 39, 77, 23]);