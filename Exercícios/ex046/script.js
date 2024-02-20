function verificaIdade(idade) {
    if ( idade >= 18) {
        return true;
    } else {
        throw new Error("Idade mínima não atingida");
    }
}

function main(idade) {
    try {
        console.log(verificaIdade(idade));
    } catch (err) {
        console.error(`Erro: ${err.message}`);
    }
}

main(15);