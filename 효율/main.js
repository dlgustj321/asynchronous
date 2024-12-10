//  반복문을 사용하여 빠른 작업이 필요하다면 이런 식으로 하는 것이 더 빠르다.
//  대신 순서가 뒤죽박죽이다.

async function printEmployees(id) {
  const response = await fetch(`https://learn.codeit.kr/api/employees/${id}`);
  const data = await response.json();
  console.log(data);
};

for(let i = 1; i<11; i++) {
  printEmployees(i);
}