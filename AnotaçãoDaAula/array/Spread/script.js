const array = [1, 2, ...[3, 4, 5]];

// console.log(array[2][0]);

console.log(array[3]);

const frutasTropicais = ["acerola", "cajá"];

const frutasDeInverno = ["banana", "carambola"];

const frutas = ["uva", "mamão", ...frutasTropicais, ...frutasDeInverno];

console.log(frutas);
