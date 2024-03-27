function* gerador() {
    let i = 0;
    
    while(true) {
        ++i;
        yield i;
    }
}

const g = gerador();

for(let index = 0; index < 100; index++) {
    console.log(g.next());
}
