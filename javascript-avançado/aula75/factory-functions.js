// Factory function

function createPerson(name, lastname, altura, peso) {
    return {
        name,
        lastname,
        get fullName() {
            return `${this.name} ${this.lastname}`;
        },

        // setter
        set fullName(value) {
        value = value.split(' ');
        this.name = value.shift();
        this.lastname= value.join(' ');
        console.log(value);
        },

        fala(assunto) {
            return `${this.name} está ${assunto}.`;
        },
        altura,
        peso,
        // getter
        get imc() {
            const index = this.peso / (this.altura ** 2);
            return index.toFixed(2);
        }
    };
}

// this -> sempre vai se referir ao objeto que está chamando ele.

// quando uma funcao esta dentro de um objeto, a funcao é chamada de método

const p1 = createPerson('Luiz', 'Otávio', 1.8, 80);
p1.fullName = 'Luiz Otávio Miranda';
console.log(p1.fullName);


