//el nodemon es una herramiento que permtie hacer cambios sin tener que parar el server y volverlo a prender. supongo que lo hace solo o algo. por eso usamos nodemon y no node cuando hacen el dev en package.json
const express = require('express'); // "el ; es por buena practica jsjsaj" esto trae el modulo express

const rutas = require("./rutas") //esto me trae todo lo que este en el module.exports en el index.js de la carpeta rutas (usa el inted pero no le especifico que carpeta y esta es la predetermianda)

const app=express(); // esto ejecuta el xpress que trajimos "se le suele poner app o aplication o server".... todos los requires (importaciones) van al comienzo de todo, por buena praxis
app.use(express.json()); //esto le dice que todo lo que mande lo trate como un json

app.use(rutas.seriesRutas) //le estoy diciendo que lo la exportacion de rutas que hice en la linea 3, use el atributo que le digo despues del punto
app.use(rutas.actoresRutas)
app.use(rutas.usuariosRutas)

app.listen(777,() => {
    console.log("servidor corriendo jerfdjk")
});



    