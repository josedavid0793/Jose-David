function validar() {
	var nombre;
	var motivo;
	var correo;
	var mensaje;


	nombre = document.getElementById("nombre").value;
	motivo = document.getElementById("motivo").value;
	correo = document.getElementById("correo").value;
	mensaje = document.getElementById("mensaje").value;

     if (nombre ==="") {
     	alert("Ingrese el nombre");
     	return false;
     }else if (motivo===""){
        alert("Ingrese el motivo");
        return false;
     }else if (correo==="") {
     	alert("Ingrese el correo");
        return false;
    }else if (mensaje==="") {
        alert("Ingrese el mensaje");
        return false;
    }else{
    	alert("Mensaje enviado.....");
    }

  }



