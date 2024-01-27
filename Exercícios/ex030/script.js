function main(numeros) {

    for (let i = 0; i < numeros.length; i++) {
        var n = numeros[i];
        if( i == 0){
            maior = menor = numeros[i];
        }else if (maior < n) {
            maior = n;
        } else if (n < menor) {
            menor = n;
        }
    }
    console.log(menor);
    console.log(maior);
}

main([5, 3, 2, 7, 8, 9, 4]);