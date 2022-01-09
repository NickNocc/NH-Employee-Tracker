mysql = require(`mysql2`);
const db = require(`../db/connection`)

class Department {
    constructor(name) {
        this.department_name = name;

        const sql = `INSERT INTO department (department_name) VALUE (?)`;
        const params = [name];
        console.log("sql: ", sql);

        db.query(sql, params, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Department Created!");
        })
    }
};

const getDepartments = () => {
    const sql = `SELECT * FROM department;`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
          }
          return result;
    })
}

module.exports = {Department, getDepartments};