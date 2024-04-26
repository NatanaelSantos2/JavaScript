/* function main (callback) {
    setTimeout(() => callback(), 2000);
}

main(() => {
    console.log("Executou!!");
}) */


/* 
    Uma função de ordem superior,
    ou higher order function (HOF),
*/

/* function dobro(n) {
    return n * 2;
}

function triplo(n) {
    return n * 3;
}

function aplicaFuncao(n, funcao) {
    return funcao(n);
}

console.log(aplicaFuncao(5, dobro)); */



//função recusiva
let i = 0;
function main() {
    debugger;
    console.log("Executou main: ", ++i);
    if (i === 1000) {
        return;
    }
    main();
}

main();