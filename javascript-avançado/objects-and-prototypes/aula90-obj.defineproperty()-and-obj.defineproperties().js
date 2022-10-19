// defineProperty - defineProperties
function Product(name, price, inStock) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;

    Object.defineProperty(this, 'inStock', {
        enumerable: true, // mostra a chave qnd utilizar o for in ou o object.keys
        value: inStock, // valor
        writable: false, // controla se o valor pode ou n ser alterado
        configurable: true // permite ou n reconfigurar e deletar a variável
    });
    
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: false,
            configurable: true
        },
        price: {
            enumerable: true,
            value: price,
            writable: false,
            configurable: true
        }
    });
}
    
const p1 = new Product('Shirt', 20, 3);
console.log(Object.keys(p1));

for(let key in p1) {
    console.log(key);
}