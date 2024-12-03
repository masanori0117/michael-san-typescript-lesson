console.log('Hello World !!!');
/* ## 1. 基本的な変数の宣言

以下の指定された条件に合うように、変数をTypeScriptで宣言し、値を代入してください。

- 整数（number型） `number`: 5
- 文字列（string型） `text`: "test"
- 論理型（boolean型） `flag`: true
- null型 `test`: null
*/
var number = 5;
var text = "test";
var flag = true;
var test = null;
/* ### 2. 基本的な計算

整数型（number）の2つの変数を宣言してください。2つの変数を使って次の計算を行い、それぞれの結果を出力してください。

- 足し算
- 引き算
- 掛け算
- 割り算
- 割り算の余り
*/
var num1 = 2;
var num2 = 3;
var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var sur = num1 % num2;
console.log("num1:", num1, "num2:", num2, "足し算:", sum);
console.log("num1:", num1, "num2:", num2, "引き算:", sub);
console.log("num1:", num1, "num2:", num2, "掛け算:", mul);
console.log("num1:", num1, "num2:", num2, "割り算:", div);
console.log("num1:", num1, "num2:", num2, "割り算の余り:", sur);
/* ### 3. 条件式とboolean(論理型)について

初期値が`false`である論理型（boolean）の変数を宣言してください。

問題2で宣言した2つの整数を足した結果が偶数であれば、論理型の変数に`true`を代入してください。

*/
flag = false;
if (sum % 2 === 0) {
    flag = true;
}
else {
    flag = false;
}
console.log("2つの整数を足した結果が偶数か:", flag);
/*
### 4. 条件式

設問3のboolean型の変数を使用し、偶数か奇数かを判定する条件式を作成し、次のように出力してください。

- 偶数なら「偶数です」と表示
- 奇数なら「奇数です」と表示
*/
if (flag === true) {
    console.log("偶数です");
}
else {
    console.log("奇数です");
}
