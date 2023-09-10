import { modeloPost } from "../models/Tasks.js"


export const ctrlGetTareas = async (req, res) => {
    try {
        const tarea = await modeloPost.findAll();
        if(!tarea) return res.status(404)
        return res.status(200).json(tarea)
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error de Servidor"
        })
    }
}
   
export const ctrlCreateTareas = async(req, res) => {
    try {
        const nuevaTarea = await modeloPost.create(req.body);
        return res.status(201).json(nuevaTarea)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error de Servidor"
        })
    }
}
export const ctrlUpdateTareas = async(req, res) => {
    const { id } = req.params
    try {
        const tarea = await modeloPost.findByPk(id)
        if (!tarea) {
            return res.status(404).json({
                message: "Post no encontrado"
            })
        }
        tarea.update(req.body)
        return res.status(200).json(tarea)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error de Servidor"
        })
    }
}
export const ctrlDeleteTareas = async (req, res) => {
    const { id } = req.params
    try {
        const tareaBorrada = await modeloPost.destroy({
            where: {
                id: id
            }
        })
        if (!tareaBorrada) {
            return res.status(404).json({
                message: "Post no encontrado"
            })
        }
        return res.status(200).json({
            message: "Post eliminado"
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error de Servidor"
        })
    }
}