function somar(){
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);

    document.getElementById('resultado').value = num1 + num2;

}

function subtrair(){
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);

    document.getElementById('resultado').value = num1 - num2;

}

function multiplicar(){
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);

    document.getElementById('resultado').value = num1 * num2;

}


function dividir(){
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);

    document.getElementById('resultado').value = num1 / num2;

}

function calcularDelta(){
    var A = Number(document.getElementById('A').value);
    var B = Number(document.getElementById('B').value);
    var C = Number(document.getElementById('C').value);

    var delta = Math.pow(B,2) - 4 * A * C;

    document.getElementById('resultado').value = delta;
}

fuction calcularComprimento(){
    var raio = Number(document.getElmentById('raio').value);

    var C = 2 * Math.PI * raio;

    document.getElementById('C').value;
}