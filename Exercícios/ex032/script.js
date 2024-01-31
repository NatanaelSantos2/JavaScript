function inverterChavesValores(meuObjeto) {
    const objetoInvertido = {};
    for (const chave in meuObjeto) {
        if (meuObjeto.hasOwnProperty(chave)) {
            const valor = meuObjeto[chave];
            objetoInvertido[valor] = chave;
        }
    }
    return objetoInvertido;
}

const meuObjeto = {"a": "b"};
const objetoInvertido = inverterChavesValores(meuObjeto);

console.log(objetoInvertido);