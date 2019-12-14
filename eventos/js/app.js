const eventbrite = new EventBrite();
const ui = new Interfaz();


document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const textoBuscador = document.getElementById('evento').value;


    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //revisar los campos esten completados

    if (textoBuscador !== '') {

        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                console.log(eventos);
            })
            .catch(error => {
                console.log(error);
                console.log('todo mal');

            })

    } else {
        // mostrar mensaje
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger text-center mt-4');
    }
})