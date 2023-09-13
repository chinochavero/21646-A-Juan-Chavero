import express from "express";
import { rutaDeTareas } from "./src/routes/ruta.tareas.js";
import { startDb } from "./src/config/database.js";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "src", "public")))

app.set("views", path.join(__dirname, "src", "public"))
app.set("view engine", "ejs")

const port = 3001

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
    startDb()
})



app.use("/", rutaDeTareas)