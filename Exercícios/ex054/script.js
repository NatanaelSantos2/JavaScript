function numerosPares(numero) {
    return numero % 2 === 0;
}

function numerosImpares(numero) {
    return numero % 2 !== 0;
}


//Informe seu código da função "filterArray"
function filterArray(numeros, filtro) {
    let resultado = [];
    for(let i = 0; i < numeros.length; i++) {
        if (filtro(numeros[i])){
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}



function main(numeros){
    // Informe seu código
    console.log(filterArray(numeros, numerosPares));
    console.log(filterArray(numeros, numerosImpares));
}

main([1,2,3,4,5,6,7,8,9,10]);