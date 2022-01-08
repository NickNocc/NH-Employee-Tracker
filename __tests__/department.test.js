const Department = require('../utils/department.js');

test('should set a departments name', () => {
    const newDept = new Department("Trucking")

    expect(newDept.department_name).toEqual(expect.stringContaining("Trucking"));
});
