var clave = "abc123";
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
var idCalles = [];
var padron = [];

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
}


function validarOpciones() {
    var opcion = document.getElementById("opcion").value;
    if (opcion == 1) {
        document.getElementById("casosAbiertos").style.display = "inline";
        document.getElementById("carga").style.display = "none";
        document.getElementById("nSap").style.display = "none";
        document.getElementById("reclamoSap").style.display = "none";
        mostrarReclamosAbiertos();
    } else if (opcion != 3) {
        document.getElementById("carga").style.display = "inline";
        document.getElementById("nSap").style.display = "none";
        document.getElementById("reclamoSap").style.display = "none";
        document.getElementById("casosAbiertos").style.display = "none";
    } else {
        document.getElementById("carga").style.display = "inline";
        document.getElementById("nSap").style.display = "inline";
        document.getElementById("reclamoSap").style.display = "inline";
        document.getElementById("casosAbiertos").style.display = "none";

    }
} // Hay que modificar esta función para que discrimine entre las tres posibilidades, ya que en la carga con referencia la primer acción es mostrar el resumen de reclamos abiertos

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
        boton.innerHTML = '<button onclick="actualizar("' + i + ')">Actualizar</button>'; //Coloca el código html para generar un botón
        fila.appendChild(boton); //Acá inserto el botón a la fila.
        tabla.appendChild(fila); //Acá inserto la fila a la tabla.
    }
} // Obtiene los reclamos abiertos desde la planilla de Coldan y los muestra en pantalla.
//cualquier cosa
function actualizar(i) {
    alert("NO ESTÁ REALIZADA AÚN PERO EL ID ES: " + i)
} //Se realiza para actualizar el caso correspondiente.