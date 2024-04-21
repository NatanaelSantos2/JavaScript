function printUser() {
    console.log(arguments[1]);
}

printUser({
    nome: 'Nael',
    idade: 25,
    cor: 'B',
    sexo: 'M'
}, "Ola"); // Saída: Ola
