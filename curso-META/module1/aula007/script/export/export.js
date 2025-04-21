// export function sum(a, b) {
//     return a + b;
// }

// export function pow(a, b) {
//     return Math.pow(a, b);
// }
// Ambos são exportações
const sum = (a, b) => a + b;
const pow = (a, b) => Math.pow(a, b);

pow(5, 10);
export { sum, pow }