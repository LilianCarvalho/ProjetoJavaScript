/*

function Somar(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
           console.log (total += array[i])
        }
    }
    return total;
}
var array = [1,2,3,4,5,6,7,8,9,10];
console.log('A Soma dos números de 1 a 10 é:') + (Somar (array, 0));
*/

function arrays(numeros){
    var total = 0;
    for (var num of numeros){
    total = total + num;
    }
    return total;
}
var arraysNumeros = [1,2,3,4,5,6,7,8,9,10];
var resultados = arrays(arraysNumeros);
console.log(resultados);


//Melhorando o código 
