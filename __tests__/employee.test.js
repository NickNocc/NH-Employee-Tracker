const Employee = require('../utils/employee')

test('Sets an employees name', () => {
    const newHite = new Employee('Nicholas Haretakis');

    expect(newHite.first_name).toEqual(expect.stringContaining('Nicholas')); 
    expect(newHite.last_name).toEqual(expect.stringContaining('Haretakis'));
});

test('Sets an employees roel',() => {
    const newRole = new Employee('Nicholas Haretakis', 'Engineer');

    expect(newRole.role).toEqual('Engineer')
});

test('Sets an employees manager id', () => {
    const newNew = new Employee('Nicholas Haretakis', 'Engineer', 6969);

    expect(newNew.manager_id).toEqual(6969);
});