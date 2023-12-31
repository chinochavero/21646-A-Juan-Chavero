import "dotenv/config"
import express from "express";
import { rutaDeTareas } from "./src/routes/ruta.tareas.js";
import { startDb } from "./src/config/database.js";
import path from "node:path"
import cors from "cors"
import { fileURLToPath } from "node:url"
import swal from 'sweetalert';
import helmet from "helmet";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.json())
app.use(cors())
app.use(helmet({
    contentSecurityPolicy: false
}))

// Lo tuve que hacer asi porque no me tomaba las carpetas en el directotio public
app.use(express.static(path.join(__dirname + "/src/public"))) 


app.set("views", path.join(__dirname, "src", "views"))
app.set("view engine", "ejs");

const port = process.env.PORT || 3001


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${process.env.PORT}/tareas`)
    startDb()
})



app.use("/", rutaDeTareas)
