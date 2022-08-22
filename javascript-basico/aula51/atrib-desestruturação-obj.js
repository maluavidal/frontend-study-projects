const person = {
    name: 'Luiz',
    lastname: 'Miranda',
    age: 30,
    address: {
        street: 'Av Brasil',
        number: 320
    }
};

//atribuicao via desestruturacao
const { address: {street, number} } = person;
console.log(street, number);