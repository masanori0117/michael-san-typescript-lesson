console.log("### 37. ライブラリインストール")
console.log("`@types/node` をインストールしてください。(npm / yarn)")
console.log("package.jsonが作成されることを確認してください。")

import * as os from 'os';
console.log(`Your system uptime: ${os.uptime()} seconds`);

console.log("### 38. package.jsonについて")
console.log("以下のスクリプトをpackage.jsonの `scripts` に追加してください。")

console.log("| スクリプト名 | コマンド |")
console.log("| --- | --- |")
console.log("| `start` | `node index.js` |")
console.log("| `build` | `tsc`  |")
console.log("- `npm run start` を実行してください")
console.log("- `npm run build` を実行してしてください")

console.log("### 39. 標準入力")
console.log("下記仕様を満たすプログラムを実装してください。")
//仕様
//---
//「あなたの名前を教えてください。」出力
//↓
//入力 ex) Micael
//↓
//「Micaelさん、あなたの年齢は何歳ですか？」出力
//↓
//入力 ex) 20
//↓
//「Micaelさん（年齢:20）、ご登録ありがとうございます！」出力
//↓
//プログラム終了
//---
//なお、標準入力はreadlineを使用して実装してください。

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('あなたの名前を教えてください。', (name: string) => {
  rl.question(`${name}さん、あなたの年齢は何歳ですか？`, (age: string) => {
        console.log(`${name}さん（年齢:${age}）、ご登録ありがとうございます！`);
    rl.close();
  });
});
