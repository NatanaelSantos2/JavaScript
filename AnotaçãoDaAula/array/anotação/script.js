/* let precos = [1, 3, 4, 6];

precos.push(1); //adiciona sempre no final da lista
precos.unshift(3); //adiciona no inicio da lista.
precos.pop(); //Remove o ultimo item da lista
precos.shift(); //Remove o primeio da lista
precos.splice(1, 1, 'a'); //apaga apatir do numero
//splice(1 apga, 1 so 1 numero, "a" adiciona a letra a no lugar)
console.log(precos);
console.log(precos[2]); //acessa diretamente o item.
console.log(precos[(precos.length) - 1]);
 */



//Tipos de dados em um array
/* [120, 'Nael', {}, [], function(){}] */

//Pelo ocnstrutor do array
// const array =new Array(3); //1 argumento
// [,,]

/* //2 ou mais argumento
const array = new Array(3, 5);
// console.log(array);

//Pela notação literal
const forma2 = [3];
console.log(forma2); */

/* const frutas = ["maçã", "banana", "laranja"];

// console.log(frutas[0]);

const resultado = frutas.indexOf("maçã");
frutas[resultado] = "uva";
console.log(frutas); */


/* 
const frutas = ["maçã", "mamão", "laranja", "banana"];

frutas.unshift("coco");
console.log(frutas.push("morango")); */


/* const frutas = ["maçã", "mamão", "laranja", "banana"];

//1 argumento serve para acessar o indice do array
//2 argumento serve para acessar remover
//3 ou N arguemnto serve para adicionar elementos
// frutas.splice(0, 0, "melancia");

//Remova 0 elementos(zero) antes do indice 2 e insira "melancia"
// frutas.splice(2, 0, "melancia")

//Remove 1 elemento no indice [3]
// frutas.splice(3, 1);

//Remover 1 elemento no indice 2 e insira "melancia"
// frutas.splice(2, 1, "melancia");

// -2 começa contar de tras do array
frutas.splice(-2, 1);

//Remover todos passando 0 ou apenas 1 nuemro
console.log(frutas);  */


/* const numeros = [1, 2, 3, 4, 5, 6];

const numero = numeros.find(function (numero) {
    console.log(numero);
    return numero === 5;
    // return numero > 5;
});

console.log(numero); */

const alunos = [
    {
        nome: 'Nael',
        sobreNome: 'Santos'
    },
    {
        nome: 'Neru',
        sobreNome: 'Santos'
    },
    {
        nome: 'Sophia',
        sobreNome: 'Santos'
    }
];

const aluno = alunos.find((aluno) => aluno.nome === 'Nael');
if (aluno === undefined){
    console.log('Não existe!');
} else {
    console.log(aluno);
}



//const frutas = ["maçã", "mamão", "laranja", "banana"];

/* for(let i = 1; i < frutas.length; i++) {
    const nomeFruta = frutas[i];
    const indiceFruta = frutas.indexOf(nomeFruta);
    console.log(`${indiceFruta}-${nomeFruta}`);
}  */



/* frutas.forEach(function(fruta, indice, frutas) {
    //console.log(`${indice}-${frutas}`);
    console.log(frutas);
}) */


/* for(const indice in frutas) {
    console.log(indice);
}

for(const nome of frutas) {
    console.log(nome);
} */


/* const [dia, mes, ano, ...res] = [16, 4, 1993, 15, 10, 20];

console.log(dia, mes, ano);
console.log(res); */


/* const array = [1, 2, ...[3, 4, 5]];

// console.log(array[2][0]);

console.log(array[3]); */

/* const frutasTropicais = ["acerola", "cajá"];

const frutasDeInverno = ["banana", "carambola"];

const frutas = ["uva", "mamão", ...frutasTropicais, ...frutasDeInverno];

console.log(frutas); */


/* const numeros = [1, 2, 3, 4];

const numerosNovos = numeros.map((numero, indice) => {
    console.log(numero, 'indice>', indice);
    console.log(numeros);
    return numero * 2;
});

console.log(numerosNovos) */


/* const numeros = [5, 2, 6, 1, 3, 4];
const letras = ["d", "a", "c", "b"];

const numerosELetras = [...numeros, ...letras];

console.log(numerosELetras.sort()); //organiza o array
// console.log(numeros.reverse());

console.log(numeros.sort().reverse()); */

/* const numbers = [51, 52, 74, 46, 20, 82, 59, 39, 77, 23];

numbers.splice(7, 1)

console.log(numbers); */