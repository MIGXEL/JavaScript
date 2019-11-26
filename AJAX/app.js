document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos() {

    const xhr = new XMLHttpRequest();

    //ABRIR CONEXION
    xhr.open('GET', 'datos.txt', true);

    //una ves que carga la pagina

    xhr.onload = function() {
            // 200: correcto | 403:prohibido | 404: No encontrado
            if (this.status === 200) {
                document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
            }
        }
        //enviar request
    xhr.send();
}