//employee constructor
const Employee = require('../lib/Employee');
const employee = new Employee('Chris', '12345', 'williamschris83@gmail.com', '2127360850');

//makes employee object
test('creates a new employee object',  () => {
    expect(employee.name).toBe('Chris');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('williamschris83@gmail.com');
    expect(employee.officenumber).toBe('2127360850');
});

test('test if you can get name from the getName() method', () => {
    expect(employee.getName()).toBe('Chris');
});