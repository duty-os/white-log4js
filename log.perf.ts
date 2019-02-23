console.time("before");

for (let i = 0; i < 100; i++) {
    console.info("info");
}

for (let i = 0; i < 100; i++) {
    console.error(new Error("fun"));
}

console.timeEnd("before");