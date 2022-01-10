const db = require(`../db/connection`);


class Role {
    constructor(title, salary, deptId){
        this.title = title;
        this.salary = salary;
        this.deptId = deptId;

        const sql = `INSERT INTO role (role_title, role_salary, department_id) Values (?, ?, ?)`;
        const params = [title, salary, deptId];

        db.query(sql, params, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

        })
    }
}

module.exports = Role;