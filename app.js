import express from "express";
import { rutaDeTareas } from "./src/routes/ruta.tareas.js";
import { startDb } from "./src/config/database.js";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())

const port = 3001

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
    startDb()
})



app.use("/", rutaDeTareas)