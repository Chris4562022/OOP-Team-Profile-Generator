//employee constructor
const Manager = require('../lib/Manager');
const manager = new Manager('Chris', '12345', 'williamschris83@gmail.com', '2127360850');

//makes employee object
test('creates a new manager object',  () => {
    expect(manager.name).toBe('Chris');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('williamschris83@gmail.com');
    expect(manager.officenumber).toBe('2127360850');
});


// test('test if you can get name from the getName() method', () => {
//     expect(employee.getName()).toBe('Chris');
// });