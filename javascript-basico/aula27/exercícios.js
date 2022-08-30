const numero=Number(prompt ('Digite um número:'));
const numeroTitulo = document.getElementById('número-título');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML=numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;