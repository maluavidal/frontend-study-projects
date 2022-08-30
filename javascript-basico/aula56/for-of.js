//            0123...
// const names = ['Luiz', 'Otávio', 'Henrique'];

// for (let i = 0; i < name.length; i++) {
// console.log(name[i]);
// };

// for (let i in name) {
//     console.log(name[i]);
// }

// for (let value of name) {
//     console.log(value);
// }

// names.forEach(function(value, index, array) {
//     console.log(value, index, array);
// });

const person = {
    name: 'Luiz',
    lastname: 'Otávio',
};

for (let key in person) {
    console.log(key, person[key]);
};

// For clássico - geralmente com iteráveis (array ou strings)
// For in - retorna o índice ou chave (string, array ou objetos)
// For of - retorna o valor em si (iteráveis, arrays ou strings)
