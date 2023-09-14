import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT,
	});


    export const startDb = async () => {
        try {
             await sequelize.authenticate();
         await sequelize.sync();                            
             console.log("Conexión establecida con éxito.");    
        } catch (error) {
             console.error("Imposible conectarse a la base de datos:", error);
        }
     }