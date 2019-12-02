const cotizador = new API('1feded0a8baf9cf73d39945a0a6145f7f2e77fd9816fc92b4a5f3a32964fb999');
const ui = new Interfaz();

cotizador.obtenerMonedasAPI();



const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    const criptoMonedaSelect = document.getElementById('criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;


    //comprabar que los campos no esten vacios

    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert alert-danger text-center');
    } else {
        //consultar API

        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {

                ui.mostrarResultdo(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }
})