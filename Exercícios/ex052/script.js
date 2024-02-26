function buscarLivro(titulo) {
    const livros = [
        {
            titulo: "Introdução ao JavaScript",
            autor: "João Silva",
            editora: "Editora X",
            descricao: "Este livro é um guia introdutório..."
        }, {
            titulo: "Desenvolvimento Web com Node.js",
            autor: "Maria Oliveira",
            editora: "Editora Y",
            descricao: "Este livro é um guia prático para..."
        },
    ];

    return new Promise((resolve, reject) => {
        if (!titulo) {
            reject('nenhum livro encontrado');
            return;
        }
        const livro = livros.find(livro => livro.titulo === titulo);
        if (!livro) {
            resolve('nenhum livro encontrado');
            return;
        }
        resolve([livro]);
    });
}

function main(nomeLivro) {
    buscarLivro(nomeLivro)
        .then(livro => console.log(livro))
        .catch(erro => console.log(erro));
}
