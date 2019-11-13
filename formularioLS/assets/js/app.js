//Variables
const listaTweets = document.getElementById('lista-tweets');



//Event Listeners

eventListeners();

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar tweets
    listaTweets.addEventListener('click', borrarTweet);
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
    //Añade el boton de borrar Tweet
    li.appendChild(botonBorrar);
    //Añade el tweet a la lista
    listaTweets.appendChild(li);

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

//Elimina tweet del DOM
function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        console.log(e.target.parentElement.remove());
    }

}

//Agregar tweet a Local Storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    //Obtenemos los tweets de LocalStorage
    tweets = obtenerTweetsLocalStorage();
    //Agregamos Tweet al arreglo de Tweets
    tweets.push(tweet);
    //Agregamos los Tweets a LocalStorage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Obtener los tweets de LocalStorage
function obtenerTweetsLocalStorage() {
    let tweets;

    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;

}