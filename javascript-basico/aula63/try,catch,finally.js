// try {
//     // console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('Também sou finally');
//     }

// } catch (e) {
//     console.log('Tratando o erro');

// } finally {
//     console.log('FINALLY: eu sempre sou executado');
// }

function returnTime(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('waiting for Date instance');
    }

    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
const date = new Date('01-01-1970 12:58:12'); // instancia de Date
const time = returnTime(date);
console.log(time);
} catch(e) {
//tratar erro
//console.log(e)
}finally {
    console.log('Have a nice day');
}
