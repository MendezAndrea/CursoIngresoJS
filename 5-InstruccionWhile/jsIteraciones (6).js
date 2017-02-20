function Mostrar()
{

	var contador=0;
	var acumulador=0;//hay que darle un valor para que no salga UNDEFINED
	var numero;//Lo que ingresa el usuario

while(contador<5){
	contador++;
	numero= prompt("Ingrese 5 números: ");
	numero= parseInt(numero);
	acumulador+=numero;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador; // lo divido por el contador, asi luego puedo usarlo para otro trabajo

}//FIN DE LA FUNCIÓN