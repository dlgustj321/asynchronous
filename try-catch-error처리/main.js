import { getMenus } from "./asyncFunctions.js";

// 랜덤 함수(인터넷 서칭 or 알아두기)
function randomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

console.log("메뉴 고르는 중...");

try {
  const menus = await getMenus();
  const randomMenu = randomElement(menus);
  console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
} catch(error) {
  console.log("오류가 발생했습니다:(");
} finally {
  console.log("getMenu()함수가 종료되었습니다.");
}