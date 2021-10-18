const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const newEmployee = new Engineer("Weeeee", 1, "win@gmail.com", testValue);
  expect(newEmployee.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const newEmployee = new Engineer("Weeeee", 1, "win@gmail.com", "GitHubUser");
  expect(newEmployee.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const newEmployee = new Engineer("Weeeee", 1, "win@gmail.com", testValue);
  expect(newEmployee.getGithub()).toBe(testValue);
});