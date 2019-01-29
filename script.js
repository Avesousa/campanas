var clave = "abc123";
var arrayReclamosAbiertos = [];
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
    document.getElementById("carga").style.display = "inline";
    if (opcion != 3) {
        document.getElementById("nSap").style.display = "none";
        document.getElementById("reclamoSap").style.display = "none";
    }
    else {
        document.getElementById("nSap").style.display = "inline";
        document.getElementById("reclamoSap").style.display = "inline";

    }
} // Hay que modificar esta función para que discrimine entre las tres posibilidades, ya que en la carga con referencia la primer acción es mostrar el resumen de reclamos abiertos

function mostrarReclamosAbiertos(){


google.script.run.withSuccesHandler(function(e){
 arrayReclamosAbiertos = e;

 for(var i;i < e.length; i++){
 
 for(var j; j < e[i].length;j++)

 }
}).reclamosAbiertos();

} // Obtiene los reclamos abiertos desde la planilla de Coldan y los muestra en pantalla.