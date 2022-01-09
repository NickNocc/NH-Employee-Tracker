const inquirer = require(`inquirer`);
const Employee = require(`./employee`);
const {Department, getDepartments} = require(`./department`);
const Role = require(`./role`);

const main = () => {
    inquirer.prompt([
        {
            type: `list`,
            name: `mainMenu`,
            message: `Select an Option`,
            choices: [`View all departments`, `View all roles`, `View all employees`, `Add a department`, `Add a role`, `Add an employee`, `Update employee's role`]
        }
    ]).then(answer => {
        let choice = answer.mainMenu;
        console.log("Choice: " + choice);
        switch (choice) {
            case `View all departments`:
                console.log('frick1');
                getDepartments();
                break;
            case `View all roles`:
                console.log('frick2');
                break;
            case `View all employees`:
                getDepartments();
                break;
            case `Add a department`:
                addDept();
                break;
            case `Add a role`:
                addRole();
                break;
            case `Add an employee`:
                console.log('frick4');
                addEmp();
                break;
            case `Update employee's role`:
                updateEmp();
                break;
        }
    });
};


const addDept = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `deptName`,
            message: `Please enter the name of the new department.`
        }
    ]).then(answer => {
        let name = answer.deptName;
        console.log(name);
        console.log(`The ${name} department has been created!`);
        // SQL code goes here
        let test = new Department(name);
        console.log(test);
        main();
    });
};

const addRole = () => {
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
            message: `What department does this role work in?`
        }
    ]).then(answers => {
        console.log(answers);
        // SQL code goes here
        main();
    })
};

const addEmp = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `empName`,
            message: `Please enter the employee's name.`,
        },
        {
            type: `input`,
            name: `empRole`,
            message: `Please enter this employee's role.`
        },
        {
            type: `input`,
            name: `empManager`,
            message: `Please enter the ID of this employee's manager.`
        },
    ]).then(answer => {
        console.log(answer);
        main();
    })
};

const updateEmp = () => {
    inquirer.prompt([
        {
            type: `input`,
            name: `updateRole`,
            message: `Please enter the employee's new role.`,
        }
    ]).then(answers => {
        console.log(answers);
        // SQL code here
        main();
    })
}
module.exports = main;