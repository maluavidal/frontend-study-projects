// For in -> lê os índices ou chaves do objeto
//                0        1        2
// const fruits = ['pear', 'apple', 'grape'];

// for (let index in fruits) { // lê os índices
//     console.log(fruits[index]);                       *com array*
// }

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

const person = {
    name: 'Luiz',
    lastname: 'Otávio',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}
// const key = 'name';
// // console.log(person.name);
// console.log(person[key]);

