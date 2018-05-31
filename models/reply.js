module.exports = function(sequelize, DataTypes) {
    var Reply = sequelize.define("Reply", {
        name: {
            type: DataTypes.STRING,
         
            validate: {
                len: [2,100]
            }
        },
        company: {
            type: DataTypes.STRING,
       
            validate: {
                len: [1, 140]
            }
        },
        email: {
            type: DataTypes.STRING,
           
            validate: {
                isEmail: true
            }
        },
        telephone: {
            type: DataTypes.STRING,
          
            validate: {
                len: [1,12]
            }
        },
        message: {
            type: DataTypes.TEXT,
         
        }
    });

    

    return Reply;
}