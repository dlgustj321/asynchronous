export async function printEmployees() {
  const response = await fetch("https://learn.codeit.kr/api/employees");
  const data = await response.json();
  console.log(data);
}

// then() 함수 사용
/*
const dataPromise = fetch("https://learn.codeit.kr/api/employees")
                      // 1차 콜백 실행
                     .then((response) => response.json());
console.log(dataPromise);
// 2차 콜백 실행
dataPromise.then((data) => console.log(data));
*/

// 위 코드를 간소화시키면 아래 코드와 같다.
// 이를 프로미스 체인(Promise Chain)이라고 한다.
fetch('https://learn.codeit.kr/api/employees')
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log('Task 2');
console.log('Task 3');

/*
 * then()을 사용 시
 * 앞선 비동기 함수의 실행이 완료되면
 * 연속으로 등록된 콜백 함수를 실행
 */

/*
 * then() 원리
 * 처음 시작할 때 Panding 상태의 Promise를 리턴
 * 기다리다가 리퀘스트가 완료돼서 리스폰스가 돌아오면
 * 첫 번째 Promise가 Fulfilled 상태가 되고 콜백이 된다.
 * 이때 Promise의 결과값을 콜백의 첫 번째 파라미터로 전달
 * 위와 같은 과정을 반복한다
 * 마지막에서의 Promise는 값을 전달받을 파라미터가 없기 때문에
 * 값이 Undefined이다. 따라서 무시해도 상관없다.
 */

/*
 * 프로미스 체인(Promise chain)의 장점
 * 비동기 작업을 기다리는 동안 다른 작업을 먼저 할 수 있다.
 */