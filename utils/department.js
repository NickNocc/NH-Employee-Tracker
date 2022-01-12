const mysql = require(`mysql2`);
const db = require(`../db/connection`);

class Department {
    constructor(name) {
        this.department_name = name;

        const sql = `INSERT INTO department (department_name) VALUE (?)`;
        const params = [name];

        // Takes our sql statement and params to add this to db

        db.query(sql, params, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Department Created!");
        })
    }
};


module.exports = Department;