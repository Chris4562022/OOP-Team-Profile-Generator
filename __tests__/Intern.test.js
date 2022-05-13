//intern constructor
const Intern = require('../lib/Intern');
const intern = new Intern('Chris', '12345', 'williamschris83@gmail.com', '2127360850');

//make intern object
Test('creates a new intern object', () => {
    expect(intern.name).toBe('Chris');
    expect(intern.id).toBe('12345');
    expect(intern.email).toBe('williamschris83@gmail.com');
    expect(intern.school).toBe('Rutgers');
});


test('test if you can get school from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Rutgers');
});

