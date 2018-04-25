module.exports = function(sequelize, DataTypes) {
    var Reply = sequelize.define("Reply", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,100]
            }
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,12]
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    

    return Reply;
}