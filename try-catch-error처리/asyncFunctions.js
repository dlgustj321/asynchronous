//case 1 : Promise 방식
export async function getMenus() {
  //api 주소를 변경하면서 결과값을 비교해보자
  const response = await fetch("https://learnnnn.codeit.kr/api/menus");
  const menus = await response.json();
  return menus;
}

//case 2 : 콜백 헬
/** 
getMenus((response) => {
  json(response, (menus) => {
    console.log(menus);
  });
});
**/
