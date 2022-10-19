// Filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos

// retorne os numeros maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callBackFilter(valor){
//     return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callBackFilter);
// console.log(numerosFiltrados);
//--------------------------------------------------------------------------------------
// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados)
// _____________________________________________________________________________________

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const maisQue50 = pessoas.filter(obj => obj.idade > 50);
console.log(maisQue50);

const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);
