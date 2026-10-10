const button1 = document.querySelector("#button1");
const buttons = document.querySelectorAll("button");

// No.9-a（ボタン内に名前表示）
function updateName() {
  const name = prompt("名前を入力して下さい");
  button1.textContent = `Player 1: ${name}`;
}

// No.9-a（ボタンが押された際にテキストを出す）
function createParagraph(button) {
  const para = document.createElement("p");
  
  if (button === button1) {
    para.textContent = "名前が入力されました！";
  } else {
    para.textContent = "ボタンが押されました！";
  }
  
  document.body.appendChild(para);
}

button1.addEventListener("click", updateName);

for (const button of buttons) {
  button.addEventListener("click", () => {
    createParagraph(button);
  });
}