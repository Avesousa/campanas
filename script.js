var clave = "abc123";
var idCampana;
var verificacionDeCampana;
var estados = ["Estados","La campana no está","Quemada","Rota","Volcada","Fuera de posición",
"Falta de limpieza","Sin TAG","Sin ID","Sin ploteo","Falla Inexistente","Planificación","Operable"];
var acciones = [
        [
            "Acciones"
        ],
        [
            "Reposición",
            "Instalación de Campana",
            "Verificación"
        ],
        [
            "Reposición",
            "Retiro",
            "Verificación"
        ],
        [
            "Reposición",
            "Retiro",
            "Reparación",
            "Verificación"
        ],
        [
            "Reubicación",
            "Retiro",
            "Verificación"
        ],
        [
            "Reubicación",
            "Verificación"
        ],
        [
            "Limpieza",
            "Verificación"
        ],
        [
            "Instalación de TAG",
            "Verificación"
        ],
        [
            "Instalación de ID",
            "Verificación"
        ],
        [
            "Ploteo",
            "Verificación"
        ],
        [
            "Verificación"
        ],
        [
            "Retiro",
            "Instalación de campana",
            "Instalación de contenedor",
            "Reubicación"
        ],
        [
            "Retiro",
            "Verificación"
        ]
];
/*var jerarquiaDeAcciones = ["Acciones","Reposición","Limpieza","Verificación","Retiro",
"Reparación","Insalación de TAG","Reubicación","Instalación de ID",
"Ploteo"];*/
var html;
var htmlcargar;
var estadoAccionCargados = [];
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
[30323.0, "NEWBERY, JORGE", 2702.0, 2750.0, 0.0, 0.0], [3157.0, "3 DE FEBRERO", 900.00, 998.0, 901.0, 999.00]];
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

//Variables globales que van a hacer utilizadas para hacer el paquete de envío a Google App Script
var accion, estado;
var nuevaCampana, nuevaCuadra;

function sacarJerarquia(){
    for(var i = 1; estados.length > i; i++){
        for(var j = 0; estadoAccionCargados.length > j; j++){
            if(estados[i] == estadoAccionCargados[j][0]){
                accion = estadoAccionCargados[j][1];
                estado = estadoAccionCargados[j][0];
                return estadoAccionCargados = [];
            }
        }
    }
}//Función que ayuda a definir la jerarquia de las acciones y los estados a colocar.

function buscarCalleAltura(valor){
    for(var index = 0; index < padron.length ; index++ ){
        if(valor == padron[index][0]){
            document.getElementById("calle").value = padron[index][2];
            document.getElementById("altura").value = padron[index][3];
        }
    }
}

function buscarIdCampana(){
    var altura = document.getElementById("altura");
    var calle = document.getElementById("calle");
    if(calle.value != "" && altura.value != ""){
        var cuadra = idDeCuadra(calle.value,altura.value);
        verificacionDeCampana = cuadra;
        if(!verificacionDeCampana){return;}
        var campana = idDeCampana(cuadra);
        document.getElementById("id").value = campana;
    }
}

function hacerMayus(valor,id){
    var resultado = valor.toUpperCase();
    document.getElementById(id).value = resultado;
}

function verificacionDeIdCampana(){
    if(!verificacionDeCampana){
        alert("LA ALTURA Y CALLE INGRESADO NO SON VÁLIDOS");
        document.getElementById("altura").value = "";
        document.getElementById("calle").value = "";
        document.getElementById("calle").focus();
    }
}

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
    if( calle == idCalles[i][1] && altura>= idCalles[i][alturaMinima]&& altura <= idCalles[i][alturaMaxima]){    
        return idCalles[i][0]; // [Id de la cuadra, Comuna]
    } 
    
    
}
return false;
}

function idDeCampana(idCuadra){

 //const idCuadra = idDeCuadra(calle,altura);
  for(var i = 0; i < padron.length;i++){
     if( idCuadra == padron[i][1])
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
        html = document.body.innerHTML;
        htmlcargar = document.getElementById("carga").innerHTML;
    } else {
        validacion(false, "NO HA INGRESADO LA CLAVE CORRECTA", "aviso");
        document.getElementById("clave").value = "";
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

function validarOpciones() {
    
    limpiarCarga();

    var opcion = document.getElementById("opcion").value;
    
    switch (opcion) {
        case '1':
          document.getElementById("casosAbiertos").style.display = "inline";
          document.getElementById("carga").style.display = "none";
          document.getElementById("nSap").style.display = "none";
          document.getElementById("referencia").type = "hidden";
          mostrarReclamosAbiertos();
          break;

        case '2':
          document.getElementById("carga").style.display = "inline";
          document.getElementById("nSap").style.display = "inline";
          document.getElementById("nSap").innerText = "Número de Referencia";
          document.getElementById("casosAbiertos").style.display = "none";
          document.getElementById("referencia").type = "text";
          document.getElementById("referencia").value = "NO APLICA";
          document.getElementById("referencia").disabled = true;
          break;
        
        case '3':
          document.getElementById("carga").style.display = "inline";
          document.getElementById("nSap").style.display = "inline";
          document.getElementById("nSap").innerText = "Número de SAP";
          document.getElementById("referencia").type = "text";
          document.getElementById("referencia").disabled = false;
          document.getElementById("casosAbiertos").style.display = "none";
          break;
        
        case '0':
          document.getElementById("carga").style.display = "none";
          document.getElementById("nSap").style.display = "none";
          document.getElementById("referencia").type = "hidden";
          document.getElementById("casosAbiertos").style.display = "none";
          break;
    }
    agregarEstado();

} // Hay que modificar esta función para que discrimine entre las tres posibilidades, ya que en la carga con referencia la primer acción es mostrar el resumen de reclamos abiertos.

function mostrarReclamosAbiertos() {
    var tabla = document.getElementById("casos");
    for (var i = 0; i < reclamosAbiertos.length; i++) {
        var fila = document.createElement("TR"); // Creo una fila nueva
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
    var idCuadra = idDeCuadra(array[2],array[3]);
    idCampana = idDeCampana(idCuadra); // Le pido el id de la cuadra
    if(!idCampana){idCampana = "NO TIENE DISPONIBLE";}
    document.getElementById("carga").style.display = "inline";
    document.getElementById("nSap").style.display = "inline";
    document.getElementById("nSap").innerText = "Número de Referencia";
    document.getElementById("casosAbiertos").style.display = "none";
    document.getElementById("referencia").type = "text";
    document.getElementById("referencia").value = "NO APLICA";
    document.getElementById("referencia").disabled = true;
    /////
    document.getElementById("calle").value = array[2];
    document.getElementById("altura").value = array[3];
    document.getElementById("referencia").value = array[0];
    document.getElementById("tipoCampana").value = array[5];
    document.getElementById("problema").value = array[6];
    document.getElementById("comuna").value = array[4];
    document.getElementById("origen").value = array[1];
    document.getElementById("id").value = idCampana;
    document.getElementById("id").focus();
    
} //Se realiza para actualizar el caso correspondiente.


function agregarEstado(){
    var divPrincipal = document.getElementById("estadoAccion");
    var cantidad = (divPrincipal.childElementCount)+1;
    var div = document.createElement("DIV");
    div.setAttribute("id","ea"+cantidad);
    var selector = document.createElement("select");
    selector.setAttribute("id","e"+cantidad);
    selector.setAttribute("oninput","actualizarAcciones("+cantidad+")");
    crearOpciones(selector,estados);
    div.appendChild(selector);
    divPrincipal.appendChild(div);
    agregarAccion(div,cantidad);
}

function agregarAccion(div,cantidad){
    console.log("AGREGAR ACCION");
    console.log(cantidad);
    console.log(div);
    var selector = document.createElement("select");
    selector.setAttribute("id","a"+cantidad);
    div.appendChild(selector);
    if(cantidad == 1) {
        console.log("Entro al if de cantidad");
        var boton = document.createElement("BUTTON");
        boton.setAttribute("id","agregarMas");
        boton.setAttribute("onclick","agregarEstado();");
        boton.innerHTML = "+";
        div.appendChild(boton);
    }
    console.log("***EN AGREGAR ACCION***")
    actualizarAcciones(cantidad);
}

function actualizarAcciones(id){
    var estado = document.getElementById("e"+id).value;
    var selecta = document.getElementById("a"+id);
    selecta.innerHTML = "";
    if(id > 2){
        document.getElementById("agregarMas").style.display = "none";
    } 
    for(var i = 0; i < estados.length; i++){
        if(estados[i] == estado){
            crearOpciones(selecta,acciones[i])
        }
    } 
}

function crearOpciones(select,array){
    for(var i = 0; i < array.length; i++){
        var opcion = document.createElement("option");
        opcion.innerText = array[i];
        opcion.value = array[i];
        select.appendChild(opcion);
    }
}

function limpiar(){
    document.body.innerHTML = html;
}

function limpiarCarga(){
    document.getElementById("carga").innerHTML = htmlcargar;
}

function prepararPaquete(){
    
}

function extraerEstadoAccion(){
    for(var i = 1; i <= 3; i++){
        const estadoCargado = document.getElementById("e"+i);
        const accionCargada = document.getElementById("a"+i);
        if(estadoCargado != null){
            estadoAccionCargados.push([estadoCargado.value,accionCargada.value]);
            estadoCargado.value = estados[0];
            accionCargada.innerHTML = '<option value="'+acciones[0][0]+'">'+acciones[0][0]+'</option>';
        } else{
            return;
        }
    }
}

function enviar(){
    extraerEstadoAccion();
    sacarJerarquia();
    alert("El estado mayor es: " + estado + " y la acción mayor es: " + accion);
}

function verificarID(){
    var calle = document.getElementById("calle").value;
    var altura = document.getElementById("altura").value;
    var campana = document.getElementById("id").value;
    var cuadra = idDeCuadra(calle,altura);
    alturaFinal = altura;
    calleFinal = calle;

    for(var i of padron ){
        if(padron[i][1] == cuadra || padron[i][0] == campana){
            if(padron[i][0] != campana){
                nuevaCampana = campana;
                return alert("HA CAMBIADO EL ID DE CAMPANA EL VIEJO ID ES: " + padron[i][0] + " Y EL NUEVO " + nuevaCampana );
            } else if(padron[i][1] != cuadra){
                nuevaCuadra = cuadra;
                return alert("HA CAMBIADO EL ID DE CUADRA EL VIEJO ID ES: " + padron[i][1] + " Y EL NUEVO " + nuevaCuadra );
            } else { 
              return ;
            }
        }
    }
}



/******************Función para armar el paquete a enviar al master***********************************************/
/*Esta funcion retorna el numero de referencia en el caso de que se*/
function segunTipoFecha(){

  var fecha = 0;

/*Agregar función*/ 
return fecha;

}


/*Agregue este swtch para que devuelva el string con el dato para la última celda del master, pensando que es mejor aclarar de cual de las tres opciones proviene el registro */
function switchDeOrigen() {

    const origen = document.getElementById("opciones").value;

    switch(origen){

        case '1':

           return "Con referencia";

        case '2':

           return "Sin referencia";

        case '3':

           return "Sap";
    }
        

}

/* Función para armar el paquete que se va a escribir en el master */
function enviarRespuestaMaster() {
    

    const referencia = document.getElementById("referencia").value;
    const calle = document.getElementById("calle").value;
    const altura = document.getElementById("altura").value;
    const campana = document.getElementById("id").value;
    const cuadra = idDeCuadra(calle,altura);
    const fechaReclamo = segunTipoFecha(); // Habria que pensar una función que en caso de que sea sin referencia devuelva la misma fecha de hoy, y para los otros dos casos la fecha del reclamo
    const hoy =  new Date();
    const fechaContestacion = hoy.getDate() + "/" + (hoy.getMonth()+1)+"/"+hoy.getFullYear();
    const origen = switchDeOrigen();
    const respuestaMaster = [];


    extraerEstadoAccion();
  
    for(i=0;i < estadoAccionCargados.length;i++){
    
       respuestaMaster.push([referencia,cuadra,campana,fechaReclamo,fechaContestacion].concat(estadoAccionCargados[i].concat(origen)));

    }


    return respuestaMaster;

}


