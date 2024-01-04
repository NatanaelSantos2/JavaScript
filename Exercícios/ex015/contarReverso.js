var numero = 7;
var parar = true;

do {
    console.log(numero);
    numero--;

    if (numero < 0) {
        parar = false;
    }
} while (parar);
