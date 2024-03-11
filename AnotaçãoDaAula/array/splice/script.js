const frutas = ["maçã", "mamão", "laranja", "banana"];

// 1 argumento serve para acessar o índice do array
// 2 argumento serve para acessar remover
// 3 ou N argumento serve para adicionar elementos
frutas.splice(0, 0, "melancia");

// Remova 0 elementos(zero) antes do índice 2 e insira "melancia"
frutas.splice(2, 0, "melancia")

// Remove 1 elemento no índice [3]
frutas.splice(3, 1);

// Remover 1 elemento no índice 2 e insira "melancia"
frutas.splice(2, 1, "melancia");

// -2 começa a contar de trás do array
frutas.splice(-2, 1);

// Remover todos passando 0 ou apenas 1 número
console.log(frutas);




//  Mais exemplos
const animais = ['bufalo', 'camelo', 'pato', 'elefante'];

animais.splice(1, 1);

const novoArrayAnimais = animais.slice(1);
// apenas retorna um novo array

console.log(animais.slice(1));
console.log(animais.slice(1, 2));
console.log(animais.slice(0, 3));
console.log(animais.slice(2, 1));
console.log(animais.slice(2, -1));
console.log(animais.slice(1, -1));
console.log(animais.slice(1, -2));
console.log(animais.slice(-2));
