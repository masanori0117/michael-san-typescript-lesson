// ### 13. `while`ループと条件式

console.log("`while`ループを使用して、1から100までの数字を順に出力しますが、6と10の両方で割り切れる数字が見つかったらループを停止してください。ループが停止する直前に出力された最後の数字を表示してください。")

let count: number = 1;

while (count <= 100) {
  if (count % 6 === 0 && count % 10 === 0) {
    console.log("条件を満たした最後の数字:", count)
    break;
  }
count++;
}

// ### 14. `do-while`ループと条件
console.log("`do-while`ループを使用して、10から50までの偶数の合計を計算し、その結果を出力してください。")

let sum: number = 0;
let num: number = 10;

do {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
} while (num <= 50);

console.log("10から50までの偶数の合計は:", sum);

// ### 15. switch文

console.log("整数型の２つの変数を宣言してください。")
console.log("上記で宣言した２つの変数の内、1つ目を2つ目で引いた数字が偶数、奇数、0で「偶数です」「奇数です」「0です」と表示させるような条件式を書いてください。")
console.log("※なお差がマイナスになる場合は考慮しなくてOKです。")

let num1: number = 10;
let num2: number = 5;

let diff = num1 - num2;

switch (true) {
  case diff === 0:
    console.log("0です")
    break;
  case diff % 2 === 0:
    console.log("偶数です")
    break;
  default:
    console.log("奇数です")
    break;
}
