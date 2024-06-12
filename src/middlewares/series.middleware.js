const series = require("../../data/series.json") //se importa lo de series porque necesita trabajar con sus atributos para hacer validaciones que es lo que son los MW basicamente



const validarExisteSerieById= (req,res,next) => {
    const id= req.params.id  //si por alguna casulidad escribo param en vez de params, me da error porque nop entra a los parametros xdd
    const idx= series.findIndex(s => s.id==id)
    if(idx<0){
        res.status(404).json({mensaje: "no existe serie con esa id"})
    }
    next()
};

const validarExisteBorrarById= (req,res,next) =>{
    const id= req.params.id
    const idx= series.findIndex(s => s.id==id)
    if(idx<0){
        res.status(404).json({Error: `el id ${id} no se encontro`})
    }
    next()
};



module.exports= {validarExisteSerieById, validarExisteBorrarById} //si por alguna casulidad pongo parentesis acá, me da error porque como que no lo exporta





