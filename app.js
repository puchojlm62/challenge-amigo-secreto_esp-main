// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Iniciación de variables
let listaDeAmigos = [];  // Esta variable almacena la lista de los amigos ingresados
let cantidadAmigos = 0; // Almacena la cantidad de amigos ingresados
let mensajeAyuda = ""; // Esta variable se utiliza para mostrar mensajes al usuario

// Funciones
function agregarAmigo() {  // Esta función agrega amigos a la lista
    let nombreIngresado = document.getElementById('amigo').value;
    if (validarNombre(nombreIngresado)) {
        // Ingresa el nombre a la lista y limpia la caja
        listaDeAmigos.push(nombreIngresado);
        cantidadAmigos= listaDeAmigos.length;
        limpiarCaja();
        limpiarLista();
        mostrarLista();
    } else {
        // Indica mensaje de error
        alert ("Por favor, ingrese un nombre válido");
    }
}
function sortearAmigo() {  // Estaa función selecciona un amigo de la lista y lo muestra
    if (cantidadAmigos < 2) {
        // Muestra mensaje de no poder sortear por falta de suficientes amigos
        alert ("Necesita ingresar dos o más amigos para poder sortear");
    }  else   {
     //   Selecciona y muestra el amigo sorteado
        let indice = generarIndice();
        let amigoSorteado = document.getElementById('resultado');
        limpiarLista();
        amigoSorteado.innerHTML=`El amigo secreto sorteado es: ${listaDeAmigos[indice]}`;
    }
    
}
function mostrarMensaje(elemento, mensaje) {  // Esta función muestra mensajes al usuario
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = mensaje;
    return;
}
function validarNombre (nombre) { // Esta función Valida que no se ingrese texto vacío
    let correcto = true;
    if (nombre == "") {
        correcto = false;
    }
    return correcto;
}
function mostrarLista() {  // Esta función muestra la lista de nombres ingresados
    let lista = document.getElementById('listaAmigos');
    listaDeAmigos.forEach((item) => {
    lista.innerHTML += `<li>${item}</li>`;
    });
}
function limpiarLista() {  // Esta función limpia la caja de lista de amigos de HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
function generarIndice() {  //Esta función genera el indice aleatorio para seleccionar un nombre
   return Math.floor(Math.random()*cantidadAmigos);
}

mostrarMensaje('p',"Debe ingresar un nombre usando el alfabeto latino únicamente, sin caracteres especiales ni números")
