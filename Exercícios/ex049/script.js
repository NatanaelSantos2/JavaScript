function ordenarNumeros(lista, callback) {
    const listaOrdenada = [...lista].sort((a, b) => a - b);
    callback(listaOrdenada);
}

function main(numeros) {
    // Defina a função de callback que imprime cada número no console.log
    const callbackImprimir = (listaOrdenada) => {
        listaOrdenada.forEach(numero => {
            console.log(numero);
        });
    };

    // Chame a função ordenarNumeros passando a lista de números e a função de callback
    ordenarNumeros(numeros, callbackImprimir);
}

// Teste com a entrada fornecida
const numeros = [10, 5, 8, 3, 2, 1];
main(numeros);