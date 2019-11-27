document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarAPI);


function cargarTXT() {
    fetch('datos.txt')
        .then(res => {
            return res.text()
        })
        .then(empleados => {
            console.log(empleados);
            document.getElementById('resultado').innerHTML = empleados;
        })
}

function cargarJSON() {
    fetch('empleados.json')
        .then(res => { return res.json() })
        .then(data => {
            console.log(data);
            let html = '';

            data.forEach(empleado => {
                html += `
                <li>${empleado.nombre} ${empleado.puesto}</li>
            `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        })

}

//https://picsum.photos/list

function cargarAPI() {
    fetch('https://picsum.photos/list')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            let html = '';

            data.forEach(img => {
                html += `
                    <li>
                        <a target="_blank" href="${img.post_url}">Ver Imagen</a>
                    </li>
                
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        })
}