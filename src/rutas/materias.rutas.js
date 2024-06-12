const {Router} = require("express")
const router = Router()
const controller= require("../controllers/materias.control")
const middleware= require("../middlewares/materias.middlewares")
const validadorSchema= require("../middlewares/validarSchemas")
const schemaMateria= require("../schemas/materias.schemas")

router.get("/materias", controller.mostrarMaterias)
router.post("/carreras/:id/materia",validadorSchema(schemaMateria), controller.postMateria)
router.get("/materias/:id",middleware.validarExistebyId ,controller.MateriasbyId)
router.delete("/materias/:id",middleware.validarExistebyId ,controller.deleteMateria)

module.exports= router











