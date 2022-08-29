const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numbers.length) {
    let number = numbers[i];

    if (number === 2) {
        i++;
        continue; // continua para a próxima iteração
    }

    console.log(number);

    if (number === 7) {
        i++;
        break; // sai do laço
    }

    i++; // grealmente, a variável de controle se inicializa no final do laço
}

// for (let number of numbers) {

//     if (number === 2){
//         continue; //pula para a próxima iteração
//  }    
 
//     if (number === 7) {
//         break;
//     }
//       console.log(number);
// }