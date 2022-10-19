//valor por referencia

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes];

// novo.pop();
// console.log(nomes);
// console.log(novo);

// .shift -> retira do comeco
// .unshift -> adiciona no comeco
// .pop -> retira do final
// .push -> adiciona no final
// .slice -> fatia o array

// const removido = nomes.shift();
// console.log(nomes, removido);

// const novo = nomes.slice(0, -2);
// console.log(novo);

// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');               //separa os elementos da string dentro de um array
// console.log(nomes);

const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');                   //array volta a ser uma string
console.log(nome);
