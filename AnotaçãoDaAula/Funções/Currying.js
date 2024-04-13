function multi(a) {
    return function(b){
        return a + b;
    };
}

console.log(multi(5)(10)); // Saída: 15
