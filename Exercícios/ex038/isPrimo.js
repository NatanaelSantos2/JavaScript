function main(numeros) {
    function ePrimo(numero) {
      if (numero < 2) return false;
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primos = numeros.filter(numero => ePrimo(numero));
    console.log(primos);
}
  
main([51, 52, 74, 46, 20, 82, 59, 39, 77, 23]);