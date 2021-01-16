const fetch = require('node-fetch')

const obtenerCotizacion = async (moneda_a_cotizar) => {
    try{
        const resultado_de_api = await fetch(`https://api.cambio.today/v1/quotes/${moneda_a_cotizar}/ARS/json?quantity=1&key=6482|3U5e1uoDKfbzUN2u3Te4U914R21h0Ps~`);
        const resultado_en_formato_json = await resultado_de_api.json();
        return resultado_en_formato_json.result
    }catch(err){
        throw `Error al buscar cotización en moneda ${moneda_a_cotizar}`
    }

  }

module.exports={
    obtenerCotizacion
}