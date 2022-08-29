function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}

try {                            // se não ocorrer nenhum erro, apenas o bloco try é executado.
    console.log (sum(1, 2));     // caso ocorra, o bloco catch será executado.
    console.log(sum('1', 2));
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}