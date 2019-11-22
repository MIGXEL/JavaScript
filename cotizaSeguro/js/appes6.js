//Constructor para seguro
class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;

    }
    cotizarSeguro() {
        /*
            1 = Americano   1.15
            2 = Asiatico    1.05
            3 = Europeo     1.35
        */
        let cantidad;
        const base = 2000;

        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
        }
        //Leer el año
        const diferencia = new Date().getFullYear() - this.anio;
        //Cada año de diferencia hay que reducir 3% el valor del seguro
        cantidad -= ((diferencia * 3) * cantidad) / 100;
        /*
            si el seguro es basico se multiplica por 30% mas
            si el seguro s completo 50% mas
        */

        if (this.tipo === 'basico') {
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }

        return cantidad;
    }
}


//Todo lo que se muestra
class Interfaz {
    mostrarError(mensaje, tipo) {
        const div = document.createElement('div');

        if (tipo === 'error') {
            div.classList.add('mensaje', 'error');
            div.setAttribute('id', 'mensaje');
            div.innerHTML = `${mensaje}`;
            formulario.insertBefore(div, document.querySelector('.form-group'));

        } else {
            div.classList.add('mensaje', 'correcto');
            div.innerHTML = `${mensaje}`;
            formulario.insertBefore(div, document.querySelector('.form-group'));
            setTimeout(function() {
                document.querySelector('.mensaje').remove();
            }, 3000)
        }


    }

    //mensaje que se imprime en el HTML
    mostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        let marca;
        switch (seguro.marca) {
            case '1':
                marca = 'Americano';
                break;

            case '2':
                marca = 'Asiatico';
                break;
            case '3':
                marca = 'Europeo';
                break;
        }
        const div = document.createElement('div');
        div.innerHTML = `
            <p class="header">Tu resumen:</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: ${total}</p>
        `;

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
        setTimeout(() => {
            spinner.style.display = 'none';
            resultado.appendChild(div);

        }, 3000);


    }


}



//Event Listeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();

    //revisamos que los campos no esten vacios
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        const mens = document.getElementById('mensaje');
        if (mens != null) {
            mens.remove();
        }
        const resultado = document.querySelector('#resultado div');
        if (resultado != null) {
            resultado.remove();
        }
        //Interfaz imprimiendo error
        interfaz.mostrarError('Los campos no deben estar vacios, completa e intente de nuevo', 'error');

    } else {

        //Limpiar resultados anteriores
        const resultado = document.querySelector('#resultado div');
        if (resultado != null) {
            resultado.remove();
        }
        const mens = document.getElementById('mensaje');
        if (mens != null) {
            mens.remove();
        }
        //Instanciar seguro y mostrar resultado
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro();
        //mostrar ele resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarError('Cotizando...', 'correcto');
        formulario.reset();

    }
})





//
const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');
for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
    min
}