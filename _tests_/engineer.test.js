const Engineer = require('../lib/Engineer');

test('Can set GitHUb username.', () => {
  const testSetUsername = 'GitHubUser';
  const  setEmployeeUsername = new Engineer('Jane Doe', 1, 'test@gmail.com', testSetUsername);
  expect(setEmployeeUsername.github).toBe(testSetUsername);
});

test('Can get GitHub username.', () => {
  const testUsername = 'GitHubUser';
  const employeeUsername = new Engineer('Jane Doe', 1, 'test@gmail.com', testUsername);
  expect(employeeUsername.getGitHubUser()).toBe(testUsername);
});

test('getRole() should return role.', () => {
  const testRole = 'Engineer';
  const employeeRole = new Engineer('Jane Doe', 1, 'test@gmail.com', 'GitHubUser');
  expect(employeeRole.getRole()).toBe(testRole);
});

