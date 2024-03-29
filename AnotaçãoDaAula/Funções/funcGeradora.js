// Funcção geradora(ou generator fucntion)

/* function* gerador() {
    // yield 1;
    let i = 0;
    
    while(true) {
        ++i;
        yield i;
        
    }
    
}

const g = gerador();

for(let index = 0; index < 100; index++) {
    console.log(g.next());
} */


/* //funcção construtora
const data = {nome: "nael",
    add() {
        this.idade = 29
    }
}

data.add()
console.log(data);

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const {idade, nome} = new Pessoa("Nael", 29);
console.log(nome); */

"use strict"

const myFucn = () => {
    // "use strict"
    let nome = "Nael";
    console.log("Ola", nome);
}

myFucn();
// console.log(nome);

function calculador(x, y) {
    // "use strict"
    console.log(x+ y);
}

calculador(10, 5);