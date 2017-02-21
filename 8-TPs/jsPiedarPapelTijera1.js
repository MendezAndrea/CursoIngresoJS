/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;
//eleccionMaquina= Math.floor(Math.random()*(4-1))-1;(wrong)!!
//declaramos la variable fuera de la funcion.
function comenzar()
{
    eleccionMaquina= Math.floor(Math.random()*(4-1))+1;
    //asignamos la variable dentro de la funcion.
    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{ 
    comenzar(); //Llamamos la función para que tome un número distinto luego de cada alert.

    if(eleccionMaquina==1){
        alert("Empate.");
    }else if(eleccionMaquina==2){
        alert("Perdió.");
    }else{
        alert("Ganó.");
    }
    //-----Otra forma de hacerlo con SWITCH----
    /*swtich(eleccionMaquina){
        case 1:
                alert("Empate.");
        case2:
                alert("Perdió.");
        default:
                alert("Ganó.");
            }*/
    
}//FIN DE LA FUNCIÓN
function papel()
{
    comenzar();
    if(eleccionMaquina==1){
        alert("Ganó.");
    }else if(eleccionMaquina==2){
        alert("Empate.");
    }else{
        alert("Perdió.");
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar();
    if(eleccionMaquina==1){
        alert("Perdió.");
    }else if(eleccionMaquina==2){
        alert("Ganó.")
    }else{
        alert("Empate.");
    }

}//FIN DE LA FUNCIÓN