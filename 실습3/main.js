import { getEmployees, json, groupEmployees } from "./functions.js"

// getEmployees 
const response = await fetch("https://learn.codeit.kr/api/employees");
// json
const data = await response.json();
console.log(data);

/** Promise 의 3가지 상태 (파싱 작업)
 *  1. 비동기 작업의 결과를 기다리고 있을 때는 Pending
 *  2. 비동기 작업이 성공적으로 완료되었을 때는 Fulfilled
 *  3. 비동기 작업이 중간에 실패했을 때는 Rejected
 * 
 *  await을 사용하면 Pending에서 Fulfilled 또는 Rejected 상태가 될 때까지 기다렸다가
 *  결과값을 돌려준다.
*/