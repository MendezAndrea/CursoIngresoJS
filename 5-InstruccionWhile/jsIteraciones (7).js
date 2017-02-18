function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var respuesta="si";
	var valor;
	while(contador!=respuesta){
		prompt("Ingrese número: ");
		valor= parseInt(valor);
		acumulador=acumulador+valor;
		contador++;

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN