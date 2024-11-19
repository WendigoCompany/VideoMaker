const path = require("path");
const { readFile } = require("../forldermanager");
const { process_init_path, process_init_files } = require("./controllers");
const cc = require("./colors");


const proyect_root = path.join(__dirname, "../proyects/");

const proyect_files =[];



const load_proyect_middle =async (req,res)=>{

    

let proyect_init = req.body.p;


if(proyect_init){
    cc("amarillo", "Cargando parametros del proyecto")

    proyect_init = proyect_init.split(",");
    const init_load_params =[];
    for (let i = 0; i < proyect_init.length; i++) {
        init_load_params.push (   process_init_path(proyect_init[i] , (i == 0) ? (true) : (false)) )
    }
    

    
    cc("ama", "Se han cargado " + init_load_params.length + " parametros.")
    cc("ama", "Comenzando actualizacion de los recursos...")

    

    for (let i = 1; i < init_load_params.length; i++) {
        await process_init_files(init_load_params[i], init_load_params[0]["path"])
        
    }
    cc("ama", "Recursos actualizados")


    res.status(200).json({name : init_load_params[0]["path"].substring(init_load_params[0]["path"].lastIndexOf("\\") + 1)})
}else{
    res.status(500).json({})
}


// if(proyect_name){
//     try {
//         const file = await readFile(path.join(proyect_root, proyect_name))

//     } catch (error) {
        
//     }
// }

}

module.exports ={load_proyect_middle, };