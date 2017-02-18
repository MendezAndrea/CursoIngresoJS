function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var valor;

while(contador<=5){
	valor= prompt("Ingrese 5 números: ");
	valor= parseInt(valor);
	acumulador= acumulador+valor;
	contador++;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN