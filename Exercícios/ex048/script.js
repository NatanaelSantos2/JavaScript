function inverterString(s) {
    try {
        if (typeof s !== 'string') {
            throw new Error("s.split is not a function");
        }
        const invertedString = s.split('').reverse().join('');
        console.log(invertedString);
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}

function main(valor) {
    inverterString(eval(valor));
}

main('Number(1234)');
