const f = x => x + 1;
const g = x => x * 2;
const h = x => x - 1;
const compose = (f,g) => x => f(g(x));

const fg = compose(compose(f,g),h);
console.log(fg(2));