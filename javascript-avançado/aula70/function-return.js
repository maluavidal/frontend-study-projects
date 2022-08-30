// return
// retorna um valor
// termina a função

// function sum(a, b) {
//     return a + b;
// }
 
// function createPerson(nome, sobrenome) {
//     return {nome, sobrenome};
// }        

// const p1 = createPerson('Luiz', 'Otávio');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };
// console.log(typeof p1);
// console.log(typeof p2);

//----------------------------------------------

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// // const helloWorld = falaFrase('Olá');
// // console.log(helloWorld('mundo!'));

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);

//----------------------------------------------

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadruplicar(n) {
//     return n * 4;
// }

function createMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = createMultiplicador(2);
const triplica = createMultiplicador(3);
const quadruplica = createMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));