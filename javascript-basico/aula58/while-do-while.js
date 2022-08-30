// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// const name = 'Luiz';

// let i = 0;

// while (i < name.length) {
//     console.log(name[i]);
//     i++
// };

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;
// let rand = random(1, 50);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

 console.log('######');

do {
    rand = random(min, max); // primeiro, atualiza-se o valor
    console.log(rand); // depois de executar...
} while(rand !== 10); // checou-se a condição

// do while sempre executa pelo menos uma vez 