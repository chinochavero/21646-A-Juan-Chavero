import { Router } from "express";

const rutaDeTareas = Router()

rutaDeTareas.get("/api/tareas")

rutaDeTareas.post("/api/tareas")

rutaDeTareas.put("/api/tareas/:id")

rutaDeTareas.delete("/api/tareas/:id")

export { rutaDeTareas }