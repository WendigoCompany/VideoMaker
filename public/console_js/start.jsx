const handle_LoadProyect = () => {
    document.body.style.cursor = "wait";
    const data = document.querySelector("input").files[0];
    const file = data; // Obtiene el archivo seleccionado
    if (file) {
        const reader = new FileReader(); // Crea un nuevo FileReader

        // Definir lo que sucede cuando el archivo se lee correctamente
        reader.onload = async function (e) {
            // console.log(e.target.result);
            try {
                const resp = await axios.post("/proyect/", { p: e.target.result })
                sessionStorage.setItem("proyect", resp.data.name)
                window.location.reload()
            
            } catch (error) {
                error_manager(error)
            }

        };

        // Leer el archivo como texto
        reader.readAsText(file);
    }

}

document.getElementById("root").innerHTML = `
<div id="start-form">
 <input type="file" accept=".txt" />
<br />
<button onclick="handle_LoadProyect()">LOAD</button>

</div> 
`;



