const cargarPosts = document.getElementById('cargar');

cargarPosts.addEventListener('click', function() {


    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function() {
        if (this.status === 200) {

            const posts = JSON.parse(this.responseText);

            let contenido = '';
            posts.forEach(post => {
                contenido += `
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                    <hr/>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }

    xhr.send();

})