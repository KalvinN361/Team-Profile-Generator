
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "LSU";
  const newEmployee = new Intern("weee", 1, "win@gmail.com", testValue);
  expect(newEmployee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const newEmployee = new Intern("weee", 1, "win@gmail.com", "LSU");
  expect(newEmployee.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "LSU";
  const newEmployee = new Intern("weee", 1, "win@gmail.com", testValue);
  expect(newEmployee.getSchool()).toBe(testValue);
});