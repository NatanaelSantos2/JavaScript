function criarPessoa(nome, idade) {
    return [nome, idade];
}

const [nome, idade] = criarPessoa('Nael', 24);
console.log(nome); // Saída: Nael
