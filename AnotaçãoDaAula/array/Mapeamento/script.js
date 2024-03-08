const numeros = [5, 2, 6, 1, 3, 4];
const letras = ["d", "a", "c", "b"];

const numerosELetras = [...numeros, ...letras];

console.log(numerosELetras.sort()); // organiza o array
// console.log(numeros.reverse());

console.log(numeros.sort().reverse());
