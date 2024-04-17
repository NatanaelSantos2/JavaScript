let i = 0;

function main() {
    console.log("Executou main: ", ++i);
    if (i === 1000) {
        return;
    }
    main();
}

main();
