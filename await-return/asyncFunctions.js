// async 은 항상 Promise를 리턴값으로 가지고 있다.
export async function getEmployees() {
  const response = await fetch("https://learn.codeit.kr/api/menus");
  const data = await response.json();
  return data;
}