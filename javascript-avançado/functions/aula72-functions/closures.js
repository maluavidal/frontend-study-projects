function returnFunction() {
    const nome = 'Luiz';
    return function() {
        return nome;
    };
}

const funcao = returnFunction();
console.log(funcao);

// habilidade que a funcao tem de acessar o seu escopo léxico