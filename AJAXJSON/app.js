const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');






boton1.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const persona = JSON.parse(this.responseText);

            const templateHTML = `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Trabajo: ${persona.trabajo}</li>
            </ul>
            
            `;

            document.getElementById('empleado').innerHTML = templateHTML;
        }
    }

    xhr.send();
})

boton2.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const empleados = JSON.parse(this.responseText);

            let templateHTML = '';
            empleados.forEach(empleado => {
                templateHTML += `
                <ul>
                    <li>ID: ${empleado.id}</li>
                    <li>Nombre: ${empleado.nombre}</li>
                    <li>Empresa: ${empleado.empresa}</li>
                    <li>Trabajo: ${empleado.trabajo}</li>
                </ul>
                
                `;
            });
            document.getElementById('empleados').innerHTML = templateHTML;

        }
    }

    xhr.send();
})