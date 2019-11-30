class Interfaz {
    constructor() {
        this.init();

    }
    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {

                const select = document.getElementById('criptomoneda');
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {

                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            })
    }

    mostrarMensaje(mensaje, clases) {

        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    //Imprimir el resultado de la cotizacion
    mostrarResultdo(resultado, moneda, crypto) {
        console.log(resultado);
    }
}