var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;
var rachaG=0;
var rachaE=0;
var rachaP=0;
var maxRachaG=0;
var maxRachaP=0;
var maxRachaE=0;
var num;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	eleccionMaquina =Math.floor( Math.random()*3)+1;

}//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar();
	if(eleccionMaquina==1){
		alert("¡Empate!");
		contadorDeEmpates++;
	}else if(eleccionMaquina==2){
		alert("¡Perdió!");
		contadorDePerdidas++;
	}else{
		alert("¡Ganó!");
		contadorDeGanadas++;
	}
informar();
	switch(eleccionMaquina){
		case 1:
				contadorDeEmpates++;
				alert("Empate");
				rachaE++;
				rachaG=0;
				rachaP=0;
				if(rachaE>maxRachaE){
					maxRachaE=rachaE
				}
				break;
		case 2:
				contadorDePerdidas++;
				alert("Perdió");
				rachaP++;
				rachaG=0;
				rachaE=0;
				if(rachaP>maxRachaP){
					maxRachaP=rachaP;
				}
				break;
		case 3:
				contadorDeGanadas++;
				alert("Ganó");
				rachaG++;
				rachaP=0;
				rachaE=0;
				if(rachaG>maxRachaG){
					maxRachaG=rachaG;
				}
				break;
				}
				

}//FIN DE LA FUNCIÓN
function papel()
{
	comenzar();
	if(eleccionMaquina==1){
		alert("¡Ganó!");
		contadorDeGanadas++;
	}else if(eleccionMaquina==2){
		alert("¡Empate!");
		contadorDeEmpates++;
	}else{
		alert("¡Perdió!");
		contadorDePerdidas++;
	}
	informar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar();
	if(eleccionMaquina==1){
		alert("¡Perdió!");
		contadorDePerdidas++;
	}else if(eleccionMaquina==2){
		alert("¡Ganó!");
		contadorDeGanadas++;
	}else{
		alert("¡Empate!");
		contadorDeEmpates++;
	}


	
	informar();
}//FIN DE LA FUNCIÓN
	
function informar()
{
	console.log("Ganó: " + contadorDeGanadas);
	console.log("Empató: " + contadorDeEmpates);
	console.log("Perdió: " + contadorDePerdidas);
	console.log("Racha de empates: " + rachaE);
	console.log("Racha de ganadas: " + rachaG);
	console.log("Racha de perdidas: " + rachaP);
	console.log("Maxima racha ganada: " + maxRachaG);
	console.log("Maxima racha perdidas: " + maxRachaP);
	console.log("Maxima racha empates: " + maxRachaE);
}