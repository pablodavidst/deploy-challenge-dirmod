const express = require('express');

const cotizacionesRouter = require('./api/recursos/cotizaciones/cotizaciones.routes');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/cotizacion',cotizacionesRouter);

app.listen(3005,()=>{
    console.log(`escuchando en el puerto 3005`)
})