/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (begint, symbol) - valores copiados
Referência (mutável) - array, object, function - passados por referência
*/
// let a = 'A';
// let b = 'a' // cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log (a, b);

// let a = [1, 2, 3];
// let b = a;
// let c = b;
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b; 

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);

const a ={
    nome: 'Luiz',
    sobrenome:'Otávio'
};
const b = {...a}; // spread -> espalha o valor de a dentro de b, assim, o valor de b se torna independente

a.nome = 'João';
console.log(a);
console.log(b);