const data = new Date('2023-04-16T05:12:10Z');

setTimeout(() => {
    const novoDia = data.getDate() - 1;
    data.setDate(novoDia);
    console.log(data);
}, 2000)