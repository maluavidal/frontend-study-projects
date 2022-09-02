// Declaração de função (function hoisting)
// function hoisting -> não importa se a função é chamada antes ou depois de sua declaração

falaOi();

function falaOi() {
    console.log('Oie.');
}

// functions are first-class objects
// funciton expression -> criar uma variável e colocar uma função dentro dela, ou seja, uma constante recebe uma função
//como dado. A variável (const) recebe a função e passa a ser uma função, por isso, pode-se tratar uma função como dado
//no javascript. Permitindo usar essa variável como parâmetro de outra função, e fazê-la executar minha função inicial.


const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

/*
function executeFunction(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executeFunction(souUmDado)
*/

// Arrow function
// Short function expression

const arrowFunction = () => {
    console.log('Sou uma arrow function.');
}
arrowFunction();

// Dentro de um objeto
const obj = {
    // falar: function() {
    falar() {
        console.log('Estou falando...')
    }
};
obj.falar();