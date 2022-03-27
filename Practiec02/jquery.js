const id_arr = ["abc", "siat", "javascript"];
function id_check() {
  let id = document.getElementById("user_id").value;

  for (var i in id_arr) {
    console.log(id);
    if (id_arr.includes(id)) {
      return alert("id가 존재합니다");
    } else {
      return alert("생성 가능합니다.");
    }
  }
}

function pw_check() {
  let pw = document.getElementById("user_pw").value;
  let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  if (false === reg.test(pw)) {
    document.getElementById("show").innerHTML =
      "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.";
  } else {
    document.getElementById("show").innerHTML = "맞습니다.";
  }
}

function email_check() {
  let email = document.getElementById("user_email").value;
  let regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (false === regEmail.test(email)) {
    document.getElementById("email_show").innerHTML =
      "이메일이 유효하지 않습니다.";
  } else {
    document.getElementById("email_show").innerHTML = "맞습니다.";
  }
}
