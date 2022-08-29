const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

// a funcao conhece o local onde foi declarado, tudo que foi declarado
// dentro dela e o que ta nos vizinhos dela (caso a variavel nao esteja
// dentro da funcao, ela irá ser buscada no pai dela, se nao encontrar
// no pai dela, no pai do pai, até chegar no escopo global, nao estando
// no escopo global, retornará undefined).

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();