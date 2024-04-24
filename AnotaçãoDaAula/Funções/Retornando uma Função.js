function criarPessoa(nome, idade) {
    function myFunc() {
        return `${nome} ${idade}`;
    }

    return myFunc;
}

const myFunc = criarPessoa("Nael", 24);
console.log(myFunc()); // Saída: Nael 24
