const { nome, idade } = {
    nome: 'Nael',
    idade: 25
};

console.log(nome, idade); // Saída: Nael 25

//Desestruturação em parâmetros de função
function printUser({ nome }, res) {
    console.log(nome, res);
}

printUser({
    nome: 'Nael',
    idade: 25
}, 'Segunda posição'); // Saída: Nael Segunda posição
