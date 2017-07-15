var mascotas = []; //Este arreglo sólo lo usaras si desarrollas la segunda parte

var edadMascotaHumano = function(tipoMascota, edadMascota){
	if(tipoMascota == "perro"){
		return calcularEdadPerro(edadMascota);
	} else if(tipoMascota == "conejo"){
		return calcularEdadConejo(edadMascota);
	} else if(tipoMascota == "gato"){
		return calcularEdadGato(edadMascota);
	}
}

var inicialesNombreApellido = function(nombre, apellido){
	return (nombre[0].charAt(0) + apellido[0].charAt(0)).toUpperCase();
}

var telefonoValido = function(telefono){
  //Input: número de teléfono móvil
  //Output: booleano
  //Verifica que el número de teléfono tenga el formato "569" + "teléfono"
	var validPhone = /^56(?=[1-9]\d{0,2}[1-9])(?=\d{2,15}$)\d+$/;	
	if(!validPhone.test(telefono)){
		return "Número de teléfono inválido"
	} else {
	 	return telefono;
	}
}

function pedirDatos(){
  //Función principal
  var nombre = datoNoVacio("su nombre:");
  var apellido = datoNoVacio("su apellido:");
  var nicknameUser = datoNoVacio("su nickname:");
  var telefono = parseInt(datoNoVacio("su: número de teléfono móvil\nDebe agregar código de Chile.\nEjemplo:'56987654321'"));
  var tipoMascota = validarMascota("especie de su mascota:");
  var nombreMascota = datoNoVacio("nombre de su mascota:");
  var edadMascota = parseInt(datoNoVacio("edad de su mascota:"));

  //Al finalizar debo llamar esta función (NO RETORNO NADA)
  agregarMascota(inicialesNombreApellido(nombre, apellido), nicknameUser, telefonoValido(telefono), nombreMascota, edadMascotaHumano(tipoMascota, edadMascota), tipoMascota);
  //esto debería sumar una nueva mascota al array Mascota[], cada vez que se crea un nuevo registro
  mascotas.push(new nuevaMascota(inicialesNombreApellido(nombre, apellido), nicknameUser, telefonoValido(telefono), nombreMascota, edadMascotaHumano(tipoMascota, edadMascota), tipoMascota));
}

function datoNoVacio(mensaje){
  //Solicita mediante un prompt con el mensaje hasta que no sea vacío
  //Retorna el valor ingresado en el prompt
  do {
  	var dato = prompt("Ingrese " + mensaje);
  } while (dato=="");
  return dato;
}
function validarMascota(mensaje){
	//Solicita mediante un prompt con el mensaje hasta que no sea vacío
  //Retorna el valor ingresado en el prompt
  do {
  	var dato = (prompt("Ingrese " + mensaje)).toLowerCase();
  } while (dato=="");
  if(dato == "perro" || dato == "gato" || dato == "conejo"){
  	return dato;
  }else{  	
	 	mostrarOtroVet();
		throw new Error("Flujo detenido");
  }
}

var calcularEdadPerro = function(edad){
	//Input: edad de perro en años
	//Output: edad de perro en humano
	//1 año de perro equivale a 7 años humanos
	return edad * 7;
}
var calcularEdadConejo = function(edad){
	//Input: edad de conejo en años
	//Output: edad de conejo en humano
	//1 semana de conejo equivale a 1 año humano
	return edad * 52;
}
var calcularEdadGato = function(edad){
  //Input: edad de gato en años
  //Output: edad de gato en humano
  //1 año de gato equivale a 4 años humanos
  return edad * 4;
}

function mostrarOtroVet(){
//Mostrar un alert con informacion de otro veterinario
//Texto libre, debe tener nombre, direccion y telefono
return alert("Lamentablemente, no tenemos especialistas para tu mascota, pero podemos recomendarte a:\nGabriel Cornejo.\n+56 9 7768 9936\nZenteno 122, Santiago Centro");
}

class nuevaMascota {
  constructor(ind, nud, tel, nm, emh, tm){
    this.inicialesUsuario = ind;
    this.nombreUsuario = nud;
    this.numeroTelefono = tel;
    this.nombreMasc = nm;
    this.edadMascHum = emh;
    this.espMasc = tm;
  }
  mostrar(){
	  resultado += "<div class='col m4'>";
	  resultado += "<div class='card purple lighten-1'>";
	  resultado += "<div class='card-content white-text'>";
	  resultado += "<p><strong>" + this.nombreMasc + "</strong></p>";	  
	  resultado += "<p><strong>Tipo de Mascota:</strong> " + this.espMasc + "</p>";
	  resultado += "<p><strong>Dueño:</strong> " + this.inicialesUsuario + "</p>";
	  resultado += "</div>";
	  resultado += "</div>";
	  resultado += "</div>";
	}
}

function listaMascotas(){
  //Recorre el arreglo de mascotas y retorna la lista de las mismas en un string
}