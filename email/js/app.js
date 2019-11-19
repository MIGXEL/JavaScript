 //Variables
 const email = document.getElementById('email');
 const asunto = document.getElementById('asunto');
 const mensaje = document.getElementById('mensaje');
 const btnEnviar = document.getElementById('enviar');
 const formularioEnviar = document.getElementById('enviar-mail');
 const resetBtn = document.getElementById('resetBtn');
 const err = document.getElementById('er');


 //Listeners
 eventListeners();

 function eventListeners() {

     document.addEventListener('DOMContentLoaded', inicioApp);

     //Campos dek formulario
     email.addEventListener('blur', validarCampos);
     asunto.addEventListener('blur', validarCampos);
     mensaje.addEventListener('blur', validarCampos);

     //Boton enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     //reset del formulario
     resetBtn.addEventListener('click', resetFormulario);

 }





 //Funciones
 function inicioApp() {

     btnEnviar.disabled = true;
 }

 //Validar campos 
 function validarCampos() {

     //Se valida la longuitud del texto
     validarLongitud(this);

     //validar unicamente el email
     if (this.type === 'email') {
         validarEmail(this);

     }

     let errores = document.querySelectorAll('.error');
     console.log(errores);
     if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {

         if (errores.length === 0) {
             btnEnviar.disabled = false;

         }
     }

 }

 function resetFormulario(e) {

     formularioEnviar.reset();
     btnEnviar.disabled = true;

     e.preventDefault();

 }

 function enviarEmail(e) {

     //Spinner al presionar enviar
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     //Gif envio de email

     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block';

     // ocultat spinner y mostrar gif mail enviado
     setTimeout(() => {
         spinnerGif.style.display = 'none';

         document.querySelector('#loaders').appendChild(enviado);

         setTimeout(() => {
             enviado.remove();
             formularioEnviar.reset();
             btnEnviar.disabled = true;
         }, 3000);
     }, 3000);



     e.preventDefault();

 }


 function validarLongitud(campo) {


     if (campo.value.length > 0) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
         err.innerHTML = "";
         err.className = "er";
     } else {
         campo.style.borderBottomColor = 'red';
         campo.classList.add('error');
         err.innerHTML = "Los campos de NO deben estar vacios";
         err.className = "er active";
     }
 }

 function validarEmail(campo) {
     const mensaje = campo.value;

     if (mensaje.indexOf('@') !== -1) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
         err.innerHTML = "";
         err.className = "er";

     } else {
         campo.style.borderBottomColor = 'red';
         campo.classList.add('error');
         err.innerHTML = "Ingrese un correo valido";
         err.className = "er active";

     }

 }