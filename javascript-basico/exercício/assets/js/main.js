const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const button = document.getElementById('botao')
const resposta = document.getElementById('resposta')

// button.addEventListener('click' , function(event) {
//     event.preventDefault();
// }) 

button.addEventListener('click' , e => e.preventDefault()) 

function calcular() {
    const pesoValue = peso.value;
    const alturaValue = altura.value;

    let imc = pesoValue / (alturaValue*alturaValue);

    if (imc > 18.5 && imc < 24.9) {
        resposta.classList.add('green-background');
    } else {
        resposta.classList.add('red-background');
    };
    
    if(imc < 18.5) {
        const node = document.createTextNode(`Seu IMC é ${imc} (Abaixo do peso)`);
        resposta.appendChild(node);
    } else if (imc > 18.5 && imc < 25) {
        const node = document.createTextNode(`Seu IMC é ${imc} (Peso normal)`);
        resposta.appendChild(node);
    } else if (imc === 25 && imc <= 29.9) {
        const node = document.createTextNode(`Seu IMC é ${imc} (Sobrepeso)`);
        resposta.appendChild(node);    
    } else if (imc === 30 && imc <= 34.9) {
        const node = document.createTextNode(`Seu IMC é ${imc} (Obesidade grau 1)`);
        resposta.appendChild(node);
    } else if (imc === 35 && imc <= 39.9) {
        const node = document.createTextNode(`Seu IMC é ${imc} (Obesidade grau 2)`);
        resposta.appendChild(node);    
    } else if (imc > 40) { 
        const node = document.createTextNode(`Seu IMC é ${imc} (Obesidade grau 3)`);
        resposta.appendChild(node);    
    } 
}








