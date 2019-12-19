import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();


    //Obtener datos del formulario
    const artista = document.getElementById('artista').value;
    const cancion = document.getElementById('cancion').value;

    if (artista === '' || cancion === '') {

        //Usuarios deja los campos vacios
        UI.divMensaje.innerHTML = 'Error...Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error')
        setTimeout(() => {
            UI.divMensaje.innerHTML = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);
    } else {
        //El formulairo esta completo
        const api = new API(artista, cancion);
        api.obtenerLyrica()
            .then(datos => {
                const lirica = datos.respuestaJason.lyrics;
                if (datos.respuestaJason.lyrics) {
                    UI.divResultado.innerHTML = lirica;
                    setTimeout(() => {
                        UI.formularioBuscar.reset();
                    }, 10000);

                } else {
                    UI.divMensaje.innerHTML = ` <p>Su busqueda:</p>
                                                <strong> ${artista} - ${cancion}</strong>
                                                <p>No tiene resultados</p>`;
                    UI.divMensaje.classList.add('error')
                    setTimeout(() => {
                        UI.divMensaje.innerHTML = '';
                        UI.divMensaje.classList.remove('error');
                    }, 5000);
                }
            })

    }

})