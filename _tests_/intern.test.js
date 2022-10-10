const Intern = require('../lib/Intern');

test('Can set school name.', () => {
  const testSetSchool = 'Georgia Tech';
  const setInternSchool = new Intern('Jane Doe', 1, 'test@gmail.com', testSetSchool);
  expect(setInternSchool.school).toBe(testSetSchool);
});

test('Can get school name.', () => {
  const testSchool = 'Georgia Tech';
  const internSchool = new Intern('Jane Doe', 1, 'test@gmail.com', testSchool);
  expect(internSchool.getSchool()).toBe(testSchool);
});

test('getRole() should return role.', () => {
  const testRole = 'Intern';
  const employeeRole = new Intern('Jane Doe', 1, 'test@gmail.com', 'Georgia Tech');
  expect(employeeRole.getRole()).toBe(testRole);
});
