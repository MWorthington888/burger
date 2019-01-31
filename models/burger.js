//Import the ORM to create fucntions ----------------------

const orm = require("../config/orm");

const burger = {

    //***************************************************** */
    all: callback => {
        orm.selectAll("burgers", res => {
            callback(res);
        })
    },

    //***************************************************** */
    insert: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, res => {
            callback(res);
        });
    },

    //***************************************************** */
    update: (objColVals, condition, callback) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            callback(res);
        })
    }

}

// Exports the database functions for the controller.
module.exports = burger;