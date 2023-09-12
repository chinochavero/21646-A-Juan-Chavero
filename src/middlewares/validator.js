import { validationResult } from "express-validator";

export const validator = (req, res, next) => {
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json(errores)
    }
    next()
}