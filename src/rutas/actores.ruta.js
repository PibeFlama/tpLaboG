const {Router}= require('express')
const router= Router()

router.get('/actores', (req,res) =>{
    res.status(200).json({mensaje: "aca van los actores"})
})



module.exports = router

