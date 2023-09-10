import { body } from "express-validator";

export const crearPostSchema = [
    body("titulo")
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post debe tener un título"),
    body("contenido")
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post no debe estar vacio"),
    body("imagen_post")
    .isURL("Ingrese una url válida")
]

export const editarPostSchema = [
    body("titulo")
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post debe tener un título"),
    body("contenido")
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post no debe estar vacio"),
    body("imagen_post")
    .isURL("Ingrese una url válida")
]