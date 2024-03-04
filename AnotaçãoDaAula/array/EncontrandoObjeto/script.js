const alunos = [
    {
        nome: 'Nael',
        sobreNome: 'Santos'
    },
    {
        nome: 'Neru',
        sobreNome: 'Santos'
    },
    {
        nome: 'Sophia',
        sobreNome: 'Santos'
    }
];

const aluno = alunos.find((aluno) => aluno.nome === 'Nael');
if (aluno === undefined){
    console.log('Não existe!');
} else {
    console.log(aluno);
}
