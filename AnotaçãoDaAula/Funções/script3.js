/* function soma(a, b) {
    console.log(a + b);
}

const resultado = soma(3, 5);

console.log(resultado); */

//Retornando um valor simples
/* function soma(a, b) {
    console.log(a + b);
    return "Ola mundo!";
}
const resultado = soma(3, 5);

console.log(resultado); */ 


//Retornando um arrays
/* function criarPessoa(nome, idade) {
    return [nome, idade];
}

const [nome, idade] = criarPessoa('Nael', 24);
console.log(nome); */

//Retornando um objeto
/* function criarPessoa(nome, idade) {
    const data = {
        nome: nome,
        idade: idade
    }
    //como os parametros da função é idade pode usar nome, idade
    return {
        nome,
        idade
    }
}

const {nome, idade} = criarPessoa('Nael', 24);
console.log(nome); */

//Retornando uma função
function criarPessoa(nome, idade) {
    function myFunc() {
        return `${nome} ${idade}`;
    }

    return myFunc()
}

const myFunc = criarPessoa("Nael", 24);

console.log(myFunc);