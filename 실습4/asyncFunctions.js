// async 형식의 named export 방식
export async function printEmployees() {
  const response = await fetch("https://learn.codeit.kr/api/menus");
  const data = await response.json();
  console.log(data);
}
/**
 * 1.async 함수 내부에서 await을 사용하면 비동기 함수가 실행하는 동안
 * 함수 밖으로 나와서 다른 코드들을 먼저 실행한다.
 * 
 * 2.비동기 함수가 Fulfilled 상태가 되면 나머지 비동기도 이어서 실행한다.
 * 
 * 3.반복적으로 나머지 비동기도 Fulfilled 되는 동안 다른 코드들을 먼저 실행한다.
 */

// async 형식의 Arrow Function 방식
/** 
const printEmployeesArrow = async () => {
  const response = await fetch("https://learn.codeit.kr/api/employees");
  const data = await response.json();
  console.log(data);
}
**/