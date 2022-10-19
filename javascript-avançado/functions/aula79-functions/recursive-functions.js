// funcao que se chama de volta
function recursiva(max) {
 console.log(max);
 if(max >= 10) return;
 max++;
 recursiva(max);
}

recursiva(0);