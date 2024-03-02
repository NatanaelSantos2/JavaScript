function* fibonacciGenerator(n) {
    let previous = 0;
    let current = 1;
    yield previous;
    yield current;

    for (let i = 2; i < n; i++) {
        let next = previous + current;
        yield next;
        previous = current;
        current = next;
    }
}

function main(num) {

    let fibonacciSequence = fibonacciGenerator(num);
    let result = [...fibonacciSequence].pop(); 
}

main(9);
