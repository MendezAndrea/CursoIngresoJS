/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1= document.getElementById("numeroUno").value;
    var num2= document.getElementById("numeroDos").value;
    var resultado;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resultado= num1+num2;
	alert("El resultado es: " + resultado + ".");
}

function restar()
{
    var num1= document.getElementById("numeroUno").value;
    var num2= document.getElementById("numeroDos").value;
    var resultado;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resultado= num1-num2;
	alert("El resultado es: " + resultado + ".");
}

function multiplicar()
{ 
	var num1= document.getElementById("numeroUno").value;
    var num2= document.getElementById("numeroDos").value;
    var resultado;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resultado= num1*num2;
    alert("El resultado es: " + resultado + ".");  
}

function dividir()
{
    var num1= document.getElementById("numeroUno").value;
    var num2= document.getElementById("numeroDos").value;
    var resultado;
    num1=parseInt(num1);
    num2=parseInt(num2);
    resultado= num1/num2;
    alert("El resultado es: " + resultado + ".");
}

