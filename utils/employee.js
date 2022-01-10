const db = require(`../db/connection`);
require('console.table');


class Employee {

    constructor(name, role, manaId) {
        // Validate name in inquirer
        const splitter = name.split(" ");
        this.first_name = splitter[0];
        this.last_name = splitter[1];
        // Connect role name to number
        this.role = role;
        // Check to see if this id exists
        this.manager_id = manaId;

        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
        const params = [this.first_name, this.last_name, this.role, this.manager_id]

        db.query(sql, params, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

        })

    }
}

module.exports = Employee;