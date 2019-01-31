var clave = "abc123";
var idCampana;
var reclamosAbiertos = [
    ["A001", "OTRO", "COSTA RICA", 4150.0, 14.0, "Mecánica", "Falta de limpieza", "Limpieza/desgrafitización", "10/09/2018", ""],
    ["A008", "SAP", "SUCRE ANTONIO JOSE DE, MCAL.", 2917.0, 13.0, "Manual", "Rota", "Retirar", "12/09/2018", "Campana manual sin puerta retirar"],
    ["A015", "MAIL", "DORREGO AV.", 2248.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "13/09/2018", "Imagen"],
    ["A023", "MAIL", "MANSILLA LUCIO NORBERTO GENERAL", 3800.0, 14.0, "Mecánica", "Fuera de posición", "Reubicar", "17/09/2018", "Reubicar según padron en altura 3741"],
    ["A033", "ENTE", "CASTAÑON", 3390.0, 8.0, "Mecánica", "Rota", "Reparar gancho", "16/09/2018", ""],
    ["A042", "OTRO", "THAMES", 2078.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "19/09/2018", ""],
    ["A048", "OTRO", "LA PAMPA", 3656.0, 13.0, "Mecánica", "Sin TAG", "Poner TAG", "19/09/2018", "Verificar N° de TAGS"],
    ["A001", "OTRO", "COSTA RICA", 4150.0, 14.0, "Mecánica", "Falta de limpieza", "Limpieza/desgrafitización", "10/09/2018", ""],
    ["A008", "SAP", "SUCRE ANTONIO JOSE DE, MCAL.", 2917.0, 13.0, "Manual", "Rota", "Retirar", "12/09/2018", "Campana manual sin puerta retirar"],
    ["A015", "MAIL", "DORREGO AV.", 2248.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "13/09/2018", "Imagen"],
    ["A023", "MAIL", "MANSILLA LUCIO NORBERTO GENERAL", 3800.0, 14.0, "Mecánica", "Fuera de posición", "Reubicar", "17/09/2018", "Reubicar según padron en altura 3741"],
    ["A033", "ENTE", "CASTAÑON", 3390.0, 8.0, "Mecánica", "Rota", "Reparar gancho", "16/09/2018", ""],
    ["A042", "OTRO", "THAMES", 2078.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "19/09/2018", ""],
    ["A048", "OTRO", "LA PAMPA", 3656.0, 13.0, "Mecánica", "Sin TAG", "Poner TAG", "19/09/2018", "Verificar N° de TAGS"],
    ["A001", "OTRO", "COSTA RICA", 4150.0, 14.0, "Mecánica", "Falta de limpieza", "Limpieza/desgrafitización", "10/09/2018", ""],
    ["A008", "SAP", "SUCRE ANTONIO JOSE DE, MCAL.", 2917.0, 13.0, "Manual", "Rota", "Retirar", "12/09/2018", "Campana manual sin puerta retirar"],
    ["A015", "MAIL", "DORREGO AV.", 2248.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "13/09/2018", "Imagen"],
    ["A023", "MAIL", "MANSILLA LUCIO NORBERTO GENERAL", 3800.0, 14.0, "Mecánica", "Fuera de posición", "Reubicar", "17/09/2018", "Reubicar según padron en altura 3741"],
    ["A033", "ENTE", "CASTAÑON", 3390.0, 8.0, "Mecánica", "Rota", "Reparar gancho", "16/09/2018", ""],
    ["A042", "OTRO", "THAMES", 2078.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "19/09/2018", ""],
    ["A048", "OTRO", "LA PAMPA", 3656.0, 13.0, "Mecánica", "Sin TAG", "Poner TAG", "19/09/2018", "Verificar N° de TAGS"],
    ["A001", "OTRO", "COSTA RICA", 4150.0, 14.0, "Mecánica", "Falta de limpieza", "Limpieza/desgrafitización", "10/09/2018", ""],
    ["A008", "SAP", "SUCRE ANTONIO JOSE DE, MCAL.", 2917.0, 13.0, "Manual", "Rota", "Retirar", "12/09/2018", "Campana manual sin puerta retirar"],
    ["A015", "MAIL", "DORREGO AV.", 2248.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "13/09/2018", "Imagen"],
    ["A023", "MAIL", "MANSILLA LUCIO NORBERTO GENERAL", 3800.0, 14.0, "Mecánica", "Fuera de posición", "Reubicar", "17/09/2018", "Reubicar según padron en altura 3741"],
    ["A033", "ENTE", "CASTAÑON", 3390.0, 8.0, "Mecánica", "Rota", "Reparar gancho", "16/09/2018", ""],
    ["A042", "OTRO", "THAMES", 2078.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "19/09/2018", ""],
    ["A048", "OTRO", "LA PAMPA", 3656.0, 13.0, "Mecánica", "Sin TAG", "Poner TAG", "19/09/2018", "Verificar N° de TAGS"],
    ["A001", "OTRO", "COSTA RICA", 4150.0, 14.0, "Mecánica", "Falta de limpieza", "Limpieza/desgrafitización", "10/09/2018", ""],
    ["A008", "SAP", "SUCRE ANTONIO JOSE DE, MCAL.", 2917.0, 13.0, "Manual", "Rota", "Retirar", "12/09/2018", "Campana manual sin puerta retirar"],
    ["A015", "MAIL", "DORREGO AV.", 2248.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "13/09/2018", "Imagen"],
    ["A023", "MAIL", "MANSILLA LUCIO NORBERTO GENERAL", 3800.0, 14.0, "Mecánica", "Fuera de posición", "Reubicar", "17/09/2018", "Reubicar según padron en altura 3741"],
    ["A033", "ENTE", "CASTAÑON", 3390.0, 8.0, "Mecánica", "Rota", "Reparar gancho", "16/09/2018", ""],
    ["A042", "OTRO", "THAMES", 2078.0, 14.0, "Mecánica", "Volcada", "Poner en posición", "19/09/2018", ""],
    ["A048", "OTRO", "LA PAMPA", 3656.0, 13.0, "Mecánica", "Sin TAG", "Poner TAG", "19/09/2018", "Verificar N° de TAGS"]
];;

var idCalles = [[30319.0, "NEWBERY, JORGE", 0.0, 0.0, 2801.0, 2859.0], [30320.0, "NEWBERY, JORGE", 2802.0, 2860.0, 0.0, 0.0], 
[30322.0, "NEWBERY, JORGE", 0.0, 0.0, 2751.0, 2799.0], [30321.0, "NEWBERY, JORGE", 2752.0, 2800.0, 0.0, 0.0], 
[30326.0, "NEWBERY, JORGE", 0.0, 0.0, 2661.0, 2699.0], [30324.0, "NEWBERY, JORGE", 0.0, 0.0, 2701.0, 2749.0], [30325.0, "NEWBERY, JORGE", 2662.0, 2700.0, 0.0, 0.0], 
[30323.0, "NEWBERY, JORGE", 2702.0, 2750.0, 0.0, 0.0]];

var padron = [[2426.0, 3157.0, "3 DE FEBRERO", 945.0, 14.0, "PALERMO CAÑITAS", "30-04-2015", "Mecánica", "rectangular", "Ok", "link foto", "Activa", 4.0], 
[4617.0, 2920.0, "3 DE FEBRERO", 1261.0, 14.0, "PALERMO CAÑITAS", "30-04-2015", "Mecánica", "redonda", "Rota", "link foto", "Activa", 4.0], 
[2452.0, 21167.0, "ACASSUSO", 5767.0, 9.0, "LINIERS", "07-11-2014", "Mecánica", "redonda", "Quemada", "link foto", "Activa", 4.0], 
[7386.0, 22594.0, "ACASSUSO", 6365.0, 9.0, "LINIERS", "21-08-2014", "Mecánica", "redonda", "Quemada", "link foto", "Activa", 4.0], 
[2057.0, 22754.0, "ACASSUSO", 6485.0, 9.0, "LINIERS", "21-08-2014", "Mecánica", "rectangular", "Quemada", "link foto", "Activa", 6.0], 
[2053.0, 23457.0, "ACASSUSO", 6997.0, 9.0, "LINIERS", "21-08-2014", "Mecánica", "rectangular", "Quemada", "link foto", "Activa", 2.0], 
[5794.0, 5462.0, "ACHA, MARIANO, GRAL.", 1013.0, 15.0, "VILLA ORTUZAR", "31-05-2017", "Mecánica", "rectangular", "Quemada", "link foto", "Activa", 2.0], 
[5557.0, 5169.0, "ACHA, MARIANO, GRAL.", 1179.0, 15.0, "VILLA ORTUZAR", "31-05-2017", "Mecánica", "rectangular", "Quemada", "link foto", "Activa", 2.0], 
[5569.0, 5022.0, "ACHA, MARIANO, GRAL.", 1235.0, 15.0, "VILLA ORTUZAR", "01-06-2017", "Mecánica", "rectangular", "Quemada", "link foto", "Activa", 2.0], 
[5572.0, 4349.0, "ACHA, MARIANO, GRAL.", 1693.0, 15.0, "VILLA ORTUZAR", "01-06-2017", "Mecánica", "rectangular", "Quemada", "link foto", "Activa", 2.0], 
[5789.0, 4211.0, "ACHA, MARIANO, GRAL.", 1747.0, 15.0, "VILLA ORTUZAR", "31-05-2017", "Mecánica", "rectangular", "Quemada", "link foto", "Activa", 3.0]];



function idDeCuadra(calle,altura){

 const resto = altura % 2;
 var alturaMinima;
 var alturaMaxima;

 if(resto == 0) {
   alturaMinima = 2;
   alturaMaxima = 3;
 }
 else {
   alturaMinima = 4;
   alturaMaxima = 5;
}

for(var i = 0; i < idCalles.length;i++){

    if( calle == idCalles[i][1] && altura>= idCalles[i][alturaMinima]&& altura <= idCalles[i][alturaMaxima])
    return [idCalles[i][0],idCuadra[i][4]]; // [Id de la cuadra, Comuna]
}

} // Funcion que dada una calle y una altura devuelve el id de la cuadra

function idDeCampana(idCuadra){

 //const idCuadra = idDeCuadra(calle,altura);

  for(var i = 0; i < padron.length;i++){
     
     if( idCuadra == padron [i][1])
        
        return padron [i][0];
  }
    return false;
} // funcion que dada calle y altura devuelve el id de la campana asociado


function clickear() {
    document.onkeyup = (function(e) {
        if (e.which == 13) {
            document.getElementById("boton").click();
        }
    });
}

function entrar() {
    var claveR = document.getElementById("clave").value;
    if (claveR == clave) {
        document.getElementById("ingreso").style.display = "none";
        document.getElementById("opciones").style.display = "inline";
    } else {
        validacion(false, "NO HA INGRESADO LA CLAVE CORRECTA", "aviso");
    }
}
clickear();

function validacion(estado, texto, id) {
    var id = document.getElementById(id);
    if (estado) {
        id.style.display = " inline ";
        id.style.width = "100%";
        id.style.backgroundColor = "#04B404";
        id.style.color = "#fff";
        id.style.padding = "5px";
        id.style.paddingLeft = "1px";
        id.innerHTML = texto;
    } else {
        id.style.display = " inline ";
        id.style.width = "100%";
        id.style.backgroundColor = "#FA5858";
        id.style.color = "#fff";
        id.style.padding = "5px";
        id.style.paddingLeft = "1px";
        id.innerHTML = texto;
    }
}//Valida en el DOM cual es estado de la carga, si es positivo da ingreso o carga, y si es negativo no da el ingreso.

function preCarga() {

    google.script.run.withSuccessHandler(function(e){
        reclamosAbiertos = e[2];
        padron = e[1];
        idCalles = e[0];

    }).preCarga();
}// Hace la conexión con google.

function validarOpciones(valor) {
    var opcion = document.getElementById("opcion").value;
    if (opcion == 1) {
        document.getElementById("casosAbiertos").style.display = "inline";
        document.getElementById("carga").style.display = "none";
        document.getElementById("nSap").style.display = "none";
        document.getElementById("referencia").type = "hidden";
        mostrarReclamosAbiertos();
    } else if (opcion == 2) {
        document.getElementById("carga").style.display = "inline";
        document.getElementById("nSap").style.display = "inline";
        document.getElementById("nSap").innerText = "Número de Referencia";
        document.getElementById("casosAbiertos").style.display = "none";
        document.getElementById("referencia").type = "text";
        document.getElementById("referencia").value = "NO APLICA";
        document.getElementById("referencia").disabled = true;
    } else if(opcion == 3) {
        document.getElementById("carga").style.display = "inline";
        document.getElementById("nSap").style.display = "inline";
        document.getElementById("nSap").innerText = "Número de SAP";
        document.getElementById("referencia").type = "text";
        document.getElementById("casosAbiertos").style.display = "none";
    } else if(opcion == 0){
        document.getElementById("carga").style.display = "none";
        document.getElementById("nSap").style.display = "none";
        document.getElementById("referencia").type = "hidden";
        document.getElementById("casosAbiertos").style.display = "none";
    }

} // Hay que modificar esta función para que discrimine entre las tres posibilidades, ya que en la carga con referencia la primer acción es mostrar el resumen de reclamos abiertos.

function mostrarReclamosAbiertos() {
    console.log(reclamosAbiertos);
    var tabla = document.getElementById("casos");
    console.log(tabla);
    console.log(0 < reclamosAbiertos.length);
    for (var i = 0; i < reclamosAbiertos.length; i++) {
        var fila = document.createElement("TR"); // Creo una fila nueva
        console.log("ENTRO EN EL PRIMER FOR");
        console.log(i);
        fila.setAttribute("id", ("valor" + i)); // Le envío un id, para identificar cada fila.
        for (var j = 0; j < reclamosAbiertos[i].length; j++) {
            var columna = document.createElement("TD"); // creo una columna nueva
            var textoColumna = document.createTextNode(reclamosAbiertos[i][j]); //Creo el texto que va tener la columna correspondiente
            columna.appendChild(textoColumna); // Acá inserto a la columna el texto correspondiente.
            fila.appendChild(columna); //Acá inserto la columna a la fila.
        }
        var boton = document.createElement("TD"); //creo otra columna para definir el botón de actualizar.
        boton.innerHTML = '<button onclick="actualizar('+i+')">Actualizar</button>'; //Coloca el código html para generar un botón
        fila.appendChild(boton); //Acá inserto el botón a la fila.
        tabla.appendChild(fila); //Acá inserto la fila a la tabla.
    }
} // Obtiene los reclamos abiertos desde la planilla de Coldan y los muestra en pantalla.

function actualizar(i) {
    var array = reclamosAbiertos[i];
    console.log(array);
    var idCuadra = idDeCuadra(array[2],array[3]);
    idCampana = idDeCampana(idCuadra[0]); // Le pido el id de la cuadra
    if(!idCampana){idCampana = "NO TIENE DISPONIBLE";}
    validarOpciones();
    document.getElementById("calle").value = array[2];
    document.getElementById("altura").value = array[3];
    document.getElementById("referencia").value = array[0];
    document.getElementById("tipoCampana").value = array[5];
    document.getElementById("problema").value = array[6];
    document.getElementById("comuna").value = array[4];
    document.getElementById("origen").value = array[1];
    document.getElementById("id").value = idCampana;
    document.getElementById("opcion").value = "2";
    document.getElementById("altura").focus();
    
} //Se realiza para actualizar el caso correspondiente.

