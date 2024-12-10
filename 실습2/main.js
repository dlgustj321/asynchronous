import { getEmployees, json, groupEmployees } from "./functions.js";

/** 
getEmployees((response) => console.log(response));

json (
  '[{ "id": 1, "name": "Jason", "email": "jason@codeitmall.kr", "department": "engineering" }, { "id": 2, "name": "Alice", "email": "alice@codeitmall.kr", "department": "engineering" }, { "id": 3, "name": "Brian", "email": "brian@codeitmall.kr", "department": "marketing" }, { "id": 4, "name": "Erica", "email": "erica@codeitmall.kr", "department": "marketing" }, { "id": 5, "name": "Wilson", "email": "wilson@codeitmall.kr", "department": "sales" }]', (data) => console.log(data)
);

groupEmployees([
  {
    id: 1,
    name: 'Jason',
    email: 'jason@codeitmall.kr',
    department: 'engineering'
  },
  {
    id: 2,
    name: 'Alice',
    email: 'alice@codeitmall.kr',
    department: 'engineering'
  },
  {
    id: 3,
    name: 'Brian',
    email: 'brian@codeitmall.kr',
    department: 'marketing'
  },
  {
    name: 'Erica',
    email: 'erica@codeitmall.kr',
    department: 'marketing'
  },
  {
    id: 5,
    name: 'Wilson',
    email: 'wilson@codeitmall.kr',
    department: 'sales'
  } 
], (result) => console.log(result));

console.log('Next task');

**/

// 위 코드를 한 번에 실행 (callback hell, 콜백 헬(지옥) , 콜백 함수가 중첩) 

 
getEmployees((response) => {
  json(response, (data) => {
    groupEmployees(data, (result) => {
      console.log(result);
    });
  });
});


// 위와 같은 복잡한 구조를 해결할 수 있는 방법이 Promise 방식이다.
// 위 코드를 Promise 형식으로 바꾸면?

/** 
const response = await fetch('');
const data = await json();
const result = await groupEmployees();
console.log(result);
**/

/** Promise를 다루는 방법
 * 1. then() 메소드 + 콜백
 * 2. async와 await 문법
* */ 

 