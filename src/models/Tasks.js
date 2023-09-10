import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const modeloPost = sequelize.define("Posts", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen_post: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
        timestamps: true
})
