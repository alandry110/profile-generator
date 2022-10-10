const Manager = require('../lib/Manager');

test('Can set office phone number.', () => {
  const testSetNumber = 200;
  const setEmployeeNumber = new Manager('Jane Doe', 1, 'test@gmail.com', testSetNumber);
  expect(setEmployeeNumber.officeNumber).toBe(testSetNumber);
});

test('Can get office number.', () => {
  const testNumber = 200;
  const employeeNumber = new Manager('Jane Doe', 1, 'test@tgmail.com', testNumber);
  expect(employeeNumber.getOfficeNumber()).toBe(testNumber);
});

test('getRole() should return role.', () => {
  const testRole = 'Manager';
  const employeeRole = new Manager('Jane Doe', 1, 'test@gmail.com', 200);
  expect(employeeRole.getRole()).toBe(testRole);
});

