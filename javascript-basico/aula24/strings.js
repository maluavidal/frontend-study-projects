//             01234567
let umaString='um texto';
//               0123456789
let outraString='o rato roeu a roupa do rei de roma.';
//let uma String = um,\"texto\"";
//barra invertida=caracter de escape, permite a utilização de aspas duplas dentro da string determinada por aspas duplas.
console.log(umaString[4]);
console.log(umaString.indexOf('o'));
console.log(umaString.lastIndexOf('e'));
console.log(umaString.match(/[a-z]/));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search('x'));
console.log(umaString.replace('um', 'outro'));
console.log(outraString.replace('r','g'));
console.log(outraString.replace(/r/g,'g'));
console.log(outraString.length);
console.log(outraString.slice(2, 6));
console.log(outraString.split(' ', 2));
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());
