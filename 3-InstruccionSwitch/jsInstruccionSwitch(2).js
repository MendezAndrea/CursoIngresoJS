function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
//switch(mesDelAño){
    //case "Julio":
    //case "Agosto":
     //       alert("¡Abrigate que hace frío!");
       //     break;
    //case "Septiembre":
    //case "Octubre":
    //case "Noviembre":
    //case "Diciembre":
    //case"Enero":
      //      alert("Ya pasamos el frío, ¡ahora calor!");
       //     break;
    //case "Febrero":
    //case "Marzo":
    //case "Abril":
    //case "Mayo":
    //case "Junio":
            //alert("Falta para el invierno.");
            //break;
//}
if(mesDelAño=="Julio" || mesDelAño=="Agosto"){
    alert("Abrigate que hace frío.")
}else if(mesDelAño=="Enero" || mesDelAño=="Diciembre" || mesDelAño=="Noviembre" || mesDelAño=="Octubre" || mesDelAño=="Septiembre"){
    alert("Ya pasamos el frío, ¡ahora calor!");
}else{
    alert("Falta para el invierno.");
}



}//FIN DE LA FUNCIÓN