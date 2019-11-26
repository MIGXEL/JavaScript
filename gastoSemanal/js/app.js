//Variables
const presupuestoUsuario = prompt('¿Cual es tu presupuesto Semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;


//Clases
//Clase de presupuesto

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);

    }

    //Metodo para ir restando presupuesto

    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);

    }
}

//Clase Interfaz maneja todo lo relacionado con el HTML
class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        // Insertar al HTML
        presupuestoSpan.innerHTML = `${ cantidad }`;
        restanteSpan.innerHTML = `${ cantidad }`;
    }

    imprimirMensaje(mensaje, tipo) {
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('text-center', 'alert');

            if (tipo === 'error') {

                divMensaje.classList.add('alert-danger');

            } else {
                divMensaje.classList.add('alert-success');
            }

            divMensaje.appendChild(document.createTextNode(mensaje));
            document.querySelector('.primario').insertBefore(divMensaje, formulario);

            setTimeout(function() {
                document.querySelector('.primario .alert').remove();
                formulario.reset();
            }, 3000)
        }
        //Inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad) {
        const gastosListados = document.querySelector('#gastos ul');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-item-center border-dark';
        li.innerHTML = `
            ${nombre}
            <span class="badge badge-info badge-pill">$ ${cantidad}</span>
        `;
        gastosListados.appendChild(li);
    }

    //Comprueba el presupuesto restante
    presupuestoRestante(cantidad) {
            const restante = document.querySelector('span#restante');
            //Leemos el presupuesto restante
            const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

            restante.innerHTML = `${presupuestoRestanteUsuario}`;

            this.comprobarPresupuesto();
        }
        //Cambiar de color el presupuesto restante
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        // comprobar el 25% del gasto
        if ((presupuestoTotal / 4) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        } else if ((presupuestoTotal / 2) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }


    }
}


//Event Listeners

document.addEventListener('DOMContentLoaded', function() {
    if (presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    } else {
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);

    }
});

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Leer del formulario de gastos

    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //Instaciar la interfaz
    const ui = new Interfaz();

    //Comprobando que los campos no esten vacios
    if (nombreGasto === '' || cantidadGasto === '') {

        ui.imprimirMensaje('Hubo un error', 'error');

    } else {
        ui.imprimirMensaje('Correcto..', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
})