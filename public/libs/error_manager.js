const error_manager = (err)=>{
    switch (err.code) {
        case "ERR_BAD_REQUEST":
            new SA({title : "Error Server!", icon: "error", text: JSON.stringify(err.response.data.msj)})
            return {type : "server",code : err.status, msj : err.response.data.msj}
    
        default:
            new SA({title : "Error Desconocido!", icon: "error", text: JSON.stringify(err)})
            
            return {type: "noshe",code : 500, msj : ""}
    
    }
};