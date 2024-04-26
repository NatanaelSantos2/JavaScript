/* 
    função auto executaveis
    (tambem conhecidas como IIFES - Imediately Invoked Function Expressions) 
*/

// function myFunc() {
//     console.lgo("Executou");
// }
//(myFunc)()

/* (function myFunc() {
    console.log("Executou func1");
})();

(async (idade) => {
    console.log("Sua idade é", idade)
    const resultado = await Promise.resolve("Promese resolvida");
    console.log("Executou", resultado);
})(24) */

//costuma colocar no inicio do programa





/* 

// CURRYING
function multi(a) {
    return function(b){
        return a + b;
    };
}

console.log(multi(5)(10)); */

/* setTimeout(() =>{
    console.log("seTmeout");
}, 2000);

console.log("Global"); */

/* async function main() { //await espera a promise terminar
    const data = await new Promise((resolve)=>{
        setTimeout(() =>{
            resolve("promise resolvida");
        }, 2000);
    });

    console.log(data);
} */

(async () => { //await espera a promise terminar
    const data = await new Promise((resolve)=>{
        setTimeout(() =>{
            resolve("promise resolvida");
        }, 2000);
    });

    console.log(data);
})();