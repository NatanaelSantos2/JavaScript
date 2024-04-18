(function myFunc() {
    console.log("Executou func1");
})();

// Funções Autoexecutáveis (IIFEs - Immediately Invoked Function Expressions)
(async (idade) => {
    console.log("Sua idade é", idade)
    const resultado = await Promise.resolve("Promise resolvida");
    console.log("Executou", resultado);
})(24);
