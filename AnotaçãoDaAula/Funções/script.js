/* function soma() {
    console.log(10 + 5);
}

function myFunction() {
    console.log("Ola mundo!");
    soma();
}

soma();
myFunction(); */

// Parametros dentro de uma function
/* function soma (a, b) {
    console.log(a + b);
}

soma(10, 5);
soma(5, 1);

// FUnção com valor ja definido
function novaFuncao (a = 'valor padrão') {
    console.log(a);
}

novaFuncao(); */

/* // Metodos de return 
function soma(a, b) {
    let result = a + b;
    return result;
}

console.log(soma(10, 5)); */
/* 
//Atribuição a variavel
function soma(valor1, valor2) {
    console.log('executou:', valor1, valor2)
    let resultado = valor1 + valor2;
    return resultado;
}

let resultado = soma;
let resultado2 = soma;

resultado(10, 10);
resultado2(20, 10);

let re = resultado(12, 8);
let re2 = resultado2(12, 4);

console.log('resultado: ', re, re2);

// console.log(resultado(15, 10)); */


/* // Função anonima
let myFunction = function () {
    console.log('Executou');
}

myFunction(); */



/* // ArrowFunction
let myArrowFunction = () => {
    console.log('Executou');
    return 'Resultado'
}

let myArrowFunction1 = () => 'Ola mundo';

let soma = (a, b) => {
    return a + b;
}


let resultado = myArrowFunction();
console.log(resultado);
console.log(myArrowFunction1());
console.log(soma(10, 20)); */



/* // Escopo lexico
let nome = 'Nael'; //Escopo global

function addNome() {
    //Escopo local ou escopo da função addNome
    let nome = 'Sophia';
    console.log(nome);

    function novoNome(){
        //Escopo da função novoNome
        let nome = 'Neru';
        console.log(nome);
    }
    novoNome();
}

console.log(nome);
addNome();
 */


//hoisting é levar a variavel e as funcoes para o topo
init();

function init() {
    console.log('Executou');
}

myVar = 'Minha variavel var'

console.log(myVar);

var myVar;

//var executa antes e let não executa