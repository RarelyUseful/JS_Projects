function add(a, b) {
    return (a + b);
}
function sub(a, b) {
    return (a - b);
}
function mul(a, b) {
    return (a * b);
}
function div(a, b) {
    return (a / b);
}

let calc = (function(x, y) {
    let obj = {
        param: {
        x: x,
        y: y,
        },
        operation: null,
        setOperation: setOperation,
        calculate: calculate,
    };
    function setOperation(operation){
        this.operation=operation;
    }
    function calculate(){
        return this.operation(this.param.x, this.param.y);
    }
    return obj;
})(10, 4);

calc.setOperation(div);
console.log(calc.calculate());