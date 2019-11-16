//Variables
const carrito = document.getElementById('carrito');
const curso = document.getElementById('lista-cursos');
const listaCurso = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.getElementById('vaciar-carrito');


//AddEventListener

cargarAddEventListner();

function cargarAddEventListner() {
    // Se dispara cuando se presiona 'agregar-carrito'
    curso.addEventListener('click', comprarCurso);

    //Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Cuando se vacia el carrito
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);

    //Mostrar cursos Local Storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);

}



//Funciones

//funcion que añade curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    //Delegation para agregar carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

//Lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);


}

function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${ curso.imagen }" style ="width: 100px"/>
        </td>
        <td>${ curso.titulo }</td>
        <td>${ curso.precio }</td>
        <td>
            <a href="#!" class="borrar-curso" data-id="${ curso.id }">X</a>
        </td>    
    `;

    listaCurso.appendChild(row);
    guardarCursoLocalStorage(curso);
}

//Eliminar curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();

    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');

    }

    //Eleminar curso de Local Storage
    eliminarCursoLocalStorage(cursoId);
}

//Vaciar el Carrito
function vaciarCarrito() {
    //Forma Lenta
    //listaCurso.innerHTML = '';

    //Forma rapida (recomendada)
    while (listaCurso.firstChild) {
        listaCurso.removeChild(listaCurso.firstChild);
    }

    //vaciar Local Storage
    vaciarLocalStorage();
    return false;


}
//Almacenamos cursos del carrito al Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;

    cursos = obtenerCursosLocalStorage();
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));

}


//Comprobamos si existe registros en el local Storage
function obtenerCursosLocalStorage() {
    let cursoLS;

    if (localStorage.getItem('cursos') === null) {
        cursoLS = [];
    } else {
        cursoLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursoLS;
}

//Imprime los cursos del local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(curso => {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${ curso.imagen }" style ="width: 100px"/>
            </td>
            <td>${ curso.titulo }</td>
            <td>${ curso.precio }</td>
            <td>
                <a href="#!" class="borrar-curso" data-id="${ curso.id }">X</a>
            </td>    
        `;

        listaCurso.appendChild(row);
    });
}

//Eliminar del curso por el Id en Local Storage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(cursoId, index) {
        if (cursoId.id === curso) {
            cursosLS.splice(index, 1);
        }
    })

    localStorage.setItem('cursos', JSON.stringify(cursosLS));

}

//Elimina todosd los cursos del Local Storage
function vaciarLocalStorage() {
    localStorage.clear();
}