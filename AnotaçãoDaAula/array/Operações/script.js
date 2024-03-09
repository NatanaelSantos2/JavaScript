let precos = [1, 3, 4, 6];

precos.push(1); // adiciona sempre no final da lista
precos.unshift(3); // adiciona no início da lista.
precos.pop(); // Remove o último item da lista
precos.shift(); // Remove o primeiro da lista
precos.splice(1, 1, 'a'); // apaga a partir do número
// splice(1 apaga, 1 so 1 número, "a" adiciona a letra a no lugar)
console.log(precos);
console.log(precos[2]); // acessa diretamente o item.
console.log(precos[(precos.length) - 1]);
