function encontrarObjetoPorTitulo(meusObjetos, titulo) {
    for (let i = 0; i < meusObjetos.length; i++) {
        if (meusObjetos[i].titulo === titulo) {
            return meusObjetos[i];
        }
    }
    return null;
}


let meusObjetos = [{titulo: "abc", outroCampo: 123}, {titulo: "def", outroCampo: 321}];
let tituloProcurado = "abc";

let objetoEncontrado = encontrarObjetoPorTitulo(meusObjetos, tituloProcurado);

console.log(objetoEncontrado);
