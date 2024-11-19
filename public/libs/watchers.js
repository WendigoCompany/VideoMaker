document.watchers =[];


let lid =0;
const start_watcher =({
    id,
    cb,
    stade, 
    
})=>{

    if(!id){
        id = lid
        lid++
    }

    return id
}


