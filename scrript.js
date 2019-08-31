function watch(name, color, price, modelno) {
    let clock = {
        name: name,
        color: color,
        price: price,
        modelno: modelno,
        greet: function () {
            console.log(`hello,my name is ${this.name} and my color is${this.color}`)
        }
    }
    return clock;
}
let time = watch("rado", "black", 5000, 333);
console.log(time);

// ---------------------------

function led(myName, myColor, myPrice, myModelno) {
    let tv = {
        name: myName,
        color: myColor,
        price: myPrice,
        modelno: myModelno,
        greet: function () {
            console.log(`hello,my name is ${this.name} and my color is${this.color}`)
        }
    }
    return tv;
}
let screen = watch("samsung", "black", 1500000, 333);
console.log(screen);