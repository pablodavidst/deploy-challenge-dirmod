const express = require('express');
const cotizacionesRouter = express.Router();
const cotizacionesController = require('../cotizaciones/cotizaciones.controller')

cotizacionesRouter.get('/dolar',(req,res)=>{

    cotizacionesController.obtenerCotizacion('USD')
    .then(cotizacion=>{
        res.status(200).json({moneda:'dolar',precio:cotizacion.value.toFixed(2)})
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})

cotizacionesRouter.get('/euro',(req,res)=>{

    cotizacionesController.obtenerCotizacion('EUR')
    .then(cotizacion=>{
        res.status(200).json({moneda:'euro',precio:cotizacion.value.toFixed(2)})
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})

cotizacionesRouter.get('/real',(req,res)=>{

    cotizacionesController.obtenerCotizacion('BRL')
    .then(cotizacion=>{
        res.status(200).json({moneda:'real',precio:cotizacion.value.toFixed(2)})
    })
    .catch(err=>{
        res.status(500).send(err)
    })

})

module.exports = cotizacionesRouter;

