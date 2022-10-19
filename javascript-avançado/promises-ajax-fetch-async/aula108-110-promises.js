function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAí(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('cai no erro');
                return;
            }
            resolve(msg.toUpperCase() + ' - passei na promise');
            return;
        }, tempo)
    });
}



// esperaAí('Fase 1', random(0, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAí('Fase 2', random())
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAí('Fase 3', random())
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('terminamos na fase:', fase)
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = esperaAí('Fase 1', random());
        console.log(fase1);
        
        setTimeout(function() {
            console.log('essa promise estava pendente', fase1)
        }, 1100);
        const fase2 = await esperaAí('Fase 2', random());
        console.log(fase2);
    
        const fase3 = await esperaAí('Fase 3', random());
        console.log(fase3);
    
        console.log('terminamos na fase: ', fase3)
    } catch(e) {
        console.log(e);
    }
    
}

executa()
















// function baixaPagina() {
//     const emCache = true;

//     if (emCache) {
//         return Promise.resolve('pagina em cache');
//     } else {
//         return esperaAí('baixei a página', 3000);
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina);
//     })
//     .catch(e => console.log('ERRO', e));

// Promise.all: vai tentar resolver todas, caso uma dê errado, todas são rejeitadas.
// Promise.race: vai tentar resolver uma a uma e vai retornar a primeira que for resolvida
// Promise.resolve Promise.reject

// esperaAí('conexão com o BD', random(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAí('buscando dados da BASE', random(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAí(22222, random(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .then(() => {
//         console.log('exibe dados na tela');
//     })
//     .catch(e => {
//         console.log('ERRO:', e);
//     });
//     console.log('isso aq será exibido antes de qualquer promise');
//     // codigo assincrono, as promises acontecem em paralelo ao código;