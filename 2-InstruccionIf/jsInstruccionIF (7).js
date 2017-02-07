function Mostrar()
{
//tomo la edad  
    var edad= document.getElementById("edad").value;
    var ec= document.getElementById("estadoCivil").value;
    if(edad<18 && ec!="Soltero"){
        alert("Es muy pequeño para estar casado/divorciado.");
    
    }
	

    
}//FIN DE LA FUNCIÓN