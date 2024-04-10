(async () => { //await espera a promise terminar
    const data = await new Promise((resolve)=>{
        setTimeout(() =>{
            resolve("promise resolvida");
        }, 2000);
    });

    console.log(data);
})();