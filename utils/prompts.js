const inquirer = require(`inquirer`);

const main = () => {
    inquirer.prompt([
        {
            type: `list`,
            name: `mainMenu`,
            message: `Select an Option`,
            choices: [`View all departments`, `View all roles`, `View all employees`, `Add an employee`, `Update employee's role`]
        }
    ]).then(answer => {
        let choice = answer.mainMenu;
        console.log("Choice: " + choice);
        switch (choice) {
            case `View all departments`:
                console.log('frick1');
                viewDepts();
                break;
            case `View all roles`:
                console.log('frick2');
                break;
            case `View all employees`:
                console.log('frick3');
                break;
            case `Add an employee`:
                console.log('frick4');
                break;
            case `Update employee's role`:
                console.log('frick5');
                break;
        }
    })
}

const viewDepts = () =>
    inquirer.prompt([
        {
            type: `list`,
            name: `test`,
            message: `test2`,
            choices: [`1`, `2`, `3`, `4`]
        }
    ]).then(answer => {
        main();
    })

main();