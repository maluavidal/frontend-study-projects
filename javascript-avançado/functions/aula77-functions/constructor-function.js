//Constructor function -> objetos
//Factory function -> objetos
//Constructor -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    //privados
    const ID = 123456;
    const metodoInterno = function() {

    };
    //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
p1.metodo();
