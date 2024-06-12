const express = require('express')
const port = process.env.port ?? 3000
const rutas=require("./rutas/carreras.ruta")
const app = express()

app.use(express.json());
app.use(rutas)

app.listen(port, ()=>{
    console.log(`server corriendo con el puerto ${port}`)
});














