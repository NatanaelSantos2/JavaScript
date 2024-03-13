const numeros = [5, 6, 3, 1, 4];

const resultado = numeros.reduce(function (acumulador, valorAtual) {
    //console.log(acumulador, valorAtual);
    return acumulador + valorAtual;
}, 0);

console.log(resultado);

const cursos = [
    {
        nome: 'JavaScript',
        videos: 10,
    },
    {
        nome: 'PHP',
        videos: 3,
    },
    {
        nome: 'PYTHON',
        videos: 35,
    }
]

const totalVideos = cursos.reduce((acumulador, curso) => acumulador + curso.videos, 0);

console.log(`O total de videos é ${totalVideos}`)
