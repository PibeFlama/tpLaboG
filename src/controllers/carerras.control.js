const carreras= require("../../data/carreras.json");
const controller={}


const getAllCarreras =(req,res) => {
    
    res.status(201).json(carreras)
};

const getCarreraByID= (req,res) => {
    const id= req.params.id;
    const carrera= carreras.find(c => c.id==id);
    res.status(200).json(carrera)

};

const postCarrera= (req,res) =>{
    const data= req.body
    let id=1;
    if(carreras.length){
        const x= carreras.map(c=> c.id)
        id= Math.max(...x)+1
    }
    carreras.push(
        {id,
        nombre:data.nombre,
        grado:data.grado,
        universidad:data.universidad,
        materias:data.materias})
    res.status(201).json(carreras[carreras.length-1])
};

const deleteCarreraById= (req,res) => {
    const id= req.params.id
    const posic= carreras.findIndex(c => c.id==id)
    const borrar= carreras.splice(posic,1)
    res.status(200).json({mensaje: "se borra la carrera: ", objeto: borrar[0]})
}


    

module.exports= {getAllCarreras, getCarreraByID, postCarrera, deleteCarreraById}






