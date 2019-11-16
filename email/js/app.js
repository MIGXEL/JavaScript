 //Variables
 const email = document.getElementById('email');
 const asunto = document.getElementById('asunto');
 const mensaje = document.getElementById('mensaje');
 const btnEnviar = document.getElementById('enviar');
 const error = document.getElementById('er');

 //Listeners
 eventListeners();

 function eventListeners() {

     document.addEventListener('DOMContentLoaded', inicioApp);

     //Campos dek formulario
     email.addEventListener('blur', validarCampos);
     asunto.addEventListener('blur', validarCampos);
     mensaje.addEventListener('blur', validarCampos);

 }





 //Funciones
 function inicioApp() {

     btnEnviar.disabled = true;
 }

 //Validar campos 
 function validarCampos() {
     console.log('Dentro del Campo');
     error.innerHTML = 'error';
 }