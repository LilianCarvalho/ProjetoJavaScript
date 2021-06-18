var codeOne = 7
var valueOne = 20.00
var amountOne = 10
var codeTwo = 8
var valueTwo = 30.00
var amountTwo = 7
var ipi = 4

function pay() {
    return (((valueOne * amountOne) + (valueTwo * amountTwo)) * (ipi/100 + 1))
}

console.log(pay())