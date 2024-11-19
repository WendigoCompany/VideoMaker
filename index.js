const bodyParser = require("body-parser");
const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");
const path = require("path");
const { path_front } = require("./path_find");
const { load_proyect_middle } = require("./src/middlewares");



app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res) => {
    res.sendFile(path_front("/components/index.html"))
})
app.get("/c", (req, res) => {
    res.sendFile(path_front("/components/console.html"))
})
app.post("/proyect", (req, res) => load_proyect_middle(req, res))




app.listen(port, () => {
    console.log("LISTEN!");

})



