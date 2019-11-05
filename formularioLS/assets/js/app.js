//Variables
const listaTweets = document.getElementById('lista-tweets');



//Event Listeners

eventListeners();

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}


//FUNCIONES

// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // Leer valor del TextArea
    const tweet = document.getElementById('tweet').value;
    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    // Crear elemento y agregarle el contenido al elemento
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);
    console.log(tweet);
}