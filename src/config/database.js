import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_tasks", "root", "", {
	host: "localhost",
	dialect: "mysql"
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