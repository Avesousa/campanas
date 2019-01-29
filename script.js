var clave = "abc123";

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
    document.getElementById("opciones").style.display = "none";
    document.getElementById("carga").style.display = "inline";
    if (opcion != 3) {
        document.getElementById("nReferencia").style.display = "none";
        document.getElementById("reclamoSap").style.display = "none";
    }

}