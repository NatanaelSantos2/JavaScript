function main(numeros) {
    try {
        let soma = 0;
        for (let i = 0; i < numeros.length; i++) {
            const tipo = typeof(numeros[i]);
            
            if (tipo === "string" || isNaN(numeros[i])) {
                throw new Error("Erro: a sequência contém valores não numéricos.");
            } else if (tipo === "number") {
                soma += numeros[i];
            }
        }
        if (!isNaN(soma)) {
            console.log(soma);
        }

    } catch (error) {
        console.log(error.message);
    }
}

main([1, '2', 3, 4, 5]);