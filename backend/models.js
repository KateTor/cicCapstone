module.exports = () => {
    const Sequelize = require("sequelize");

    const db = new Sequelize("katherinetortora", "katherinetortora", "", {host: "127.0.0.1", dialect: "postgres"})

    return {
        db,
            User: db.define("User", {
                id: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true
                },
                firstName: Sequelize.STRING,
                lastName: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.STRING
            }),

            Dog: db.define("Dog", {
                dogID: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: Sequelize.STRING,
                description: Sequelize.STRING, 
                picture: Sequelize.BLOB, 
                traitID: Sequelize.STRING
            }),

            Organization: db.define("Organization", {
                organizationID: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true
                },
                name: Sequelize.STRING,
                streetNumber: Sequelize.STRING, 
                streetName: Sequelize.STRING, 
                city: Sequelize.STRING, 
                state: Sequelize.STRING, 
                zipCode: Sequelize.INTEGER, 
                phoneNumber: Sequelize.INTEGER, 
                email: Sequelize.STRING, 
                website: Sequelize.STRING
            }),

        init: function() {
            db.sync
        }
    }
}