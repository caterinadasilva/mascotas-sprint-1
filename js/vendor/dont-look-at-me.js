var resultadoHTML = document.getElementById("contenedor-mascotas");
function agregarMascota(iniciales, nick, tlf, petName, petAge, petType) {
  var resultado = "";
  resultado += "<div class='row'>";
  resultado += "<div class='col m12'>";
  resultado += "<div class='card blue-grey darken-1'>";
  resultado += "<div class='card-content white-text'>";
  resultado += "<p><strong>Nombre:</strong> " + iniciales + "</p>";
  resultado += "<p><strong>Nickname:</strong> " + nick + "</p>";
  resultado += "<p><strong>Telefono:</strong> " + tlf + "</p>";
  resultado += "<p><strong>Tipo de Mascota:</strong> " + petType + "</p>";
  resultado += "<p><strong>Nombre de Mascota:</strong> " + petName + "</p>";
  resultado += "<p><strong>Edad en años humanos:</strong> " + petAge + "</p>";
  resultado += "</div>";
  resultado += "</div>";
  resultado += "</div>";
  resultado += "</div>";
  resultadoHTML.innerHTML = resultado;
}

+function () {
    // Elementos
    var botonAgregar = document.getElementById("agregar");
    var botonMostrar = document.getElementById("mostrar");
    
    
    // Evento Click - Agregar
    var eventoAgregar = function (e) {
        e.preventDefault();
        pedirDatos();
    };
    
    var eventoMostrar = function (e) {
        e.preventDefault();
        listaMascotas();
    };
            
    // Manejadores de eventos
    botonAgregar.addEventListener("click", eventoAgregar);
    botonMostrar.addEventListener("click", eventoMostrar);
}();