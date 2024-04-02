let nome = 'Nael'; //Escopo global

function addNome() {
    let nome = 'Sophia'; // Escopo local ou escopo da função addNome
    console.log(nome);

    function novoNome(){
        let nome = 'Neru'; // Escopo da função novoNome
        console.log(nome);
    }
    novoNome();
}

console.log(nome);
addNome();
