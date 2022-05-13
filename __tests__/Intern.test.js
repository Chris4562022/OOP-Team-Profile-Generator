//intern constructor
const Intern = require('../lib/Intern');
const intern = new Intern('Chris', '12345', 'williamschris83@gmail.com', 'Rutgers');

//make intern object
Test('creates a new intern object', () => {
    // expect(intern.name).toBe('Chris');
    // expect(intern.id).toBe('12345');
    // expect(intern.email).toBe('williamschris83@gmail.com');
    expect(intern.school).toEqual(expect.any(String));
});


test('test if you can get school from the getSchool()', () => {
    const intern = new Intern('Chris', '12345', 'williamschris83@gmail.com', 'Rutgers');
    expect(intern.getSchool).toEqual(expect.stringContaining(intern.school.toString()));
});

