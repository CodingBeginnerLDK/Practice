let setchar = "붉은@ 태양보다, @@더 빛나는 사랑했던! 너를 기억해.";
let score = 0,
  answer = 0,
  miss = 0;
let problem;

problem = randomSplitWord(del_reg(setchar));

for (let index = 0; index < problem.length; index++) {
  input = prompt(problem[index]);

  if (input == problem[index]) {
    score += 10;
    answer += 1;
  } else {
    score -= 5;
    miss += 1;
  }
}
console.log(
  "총 문제 갯수는 : " +
    problem.length +
    "\n맞은 갯수 : " +
    answer +
    "\n틀린 갯수 : " +
    miss +
    "\n점수는 : " +
    score +
    "입니다."
);

// 특수문자 제거
function del_reg(str) {
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  let newsetchar = "";
  if (regExp.test(setchar)) {
    newsetchar = setchar.replace(regExp, "");
  }
  return newsetchar;
}

// 랜덤 단어 추출
function randomSplitWord(str) {
  let wordData = str.split(" ");
  console.log(wordData);
  let randomWord = [];

  for (let i = 0; i < wordData.length; i++) {
    let random = Math.floor(Math.random() * wordData.length);
    check = true;
    //입력받은 배열 중복 값 제거
    for (let j = 0; j < randomWord.length; j++) {
      if (randomWord[j] == wordData[random]) {
        check = false;
      }
    }
    if (check) {
      randomWord.push(wordData[random]);
    }
  }
  console.log(randomWord);
  return randomWord;
}
