const Joi = require("joi")
const plataformasP= ["yt" ,"netflix", "hbo"];

const serieSchema = Joi.object().keys(
    {
        serie: Joi.string().max(50).required().messages({
            "string.max": "el nombre no debe pasar los {#limit}",
            "string.empty":"nombre no puede ser vacio",
            "any.required":"nombre es requerido"
        }),
        plataforma: Joi.string().required().valid(...plataformasP).messages({
            "string.empty":"plataforma no puede ser vacio",
            "any.required":"plataforma es requerido",
            "any.only": `las plataformas permitadas son: ${plataformasP}`
        }),
        disponible: Joi.boolean().required().messages({
            "any.required":"disponible es requerido",
            "any.only": "los valores permitos son true o false"
        })
    }
)

// parametros con parametros dentro y parametros que sean listas en 1:15.00 https://www.youtube.com/watch?v=bE1uC8dZSBA&ab_channel=GerardoMartinGonzalezTulian
module.exports= serieSchema











