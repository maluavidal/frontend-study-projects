/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1992
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;

//let imc //peso/(altura*altura)
//let anoNascimento

let imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

let anoNascimento = 2022 - idade;
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso, 'kg',);
console.log('tem', alturaEmM, 'de altura', 'e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${84} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
