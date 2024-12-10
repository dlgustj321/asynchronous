function forEach(array, callback) {
  for(let elt of array) {
    callback(elt);
  }
}

const words = ['JavaScript', 'Java', 'Python'];

words.forEach(element => {
  console.log(element);
});

// 대문자 변환
words.forEach(element => {
  console.log(element.toUpperCase());
});