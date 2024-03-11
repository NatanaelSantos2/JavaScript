const numeros = [1, 2, 3, 4, 5, 6];

const numero = numeros.find(function (numero) {
    console.log(numero);
    return numero === 5;
    // return numero > 5;
});

console.log(numero);
