//employee constructor
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Chris', '12345', 'williamschris83@gmail.com', 'Chris4562022');

//makes employee object
test('creates a new engineer object',  () => {
    
    // expect(engineer.name).toBe('Chris');
    // expect(engineer.id).toBe('12345');
    // expect(engineer.email).toBe('williamschris83@gmail.com');
    expect(engineer.githubusername).toEqual(expect.any(String));

});


test('test if you can get github from githubusermame', () => {
    const engineer = new Engineer('Chris', '12345', 'williamschris83@gmail.com', 'Chris4562022');
    
    expect(engineer.githubusername).toEqual(expect.stringContaining(engineer.githubusername.toString()));
});