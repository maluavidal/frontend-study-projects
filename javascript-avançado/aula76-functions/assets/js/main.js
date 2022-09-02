function createCalculator() {
    return{
    // sempre que eu quero referenciar uma chave do meu objeto(start();buttonClicks()...)
    //dentro do objeto, eu preciso da palavra this.
    // atributos
        display: document.querySelector('.display'),

        // métodos: methods are functions stored as object properties
        start() {

            this.buttonClicks();
            this.pressEnter();
        },
        
        pressEnter() {

            document.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.showResult();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        showResult() {
            let calculation = this.display.value;

            try {
                calculation = eval(calculation);

                if(!calculation) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = calculation;

            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },


        buttonClicks() {
            // this -> calculadora
            // arrow functions nao mudam o comportamento do this, se vc tiver o this em 
            //arrow funtion, ele estará travado em quem criou o elemento
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if(el.classList.contains('btn-c')) {
                   this.clearDisplay(); 
                }

                if(el.classList.contains('btn-erase')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-equals')) {
                    this.showResult();
                }
            // }.bind(this));
            });
        },

    btnToDisplay(value) {
        this.display.focus()
        this.display.value += value;
    }

    };
}

const calculator = createCalculator();
calculator.start();
