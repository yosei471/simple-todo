// 仮のユーザー情報（学習用）
const USER = {
  username: "admin",
  password: "1234"
};

// ログイン処理
function login() {
  const inputUser = document.getElementById("username").value;
  const inputPass = document.getElementById("password").value;

  if (inputUser === USER.username && inputPass === USER.password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", inputUser);
    window.location.href = "home.html";
  } else {
    alert("ユーザー名またはパスワードが違います");
  }
}

// ログイン状態チェック
function checkLogin() {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("ログインしてください");
    window.location.href = "index.html";
  }
}

// ログアウト処理
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "index.html";
}

// home.html でだけ実行
if (window.location.pathname.includes("home.html")) {
  checkLogin();
  const name = localStorage.getItem("username");
  document.getElementById("welcome").textContent =
    "ようこそ " + name + " さん";
}
