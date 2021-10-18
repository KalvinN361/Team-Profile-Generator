const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const newEmployee = new Manager("weee", 1, "win@gmail.com", testValue);
  expect(newEmployee.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const newEmployee = new Manager("weee", 1, "win@gmail.com", 100);
  expect(newEmployee.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const newEmployee = new Manager("weee", 1, "win@gmail.com", testValue);
  expect(newEmployee.getOfficeNumber()).toBe(testValue);
});