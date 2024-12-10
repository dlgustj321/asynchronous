import { getInterviews, getEmployees } from './asyncFunction.js';

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

const employees = await getEmployees();

const interviews = await getInterviews();

interviews.forEach((interview) => {
  if (interview.result === 'pass') {
    addNewEmployee(employees, interview);
  }
});

console.log(employees);
