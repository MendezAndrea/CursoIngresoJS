function Mostrar()
{

	var numero;
	var max; //si le damos un valor, siempre habrá casos en los que no va a funcionar.
	var min; 
	var primera= true; //bandera 

	while(confirm("¿Desea continuar?")){	
		numero= prompt("Ingrese un número: ");
		numero= parseInt(numero);
		if(primera){
			primera=false;
			max=numero;
			min=numero;
		}else if(numero>max){  //no tiene sentido poner un >=
			max=numero;
		}else if(numero<min){
			min=numero;
		}

	}

	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;



}//FIN DE LA FUNCIÓN