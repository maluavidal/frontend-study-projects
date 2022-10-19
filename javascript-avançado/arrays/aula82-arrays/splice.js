//
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// unshift
nomes.splice(0, 0, 'Luiz', 'Otávio');

// push
// nomes.splice(nomes.length, 0, 'Luiz')

// nomes.splice(índice atual, delete, el1, el2, el3);

// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

console.log(nomes); 
