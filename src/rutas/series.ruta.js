const {Router} = require('express')
const controller= require("../controllers/series.control")
const middleware= require("../middlewares/series.middleware.js")
const schemaValidator= require("../middlewares/schemaValidator.js")
const serieSchema= require("../schemas/series.schema.js")
const router = Router() //esto lo comiensza a correr

//voy a sacar todo lo que use series del index y lo pongo acá y donde dice app le pongo routes.
//actualizacio de linea de arriba xd. tambien lo saco a la mierda y lo mando a "nombreQueTengaEsteArchivo.control.js" y acá queda solo lo de rourter.verbo con la url y lo que responde como en el get o los demas de acá abajo

router.get("/series", controller.getAllSeries) //esto dice basicamente "si me piden series, mandalo al controlador que te da todas las series y asi con todos"
router.get('/series/:id',middleware.validarExisteSerieById ,controller.getSeriesById);
router.delete("/series/:id",middleware.validarExisteBorrarById ,controller.deleteSeriesById)
router.post("/series", schemaValidator(serieSchema) ,controller.postSeries)
router.put("/series/:id", controller.updateSerieById)


module.exports = router //esto es para permitir exportarlo para que en otro archivo se pueda requerir y usar









