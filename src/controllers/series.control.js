const series= require('../../data/series.json')
const controller= {} //objeto vacio


const getAllSeries = (req,res) => { //req:informacion que ingreso en la url res: lo que me va a responder
    console.log("pasando por series");
    res.status(200).json(series)
}; //se accede a estas funciones poniendo en navegador http://localhost:ip que hayamos elegido en app.listen/ lo que quierasmos ver, ej /series.


const getSeriesById = (req,res) => {
    const id= req.params.id;
    const serie=series.find(s => s.id==id)
    res.status(200).json(serie)
 
};

/*
app.delete("/series/:id", (req,res) => {
    const id= req.params.id;
    const cant=series.length;
    const filtrados= series.filter((a) => a.id!=id)
    if (cant-1 == filtrados.length) res.status(200).json({mensaje: "todo piola, se borro 👍"}) 
   else res.status(404).json({mensaje:"no se borro nada 🤬👎"})

})
*/

// delete con slice
const deleteSeriesById = (req,res) => {
    const id= req.params.id;
    const idx= series.findIndex(s => s.id == id);
    const borrados= series.splice(idx,1);
    res.status(200).json({mensaje: `el id ${id} fue borrado`, objeto: borrados[0]}) 
};

/*
app.post("/series", (req,res) => {
    const data =req.body //recibe lo que meta en el postman, foto 3 o 4 postman
    const ids = series.map(s=>s.id)
    const id= Math.max(...ids)+1;
    series.push({id,...data})
    res.status(201).json(series[series.length-1])
})
*/ //esto ta bien pero cuando creo un objeto me pone id nulo si la lista ta vacia o algo asi, el siguiente me pone id

/*
app.post("/series", (req,res) => {
    const data =req.body //recibe lo que meta en el postman, foto 3 o 4 postman
    let id=1; //inicia en 1 id? algo asi dijo profe
    if(series.length){
        const ids = series.map(s=>s.id)
        id= Math.max(...ids)+1;

    }
    series.push({id,...data})
    res.status(201).json(series[series.length-1]) //el 201 se usa la crear un objeto
})


*/ //esto tiene un problema que no escuche por corregir un error en mi codigo xdd, lo siguiente lo arregla parece
const postSeries = (req,res) => {
    const data =req.body //recibe lo que meta en el postman, foto 3 o 4 postman
    let id=1; //inicia en 1 id? algo asi dijo profe
    if(series.length){
        const ids = series.map(s=>s.id)
        id= Math.max(...ids)+1;

    }
    series.push(
        {id,
        serie:data.serie,
        plataforma:data.plataforma,
        disponible:data.disponible /*no se que carajos pero el profe soluciono algo con disponble: !!dispoible, ### creo que ya sé que es, es que sin esto pueden crear un objeto serie con menos o con más atributos y dejaria de ser polimofico, con esto obligas a que tenga este formato si o si */})
    res.status(201).json(series[series.length-1]) //el 201 se usa la crear un objeto
};

const updateSerieById= (req,res)=> {
    const id= req.params.id;
    const serie=req.body;
    const idx=series.findIndex(s=>s.id==id)
    if(idx>=0){
        series[idx]=serie;
        res.status(200).json({mensaje:`el if ${id} fue modificado`,serie:serie[idx]})

    }
    else{
        res.status(404).json({error:`el id ${id} no se encontro`})
    }

}
















module.exports= {getAllSeries, getSeriesById, deleteSeriesById, postSeries, updateSerieById} //esto lo tengo que hacer asi si no hago que el objeto controller del principio tenga a estas funciones como atributos. abajo explico.



//controller.getAllSeries= getAllSeries
//controller.getSeriesById= getSeriesById
// así asi con todos y asl final hago module.exports = {controller}




