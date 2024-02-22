function isPositivo(a) {
    if (a > 0) {
        return "Sim";
    } else if (a < 0) {
        throw new Error("Erro, Negativo");
    } else {
        throw new Error("Erro, Zero");
    }
}

function main(valores) {
    for (var valor of valores) {
        try {
            console.log(isPositivo(valor));
        } catch (error) {
            console.log(error.message);
        }
    }
}

// Teste com os valores fornecidos
main([2, -1, 0]);