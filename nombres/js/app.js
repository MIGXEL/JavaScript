const formulario = document.getElementById('generar-nombre');



//https://uinames.com/api/




formulario.addEventListener('submit', cargarApi);

function cargarApi(e) {
    e.preventDefault();

    //Leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;


    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;


    const cantidad = document.getElementById('numero').value;
    console.log(cantidad);

    let url = '';
    url += 'https://uinames.com/api/?';

    //si hay origen agregarlo a la url
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    //si hay genero agregarlo a la url
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    //si hay cantidad agregarlo a la url
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }

    console.log(url);
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (this.status === 200) {

            const nombres = JSON.parse(this.responseText);

            let htmlNombre = '<h4>Nombre Encontrados</h4>';

            htmlNombre += '<ul class="lista">';
            nombres.forEach(nombre => {
                htmlNombre += `<li>${nombre.name}</li>`;
            });


            htmlNombre += '</ul>';
            document.getElementById('resultado').innerHTML = htmlNombre;
        }
    }

    xhr.send();
}