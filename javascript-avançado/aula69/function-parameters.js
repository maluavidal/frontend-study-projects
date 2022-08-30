// function funcao() {
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
// }
//     console.log(total, a, b, c);


    // arguments -> sustenta todos os argumentos enviados, apenas para funções criadas com a palavra function
    // não funciona com arrow function

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e , f);
// }

// funcao(1, 2, 3); // retorna -> 1 2 3 undefined undefined undefined

// function funcao(a, b) {
// function funcao(a, b = 2, c = 4) {
//     b = b || 2;
//     console.log(a + b + c);
// }
// funcao(2, 0, 20);

// funcao(2, '', 10); -> resulta em concatenação, ou seja, 220.
// para que b não assuma o valor padrão -> funcao(2, undefined, 20).

// function funcao({ nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// function funcao([ valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Luiz Otávio', 'Miranda', 30]);

// funcao({ nome:'Luiz', sobrenome: 'Otávio', idade: 20 });

// let obj = { nome:'Luiz', sobrenome: 'Otávio', idade: 20 };
// funcao (obj);

function contador(operador, acumulador, ...numeros) {
    // ... = rest operator, usado no último parâmetro da funcao
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
contador('+', 0, 20, 30, 40, 50);
// contador('+', 0, [20, 30, 40, 50]);