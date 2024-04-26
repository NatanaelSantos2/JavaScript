/* // parametro posicional
function calculador(valorX, valorY){
    console.log(valorX + valorY)
}

calculador(5, 10)

// parametros com valor default
function calculador2(valorX, valorY = 10) {
    console.log(valorX, valorY);
}
//valor so pega underfined e não null
//de cima para direita o js ler
calculador2(5)

// atribuição por desestruturação
const { nome, idade } = {
    nome: 'Nael',
    idade: 25
}

console.log(nome, idade);
//const [nome, idade] = ["Nael", 24];

function printUser({ nome }, res) {
    console.log(nome, res);
}

printUser({
    nome: 'Nael',
    idade: 25
}, 'Segunda posição');
 */
// atribuição por rest operator
// function printUser({ nome, ...props}) {
//     console.log(nome, props);
// }

function printUser() {
    console.log(arguments[1]);
}

printUser({
    nome: 'Nael',
    idade: 25,
    cor: 'B',
    sexo: 'M'
}, "Ola");