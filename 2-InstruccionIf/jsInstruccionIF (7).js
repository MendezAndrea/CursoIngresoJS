function Mostrar()
{
//tomo la edad  
    var edad= document.getElementById("edad").value;
    var ec= document.getElementById("estadoCivil").value="Casado";
    if(edad<18 && ec!="Casado"){
        alert("Es muy pequeño para estar casado/divorciado.");
    
    }
	


}//FIN DE LA FUNCIÓN