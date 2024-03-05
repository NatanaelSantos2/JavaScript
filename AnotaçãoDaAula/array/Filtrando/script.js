const frutas = ["maçã", "pera", "mamão", "laranja", "banana"];

// caso de uso
const numeros = [10, 5, 30, 27, 18];


const frutasFiltradas = frutas.filter( function(fruta, indice, frutas) {
    // console.log(indice);
    // console.log(frutas);
    return fruta.length <= 4;
});

// console.log(frutasFiltradas);

const numerosP = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

console.log(numerosP);

const numerosPares = numeros.map((numero) => {
    if (numero % 2 === 0) {
        return numero;
    }
} ); //=> numero % 2 === 0 

console.log(numerosPares);
