function Mostrar()
{
//tomo la edad 
    var edad= document.getElementById("edad").value;
    if(edad>=18)
    {
        alert("Mayor de edad.");
    }else{
        if(edad>=13 && edad<=17){
            alert("Adolescente.");
        }else{
            alert("Menor de edad.");
        }
    }

    
}//FIN DE LA FUNCIÓN