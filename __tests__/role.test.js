const Role = require('../utils/role');

test('Sets the title of the role', () => {
    const newRole = new Role('Engineer');

    expect(newRole.title).toEqual(expect.stringContaining('Engineer'))
});

test('Sets a roles salary', () => {
    const newSal = new Role('Engineer', 90000.50);

    expect(newSal.salary).toEqual(90000.50);
})