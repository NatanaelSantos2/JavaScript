// let precos= [1, 3, 4, 66, 23];

/* console.log(precos[(precos.length) - 1]); */

// let [preco1, preco2, ...preco3] = precos; //esta recebendo os valore 0 1 e 2 dessa posição da lista.
//Spread ... ele espalha todo o resto na variavel preco3


// console.log(preco3);
/* let novoArray = [3, precos]; */
/* function minhafuncao(){
    return [7, 35];
}

let [valor1, valor2] = minhafuncao();
 */

/* console.log(novoArray[1][3]); */

/* const animais = ['bufalo', 'camelo', 'pato', 'elefante'];

// animais.splice(1, 1);

// const novoArrayAnimais = animais.slice(1);
//apenas retorna um novo array

console.log(animais.slice(1));
console.log(animais.slice(1, 2));
console.log(animais.slice(0, 3));
console.log(animais.slice(2, 1));
console.log(animais.slice(2, -1));
console.log(animais.slice(1, -1));
console.log(animais.slice(1, -2));
console.log(animais.slice(-2)); */





/* const animais = ['bufalo', 'camelo', 'pato', 'elefante'];
const frutas = ["maçã", "mamão", "laranja", "banana"];

// const array = [].concat(animais).concat(frutas);
const array = animais.concat(['zebra', 'onça']);

console.log(array); */




/* const frutas = ["maçã", "pera", "mamão", "laranja", "banana"];

//caso de user
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

console.log(numerosPares); */

/* const numeros = [5, 6, 3, 1, 4];

const resultado = numeros.reduce(function (acumulador, valorAtual) {
    //console.log(acumulador, valorAtual);
    return acumulador + valorAtual;
}, 0);

console.log(resultado); */
/* 
const cursos = [
    {
        nome: 'JavaScript',
        videos: 10,
    },
    {
        nome: 'PHP',
        videos: 3,
    },
    {
        nome: 'PYTHON',
        videos: 35,
    }
]

const totalVideos = cursos.reduce((acumulador, curso) => acumulador + curso.videos, 0);

console.log(`O total de videos é ${totalVideos}`) */


const frutas = ["maçã", "mamão", "laranja", "banana"];

console.log(frutas.join());
console.log(frutas.join(" "));
console.log(frutas.join(" - "));
console.log(frutas.join(", "));