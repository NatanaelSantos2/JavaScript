let elevador = {
    totalAndares: 3,
    andarAtual: 0,

    subir: function () {
        if (this.andarAtual < this.totalAndares) {
            this.andarAtual++;
            console.log(this.andarAtual);
        } else {
            console.log(this.andarAtual);
        }
    },

    descer: function () {
        if (this.andarAtual > 0) {
            this.andarAtual--;
            console.log(this.andarAtual);
        } else {
            console.log(this.andarAtual);
        }
    }
};

console.log(elevador.andarAtual);
console.log(elevador.totalAndares);

elevador.subir();
elevador.descer();
elevador.descer();
elevador.subir();
elevador.subir();
elevador.subir();
elevador.subir();