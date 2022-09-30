// Needed Output
const t0 = performance.now();
for (let i = 0; i < 99999; i++) {
    console.log(i);
}
const t1 = performance.now();
console.log(`Loop Took ${(t1 - t0).toFixed()} Milliseconds.`)
"Loop Took 1921 Milliseconds."