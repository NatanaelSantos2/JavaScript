setTimeout(() => {
    console.log("setTimeout");
}, 2000);

console.log("Global");


async function main() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolvida");
        }, 2000);
    });

    console.log(data);
}

main();
