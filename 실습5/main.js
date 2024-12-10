import { getMenus } from "./asyncFunctions.js";

function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

const MenusArray = await getMenus();
const randomMenus = getRandomElement(MenusArray);
console.log("메뉴 고르는 중...");
console.log("오늘의 랜덤 메뉴는",randomMenus.name);