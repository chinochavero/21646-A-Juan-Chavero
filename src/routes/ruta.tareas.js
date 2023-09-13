import { Router } from "express";
import { ctrlView, ctrlCreateTareas, ctrlDeleteTareas, ctrlGetTareas, ctrlUpdateTareas } from "../controllers/controladores.tareas.js";
import { crearPostSchema, editarPostSchema } from "../models/schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";
 
const rutaDeTareas = Router()

rutaDeTareas.get("/tareas", ctrlView)

rutaDeTareas.get("/api/tareas", ctrlGetTareas)

rutaDeTareas.post("/api/tareas", crearPostSchema, validator, ctrlCreateTareas)

rutaDeTareas.put("/api/tareas/:id", editarPostSchema, validator, ctrlUpdateTareas)

rutaDeTareas.delete("/api/tareas/:id", ctrlDeleteTareas)

export { rutaDeTareas }