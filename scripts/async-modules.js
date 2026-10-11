// このファイルはNode.jsで実行

// No.10-非同期プログラミング
// コールバック
import fs from "node:fs";

const filename = "../sample.txt"

fs.readFile(filename, "utf8", (err, content) => {
  // ファイルが読み込まれたときに呼び出される
  if (err) {
    throw err;
  }
  console.log(content);
});

setTimeout(() => {
  console.log("2秒後に実行");
}, 2000);

console.log("先に実行");

// プロミス
import fs_p from "node:fs/promises";

fs_p.readFile(filename, "utf8")
  // ファイルの読み込みに成功したときに実行される
  .then((content) => {
    console.log(content);
  })
  // ファイルの読み込みに失敗したときに実行される
  .catch((err) => {
    throw err;
  });

// async：関数を非同期関数として定義する
async function readFile(filename) {
  // await：この関数内の続きの処理を待つ
  // この場合は、ファイルの読み込み結果が得られるまで続きの処理を待つ
  const content = await fs_p.readFile(filename);
  console.log(content);
}


// No.10-モジュール
// import:他のファイルから取り込む
import { add5 as mathAdd } from "./math.js";

console.log(mathAdd(2, 3)); // 5