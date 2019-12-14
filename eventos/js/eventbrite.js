class EventBrite {
    constructor() {
        this.token_auth = 'ZAQR6M5SB44JCXJ3RVVE';
        this.ordenar = 'date';
    }

    async obtenerCategorias() {

        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        const categorias = await respuestaCategorias.json();

        return { categorias }


    }

    async obtenerEventos(texto, categoria) {

        const respuetaEventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${texto}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
        const eventos = await respuetaEventos.json();

        return { eventos }
    }
}