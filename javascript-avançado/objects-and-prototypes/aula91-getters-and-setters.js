function Product(name, price, inStock) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;

    Object.defineProperty(this, 'inStock', {
        enumerable: true, // mostra a chave qnd utilizar o for in ou o object.keys
        configurable: true, // permite ou n reconfigurar e deletar a variável
        get: function() {
            return inStock;
        },
        set: function(value) {
            if(typeof value !== 'number') {
                throw new TypeError('error-type');
            }
            console.log(value);
        }
    });
}

function createProduct(name) {
    return {
        get name(){
            return name;
        },
        set name(value) {
            name = value;
        }
    }
}

    // const p1 = new Product('Shirt', 20, 3);
    //     p1.inStock = 'anything';
    //     console.log(p1.inStock);
