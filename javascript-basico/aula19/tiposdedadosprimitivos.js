
//string, number,undefined, null, boolean
const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta p local nenhum na memória
let sobrenomeAluno = null; //nulo -> náo aponta p lugar nenhum na memória 
const aprovado = true; //BOOLEAN -> true, false (lógico)

//console.log(typeof) -> see what type of variable it is

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log