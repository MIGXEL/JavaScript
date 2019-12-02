//1feded0a8baf9cf73d39945a0a6145f7f2e77fd9816fc92b4a5f3a32964fb999

class API {
    constructor(apikey) {

            this.apikey = apikey;
        }
        //Obtener todas las monedas
    async obtenerMonedasAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //fetch a la API
        const urlObtenerMonedas = await fetch(url);
        //Respuesta en json
        const monedas = await urlObtenerMonedas.json();

        return {
            monedas
        }
    }

    async obtenerValores(moneda, criptomoneda) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return {
            resultado
        }
    }
}