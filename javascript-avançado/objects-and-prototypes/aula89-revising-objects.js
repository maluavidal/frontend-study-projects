// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };


// /*const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {
//     return(`${this.nome} está falando seu nome.`)
// };

// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }/*


// quando functions estão dentro de objetos, são chamadas de métodos.

// pessoa1.falarNome();

// console.log(pessoa.nome);
// const chave = 'nome';
// console.log(pessoa[chave]);

// delete pessoa1.nome;
// console.log(pessoa1);

//---------------------------------------------------------------------

//factory functions / constructor functions / classes

function createPerson(name, lastname) {
    return{
        name,
        lastname,
        fullName() {
            return`${this.name} ${this.lastname}`;
        }
    };
}

const p1 = createPerson('Luiz', 'Otávio');
console.log(p1.fullName());

//---

function Person(name, lastname){
    this.name = name;
    this.lastname = lastname;
}


// p2 -> (enderecomemoria) -> 'valor'
// caso nao seja desejado alterar o valor do objeto -> Object.freeze(this);
// obs.: tbm funciona com arrays
const p2 = new Person('Luiz', 'Miranda');
p2.name = 'outro valor';
console.log(p2);