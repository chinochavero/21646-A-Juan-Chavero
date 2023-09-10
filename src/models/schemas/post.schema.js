import { body } from "express-validator";

export const crearPostSchema = [
    body("titulo")
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post debe tener un título"),
    body("contenido")
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post no debe estar vacio"),
    body("imagen_post")
    .isURL().withMessage("Ingrese una URL válida")
]

export const editarPostSchema = [
    body("titulo")
    .optional()
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post debe tener un título"),
    body("contenido")
    .optional()
    .isString().withMessage("Debe ser un string")
    .notEmpty().withMessage("El post no debe estar vacio"),
    body("imagen_post")
    .optional()
    .isURL().withMessage("Ingrese una URL válida")
]