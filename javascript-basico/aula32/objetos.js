//  const nome01='Luiz';
//  const sobrenome01='Miranda';
//  const idade01='25';

//  const nome02='Maria';
//  const sobrenome02='Oliveira';
//  const idade02='55';

//  const pessoa1 = {
//     nome:'Luiz',
//     sobrenome:'Miranda',
//     idade:'25'
//  };
 
//  const pessoa2 = {
//     nome:'Maria',
//     sobrenome:'Oliveira',
//     idade:'55'
//  };

// console.log(pessoa1.nome); -> acesso

// parametros (nome, sobrenome, idade)
// argumento ('Luiz', 'Otávio', 25); argumento=valor passado para o parametro

// function criaPessoa(nome, sobrenome, idade) {
//     return{
//        nome, sobrenome, idade}
// }

// const pessoa1=criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa('João', 'Moreira', 55);
// console.log(pessoa1.nome, pessoa1.sobrenome);

// quando a função está dentro de um objeto, ela é chamada de método.

const pessoa1 = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },
     
    incrementaIdade() { // método
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
