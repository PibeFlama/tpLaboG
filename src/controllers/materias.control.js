const materias= require("../../data/materias.json");
const { message } = require("../schemas/materias.schemas");
const controller={}


const mostrarMaterias= (req,res) => {
    res.status(200).json(materias)
}

const postMateria= (req,res) =>{
    const data= req.body
    let idm=1;
    if(materias.length){
        const xm= materias.map(c=> c.id)
        idm= Math.max(...x)+1
    }
    materias.push(
        {idm,
        nombre:data.nombre,
        cuatrimestral: data.cuatrimestral,
        anio: data.anio,
        carreraId: data.carreraId})
        res.status(201).json(materias[materias.length-1])
};


const MateriasbyId = (req,res) => {
    id= req.params.id
    materia= materias.find(m => m.id==id)
    res.status(200).json(materia)
}

const deleteMateria= (req,res) => {
    id = req.params.id
    materia= materias.findIndex(m => m.id==id)
    borrar= materias.splice(materia,1)
    res.status(200).json({message: "se borró la materia: ", objeto: borrar[0]})


}


module.exports = {postMateria, mostrarMaterias, MateriasbyId, deleteMateria}