function criarObjeto() {
    return {
      raca: "Golden retriever",
      latir: function() {
        console.log("au au");
      }
    };
  }
  
  // Uso da função
  const meuCachorro = criarObjeto();
  
  // Acessando propriedades e chamando a função
  console.log(meuCachorro.raca);
  meuCachorro.latir();