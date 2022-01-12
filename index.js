const inquirer = require(`inquirer`);
const Employee = require(`./utils/employee`);
const Department = require(`./utils/department`);
const Role = require(`./utils/role`);
const db = require(`./db/connection`);
require('console.table');


function main() {
    inquirer.prompt([
        {
            type: `list`,
            name: `mainMenu`,
            message: `Select an Option`,
            choices: [`View all departments`, `View all roles`, `View all employees`, `Add a department`, `Add a role`, `Add an employee`, `Update employee's role`]
        }
    ]).then(answer => {
        let choice = answer.mainMenu;
        switch (choice) {
            case `View all departments`:
                getDepartments();
                break;
            case `View all roles`:
                viewRole();
                break;
            case `View all employees`:
                viewEmp();
                break;
            case `Add a department`:
                addDept();
                break;
            case `Add a role`:
                addRole();
                break;
            case `Add an employee`:
                addEmp();
                break;
            case `Update employee's role`:
                updateEmp();
                break;
        }
    })
};

function getDepartments() {

    const sql = `SELECT * FROM department;`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
          }
          console.table(result);
          main();
    })

};

function viewRole() {
    
    const sql = `SELECT * FROM role LEFT JOIN department ON role.department_id = department.id;`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
          }
        console.table(result);
        main();
    })
}

function viewEmp() {

    const sql = `SELECT * FROM employee LEFT JOIN role ON role.id = employee.role_id;`

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
          }
        console.table(result);
        main();
    })
}


function addDept() {
    inquirer.prompt([
        {
            type: `input`,
            name: `deptName`,
            message: `Please enter the name of the new department.`
        }
    ]).then(answer => {
        let name = answer.deptName;
        let newDept = new Department(name);
        console.log(`
        ========================================
        The ${name} department has been created!
        ========================================
        `);

        main();
    });
};

function addRole() {
    inquirer.prompt([
        {
            type: `input`,
            name: `roleName`,
            message: `Please name this new role`,
        },
        {
            type: `input`,
            name: `roleSalary`,
            message: `What is the salary for this role?`
        },
        {
            type: `input`,
            name: `roleDept`,
            message: `Please enter the department id.`
        }
    ]).then(answers => {
        let roleName = answers.roleName;
        let roleSalary = answers.roleSalary;
        let roleDept = answers.roleDept;
        
        let newRole = new Role(roleName, roleSalary, roleDept);
        console.log(`
        ========================================
               ${roleName} has been added!
        ========================================
        `);

        main();
    })
};

function addEmp() {
    inquirer.prompt([
        {
            type: `input`,
            name: `empName`,
            message: `Please enter the employee's name.`,
        },
        {
            type: `input`,
            name: `empRole`,
            message: `Please enter this employee's role ID.`
        },
        {
            type: `input`,
            name: `empManager`,
            message: `Please enter the ID of this employee's manager.`
        },
    ]).then(answer => {
        let empName = answer.empName;
        let empRole = answer.empRole;
        let empManaid = answer.empManager;

        let newEmp = new Employee(empName, empRole, empManaid) 

        console.log(`
        ========================================
        ${empName} has been added to the database!
        ========================================
        `
        );

        main();
    })
};

function updateEmp() {
    inquirer.prompt([
        {
            type: `input`,
            name: `updateId`,
            message: `Please enter the ID of the employee you wish to update`
        },
        {
            type: `input`,
            name: `updateRole`,
            message: `Please enter the employee's new role ID.`,
        }
    ]).then(answers => {
        let empID = answers.updateId;
        let updateRole = answers.updateRole;

        const sql = `UPDATE employee SET role_id = ? WHERE id = ?`
        const params = [updateRole, empID];

        db.query(sql, params, (err, results) => {
            if (err) {
                console.log(err);
            } else if (!results.affectedRows) {
               console.log('Employee not found');
            }
        })
        console.log(`
        ========================================
           Employee's role has been updated!
        ========================================
        `
        );
        main();
    })
}

main();

