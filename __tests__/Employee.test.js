const Employee = require("../lib/Employee");

test("begin to get employees", () => {
  const newEmployee = new Employee();
  expect(typeof(newEmployee)).toBe("object");
});

test("will set name ", () => {
  const name = "HeHeXD";
  const newEmployee = new Employee(name);
  expect(newEmployee.name).toBe(name);
});

test("sets id ", () => {
  const testValue = 100;
  const newEmployee = new Employee("Weeeee", testValue);
  expect(newEmployee.id).toBe(testValue);
});

test("changes email", () => {
  const testValue = "win@gmail.com";
  const newEmployee = new Employee("Weeeee", 1, testValue);
  expect(newEmployee.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "kalvin";
  const newEmployee = new Employee(testValue);
  expect(newEmployee.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const newEmployee = new Employee("Weeeee", testValue);
  expect(newEmployee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "win@gmail.com";
  const newEmployee = new Employee("Weeeee", 1, testValue);
  expect(newEmployee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const newEmployee = new Employee("kalvin", 1, "win@gmail.com");
  expect(newEmployee.getRole()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const newEmployee = new Employee("Weeeee", testValue);
  expect(newEmployee.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "win@gmail.com";
  const newEmployee = new Employee("Weeeee", 1, testValue);
  expect(newEmployee.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const newEmployee = new Employee("kalvin", 1, "win@gmail.com");
  expect(newEmployee.getRole()).toBe(testValue);
});