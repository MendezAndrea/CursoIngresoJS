function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta=true;

	while(respuesta){
		contador++;
		numero= prompt("Ingrese número: ");
		numero= parseInt(numero);
		acumulador+=numero;
		respuesta=confirm("¿Desea continuar?");	//para ingresar datos hasta que el usuario lo decida, usamos confirm
		}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN