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


function calcularComprimento() {

	var raio = Number(document.getElementById('raio').value); // entrada



	// C = 2 * PI * raio

	var C = 2 * Math.PI * raio; // processamento

	C = C.toFixed(2);



	document.getElementById('C').value = C; // saída

}

function calcularArea() {

	var raio = Number(document.getElementById('raio').value); 



	// A = PI * raio2

	var A = Math.PI * Math.pow(raio, 2); 

	A = A.toFixed(2);



	document.getElementById('A').value = A; 

}


function calcularVolume() {

	var raio = Number(document.getElementById('raio').value); 



	// A = PI * raio2

	var V = 3/4 * Math.PI * Math.pow(raio, 3); 

	V = V.toFixed(2);



	document.getElementById('V').value = V; 

}

