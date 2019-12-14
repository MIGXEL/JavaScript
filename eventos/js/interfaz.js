class Interfaz {
    constructor() {
        this.init();

        this.listado = document.getElementById('resultado-eventos');
    }

    init() {
        this.imprimirCategorias();
    }

    imprimirCategorias() {
        const listadoCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categorias.categories;

                const selectCategoria = document.getElementById('listado-categorias');

                cats.forEach(cat => {

                    const opcion = document.createElement('option');
                    opcion.value = cat.id
                    opcion.appendChild(document.createTextNode(cat.name_localized));

                    selectCategoria.appendChild(opcion);

                });
            })
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        const buscadorDiv = document.getElementById('buscador');
        buscadorDiv.appendChild(div);

        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }

    limpiarMensaje() {
        const alert = document.querySelector('.alert');

        if (alert) {
            alert.remove();
        }
    }
}