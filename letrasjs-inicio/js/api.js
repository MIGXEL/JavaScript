export class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    async obtenerLyrica(artista, cancion) {
        const datos = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);

        const respuestaJason = await datos.json();

        return {
            respuestaJason
        }
    }
}