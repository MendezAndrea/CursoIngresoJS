function Mostrar()
{

	//var contador=0;
	//var numero;
	//var positivo=0;
	//var negativo=0;
	//var acumuladorP=0;
	//var acumuladorN=0;
	//var contadorPositivo=0;
	//var contadorNegativo=0;
	//var contadorDeCeros=0;
	//var contadorDePares=0;
	//while(confirm("¿Desea continuar?"))
	//{
	//	contador++;
	//	numero=prompt("Ingrese un número: ");
	//	numero=parseInt(numero);
	//	if(numero>0){
	//		positivo+=numero;
	//		acumuladorP+=numero;
	//		contadorPositivo++;
	//	}else if (numero==0){
	//		contadorDeCeros++;
	//	}else{
	//		negativo+=numero;
	//		acumuladorN+=numero;
	//		contadorNegativo++;
	//	}
	//	if(numero/2==0){
	//		contadorDePares++;
	//	}
	//	console.log();

	//}
	//msj= "La suma de los números positivos es: " + acumuladorP + "<br>";
	//msj+="La suma de los números negativos es: " + acumuladorN + "<br>";
	//msj+="Entrada de números positivos: " + contadorPositivo + "<br>";
	//msj+="Entrada de números negativos: " + contadorNegativo + "<br>";
	//msj+="Entrada de ceros: " + contadorDeCeros + "<br>";
	//msj+="Entrada de números pares: " + contadorDePares+ "<br>";
	//msj+="Promedio de números positivos: " + acumuladorP/contadorPositivo + "<br>";
	//msj+="Promedio de números negativos: " + acumuladorN/contadorNegativo + "<br>";
	//msj+="Diferencia entre números positivos y números negativos: " + (acumuladorP-acumuladorN) + "<br>";
	//document.write(msj);
	var nota=-1;
	var acumuladorNota=0;
	var contadorNota=0;
	var contadorTotal=0;
	var notaMax;
	var notaMin;
	var primera=true; //bandera si es la primera vez.
	var primeraF=true;
	var primeraM=true;
	var sexo;
	var notaMaxF;
	var notaMaxM;


	while(confirm("¿Ingresa notas?")){
				 nota=prompt("Ingrese nota: ");
				 nota=parseInt(nota);
				 while(nota<1 || nota>10){
					 nota=prompt("Ingrese nota: ");
					 nota=parseInt(nota);
					}
					contadorTotal++;
					if(nota>=4){
						acumuladorNota+=nota;
						contadorNota++;
					}
					if(primera){
						primera=false;
						notaMax=nota;
						notaMin=nota;
					}else if(nota>notaMax){
						notaMax=nota;
					}else if(nota<notaMin){
						notaMin=nota;
					}
					while(sexo!="f" && sexo!="m"){
						sexo=prompt("Indique sexo del alumno: ");	
						if(primeraF){
							primeraF=false;
							notaMaxF=nota;
						}else{
							if(nota>notaMaxF){
								notaMaxF=nota;
							}
						}
						if(primeraM){
							primeraM=false;
							notaMaxM=nota;
						}else{
							if(nota>notaMaxM){
								notaMaxM=nota;
							}
						}
					}
				}
	
	msj= "Cantidad de alumnos aprobados: " + contadorNota + "<br>";
	msj+="Promedio de notas total: " + acumuladorNota/contadorTotal + "<br>";
	msj+="Nota máxima: " + notaMax + "<br>";
	msj+="Nota mínima: " + notaMin + "<br>";
	msj+="Nota máxima mujer: " + notaMaxF + "<br>";
	msj+="Nota máxima hombre: " + notaMaxM + "<br>";

	document.write(msj);
}//FIN DE LA FUNCIÓN