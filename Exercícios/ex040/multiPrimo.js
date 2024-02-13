let calculador = (n) => {
    let resultado = n % 2;

    if(resultado > 0){
        return n * 3
    }else{
        return n * 2
    }
}

function main(n) {
    if (calculador.prototype === undefined) {
        console.log(calculador(n));
    } else {
        console.log("É necessário definir uma arrow function");
    }
}

main(2);