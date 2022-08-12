// Const com valores mutáveis

// const descreve uma variável que não pode ser reatribuída (com o operador de atribuição=). Depois de criá-la, não podemos fazer algo assim:
//     const nome='luiz;
//     nome='joão'; //erro> Assignment to constant variable.

// Porém, existe uma diferença entre variável e valor.

// Variáveis são como *um apelido para valor*, uma espécie de alias para mencionar algum valor salvo na memória.

// Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são  imutáveis, como
// *number*, *string*, *boolean*, *undefined*, *null*, *symbol*, e *begint* (os primitivos todos são imutaveis).

// Outros tipos são mutáveis, como *arrays* e *objetos* (objetos em geral são mutáveis, com exceção de *null*).

// Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o 
// caso do array, que pode ser composto por vários outros tipos de dados.

// Quando usamos *const* com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de *const* não permitir reatrubui
// ção, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

// Já quando usamos *const* com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém, os valores dentro do 
// objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeito, não ocorre a reatribuição da variável
// com sinal de atribuição = (a variável continua apontado para o mesmo local na memória), apenas a alteração de um valor interno do mesmo 
// objeto.

// Por este motivo, pode-se usar *const* com objetos mutáveis e ainad assim alterar seus valores internos. A única coisa que não vamos conse
// guir fazer é reatribuir o valor da variável.