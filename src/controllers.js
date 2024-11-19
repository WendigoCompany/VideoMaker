const path = require("path");
const colors = require("colors");
const { readFile, readdir, copyFile, mkdir } = require("../forldermanager");

const process_init_files = async (pathini, origin) => {
    
    switch (pathini["type"]) {
        case "folder":
            const destiny = path.join(origin,
                (pathini["destiny"])
                    ? (pathini["destiny"])
                    : (pathini["path"].substring(pathini["path"].lastIndexOf("\\") + 1)));


            const folder_content = await readdir(pathini["path"]);


            try {
                await mkdir(destiny)
            } catch (error) {
                
            }

            for (let i = 0; i < folder_content.length; i++) {

                if(folder_content[i].includes(".json")){
                    await copyFile(path.join(pathini["path"],folder_content[i]), path.join(origin, folder_content[i])) 

                }else{
                    await copyFile(path.join(pathini["path"],folder_content[i]), path.join(destiny, folder_content[i])) 

                }
            }

            break;

        default:
            break;
    }
}
const process_init_path = (init = "", isMain) => {
    const init_data = {};
    init = init.substring(1);
    init = init.split('"')


    if (init[1].includes("->")) {
        init_data["destiny"] = (init[1].split("->"))[1];
        init[1] = init[1].split("->")[0];
    }

    const init_origin_params = init[0].split("-");

    switch (init_origin_params[0]) {
        case "fo":
            init_data["type"] = "folder";
            break;

        default:
            break;
    }




    switch (init_origin_params[1]) {
        case "jm":
            init_data["path"] = path.join(__dirname, "../", (isMain) ? ("/proyects") : (""));
            break;
        case "jh":
            init_data["path"] = path.join(__dirname, "../../Joi Helper");
            break;
        default:
            break;
    }



    init_data["path"] = path.join(init_data["path"], init[1]);

    return (init_data);
}


module.exports = { process_init_path, process_init_files, };