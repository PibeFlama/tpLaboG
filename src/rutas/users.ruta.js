const {Router}= require("express")

const router= Router()


router.get("/users", (req,res) => {
    res.status(200).json({mensaje: "aca van los usuarios"})
})





module.exports= router
