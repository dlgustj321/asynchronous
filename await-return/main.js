import { getEmployees } from "./asyncFunctions.js";

// Promise의 성공 결과값을 호출하려면 await을 쓰면된다,
const employees = await getEmployees(); //Promise
console.log(employees);