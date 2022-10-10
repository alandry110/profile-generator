const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Can initiate employees profile.', () => {
        const inEmployeeProfile = new Employee();
        expect(typeof(inEmployeeProfile)).toBe('object');
    });

    it('Can set employees name.', () => {
        const setTestName = 'Jane Doe';
        const setEmployeeName = new Employee(setTestName);
        expect(setEmployeeName.name).toBe(setTestName);
    });

    it('Can set employees ID number.', () => {
        const setTestId = 1009;
        const setEmployeeId = new Employee('Jane Doe', setTestId);
        expect(setEmployeeId.id).toBe(setTestId);
    });

    it('Can set employees email.', () => {
        const setTestEmail = 'test@gmail.com';
        const setEmployeeEmail = new Employee('Jane Doe', 1, setTestEmail);
        expect(setEmployeeEmail.email).toBe(setTestEmail);
    });

    describe('getName', () => {
        it('Can get employees name.', () => {
            const setTestName = 'Jane Doe';
            const setEmployeeName = new Employee(setTestName);
            expect(setEmployeeName.getName()).toBe(setTestName);
        });
    });
        
    describe('getId', () => {
        it('Can set employees ID number.', () => {
            const setTestId = 1009;
            const setEmployeeId = new Employee('Jane Doe', setTestId);
            expect(setEmployeeId.id).toBe(setTestId);
        });
    });
        
    describe('getEmail', () => {
        it('Can set employees email.', () => {
            const setTestEmail = 'test@gmail.com';
            const setEmployeeEmail = new Employee('Jane Doe', 1, setTestEmail);
            expect(setEmployeeEmail.email).toBe(setTestEmail);
        });
    });
        
    describe('getRole', () => {
        it('getRole() should return role', () => {
            const testRole = 'Employee';
            const employeeRole = new Employee('Jane Doe', 1, 'test@tgmail.com');
            expect(employeeRole.getRole()).toBe(testRole);
        });
    });
    
});