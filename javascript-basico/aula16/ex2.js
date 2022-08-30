const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;

let imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

let anoNascimento = 2022 - idade;
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${84} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

