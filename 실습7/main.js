// 오류 처리 함수인 try-catch()-finally()을 사용
// 오류를 처리하면서 프로미스 체인 기법을 사용하여
// 비동기 프로그래밍을 통한 작업을 처리

function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

console.log("프로그램을 실행 중 입니다...");
console.log('메뉴 고르는 중..');
try {
  fetch('https://learn.codeit.kr/api/menus')
    .then((response) => response.json())
    .then((menus) => getRandomElement(menus))
    .then((randomMenu) => console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`));
} catch(error) {
  console.log('에러가 발생했습니다! :(');
} finally {
  console.log('맛있게 드세요 ^.^');
}

// 프로미스 체인을 catch()와 finally()을 가질 수 있다.
/** 
fetch('https://learn.codeit.kr/api/menus')
  .then((response) => response.json())
  .then((menus) => getRandomElement(menus))
  .then((randomMenu) => console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}`))
  .catch((error) => console.log('에러가 발생했습니다!'))
  .finally(() => console.log('Finished'));

console.log('Task 2');
console.log('Task 3');
**/

// 주의 : catch() , finally()는 웬만하면 마지막에 작성한다.

/**
 * Arrow Function
 * 
 * .then((menuns) => {
 * const randomMenus = getRandomElement(menus);
 * console.log(`오늘의 랜덤 메뉴는 ${randomMenus.name}입니다!`)
 * })
 */


