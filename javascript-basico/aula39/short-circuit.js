/*
&& -> false && true -> false "o valor mesmo" 
|| -> true || false -> vai retornar "o valor verdadeiro" / precisa apenas de uma expressao verdadeira para retornar o valor verdadeiro

FALSY
-false
0
'' "" ``
null / undefined
NaN
*/
// console.log('Luiz Otávio' && 0 && 'Maria'); -> retorna 0
// console.log ('Luiz' && 'Maria'); -> retorna Maria

// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar = false;
// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true ); -> retorna 'Luiz Otávio', pois precisa de apenas uma espressao verdadeira

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario||'preto';
// console.log(corPadrao); -> retorna 'vermelho''

const a = 'false'; 
const b = null;
const c = false;
const d = 0;
const e = NaN;


console.log(a||b||c||d||e); // -> retorna false, pois n retornará boolean, mas sim o que tem valor verdadeiro, nesse caso, a string **sem aspas**