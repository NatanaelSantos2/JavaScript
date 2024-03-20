const dataInicio = Date.now();
setTimeout(() => {
    const milisegundos = Date.now() - dataInicio;
    console.log(milisegundos / 1000);
}, 2000);
