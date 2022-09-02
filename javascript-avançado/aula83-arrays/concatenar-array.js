// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
// console.log(a3);

// ... rest -> ... spread

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8 ,9]];
console.log(a3);

// se eu escrevesse [7, 8, 9], sem o ..., retornaria o array literal,, isso serve tanto p arrays, quanto p objetos