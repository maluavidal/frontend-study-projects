function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.getClicks();
        this.pressEnter();
    }
    
    this.pressEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.showResult();
        });
    }

    this.clearDisplay = () => this.display.value = '';

    this.showResult = () => {
        let calculation = this.display.value;
        try {
            calculation = eval(calculation);

            if(!calculation) {
                alert('Conta inválida');
                return;
            }
            
            this.display.value = calculation;
        } catch(e) {
            console.log(e);
            alert('Conta inválida');
            return;
        }
    }
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);
    
    this.getClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.numToDisplay(el);
            if(el.classList.contains('btn-c')) this.clearDisplay();
            if(el.classList.contains('btn-erase')) this.deleteOne();
            if(el.classList.contains('btn-equals')) this.showResult();
            });
        };
        
        this.numToDisplay = el => {
            this.display.value += el.innerText; 
            this.display.focus();
        }
    }
    


const calculator = new Calculator();
calculator.start();