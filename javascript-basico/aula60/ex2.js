// escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem (se a imagem está deitada, ou seja, 
// se largura > altura).

const ePaisagem = (largura, altura) => largura > altura;

// function ePaisagem (altura, largura) {
//     return largura > altura //? true : false;
// }

console.log(ePaisagem(1200, 1024));
