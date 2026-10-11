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


// No.10-制御構造
// for,while,switch
// for:回数が決まってるときに最適
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while:回数でなく条件を満たすまで繰り返すときに最適
let password = "";

// while (password !== "abc123") {
//   password = prompt("パスワードを入力してください");
// }

console.log("ログインしました");

// switch:条件が多い時に最適
let day = "月曜日";

switch (day) {
  case "月曜日":
    console.log("今週も頑張ろう！");
    break;

  case "金曜日":
    console.log("あと少し！");
    break;

  case "日曜日":
    console.log("ゆっくり休もう！");
    break;

  default:
    console.log("今日も一日頑張ろう！");
}


// No.10-オブジェクト
const obj = {
  name: "Carrot",
  // 予約語をキーとして使用できる
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};

// ドット記法とブラケット記法がある
obj.details.color; // orange
obj["details"]["size"]; // 12


// No.10-配列
const a = ["dog", "cat", "hen"];
// 空きがあっても位置を指定して値を入れることができる
a[5] = "fox";
// length:配列の一番大きなインデックスより1大きい値を取る
// 5じゃなくて6!!
console.log(a.length); // 6
console.log(a); // ['dog', 'cat', 'hen', , , 'fox']


// No.10-関数
function add(x, y) {
  const total = x + y;
  return total;
}

add(); // NaN
add(2, 3, 4); // 5（第3引数は無視される）

// レスト構文：渡された複数の引数を一つの配列にまとめる
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  console.log(sum / args.length);
}

avg(2, 3, 4, 5); // 3.5[（2+3+4+5)/4]

// 前に別の引数があればそこに格納し、残りを配列に入れる。
function avg2(firstValue, ...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  console.log(firstValue);
  console.log(sum / args.length);
}

avg2(2, 3, 4, 5); // 4 [(3+4+5)/3]

// 注）...argsの後に引数を入れることはできない

// スプレッド構文：配列の要素を引数として展開できる
const numbers = [2, 3, 4, 5];
avg(...numbers);

// オブジェクト構造分解
// JavaScriptには名前付き引数はないが、オブジェクトのプロパティ名を指定することはできる
function subtract({ large, small }) {
  return large - small;
}

// { } 中括弧で新しいオブジェクトが作成される
console.log(subtract({ large: 3, small: 2 }));
// プロパティ名で引数を指定してるから、順番を変えても結果は変わらない
console.log(subtract({ small: 2, large: 3 }));

// デフォルト引数を持たせることも可能
function avg3(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

console.log(avg3(1, 2)); // 1

// 無名関数
// function avg4() {}と同様の関数になる
const avg4 = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// アロー関数式
const avg5 = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// 単に式を返す場合はreturnを省略できる
const sum = (a, b, c) => a + b + c;

// 関数を返す関数
const add2 = (x) => (y) => x + y;
console.log(add2(5)(3)); // 8 [y = 5 + y => 5 + 3 = 8]

// 関数を受け入れる関数
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// ["baby dog", "baby cat", "baby hen"]

// 内部関数
// 他の部分では呼び出さない関数は内部関数にすると便利
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc はこれを使用できない
    return a + b; // 親関数の変数は使用できる
  }
  return nestedFunc(); // 5
}