let i = 0;
let cont = 1;
function calculaFatorial(n) {
    
    if(++i > n) {
        return;
    }
    cont *= i;
    calculaFatorial(n);
    return cont;
}

function main(num) {
    console.log(calculaFatorial(num));
    
}

main(3);