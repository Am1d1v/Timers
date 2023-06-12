

console.log("Some");

const timer = setTimeout(() => {
    console.log("Timer")
}, 5000);
clearTimeout(timer);

console.log("thing");

//==============================

console.log(performance.now());

const mark1 = performance.now();

setTimeout(() => {
    const mark2 = performance.now();
    console.log ( mark2 - mark1);
}, 1000);

//=============================

setInterval(() => {
    console.log(new Date());
}, 1000);

const interval = setInterval(() => {
    console.log(new Date());
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 10000)

