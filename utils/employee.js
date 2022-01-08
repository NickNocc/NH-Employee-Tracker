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
    }
}

module.exports = Employee;