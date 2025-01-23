// ### 23. `map` を使った配列の操作
console.log("1. 配列 `[2, 4, 6, 8, 10]` の各要素を半分にした新しい配列を作成してください。")
let numbers: number[] = [2, 4, 6, 8, 10];
const halfNumbers: number[] = numbers.map((number: number) => number / 2)
console.log(halfNumbers)

console.log("2. 文字列配列 `['a', 'b', 'c', 'd', 'e']` の各要素を `'_'` で囲んだ新しい配列を作成してください（例：`'_a_'`）。")
const letters: string[] = ['a', 'b', 'c', 'd', 'e'];
const newLetters: string[] = letters.map((letter: string) => `_${letter}_`);
console.log(newLetters)

console.log("3. 数字の配列 `[1, 2, 3, 4, 5]` を使って、各要素を文字列に変換した新しい配列を作成してください。")
numbers = [1, 2, 3, 4, 5];
const numberssToStrings: string[] = numbers.map((number: number) => number.toString());
console.log(numberssToStrings)

// ### 24. `forEach` を使った配列の操作
console.log("1. 数字の配列 `[10, 20, 30, 40, 50]` の各要素を `console.log` で表示してください。");
numbers = [10, 20, 30, 40, 50];
numbers.forEach((number: number) => console.log(number));

console.log("2. 配列 `[3, 6, 9, 12, 15]` の各要素を使って、各値に2を足した結果を`console.log`で表示してください（新しい配列の作成は不要）。");
numbers = [3, 6, 9, 12, 15]
for (let num: number = 0; num < numbers.length; num++) {
  console.log(numbers[num] + 2);
}

console.log("3. 文字列配列 `['cat', 'dog', 'bird']` の各要素の先頭に「動物:」を追加して表示してください。")
const animals: string[] = ['cat', 'dog', 'bird'];
animals.forEach((animal: string) => console.log(`動物: ${animal}`))

// ### 25. 配列の高度な操作
console.log("1. 配列 `[1, 2, 3, 4, 5, 6]` の要素を合計してください。")
numbers = [1, 2, 3, 4, 5, 6]
let totalNumber: number = numbers.reduce((total: number, number: number) => total + number, 0);
console.log(totalNumber);

console.log("2. 配列 `[10, 20, 30, 40, 50]` の平均値を計算してください。")
numbers = [10, 20, 30, 40, 50]
totalNumber = numbers.reduce((total: number, number: number) => total + number, 0)
const averageNumber: number = totalNumber / numbers.length;
console.log(averageNumber);

console.log("3. 数字が重複している配列 `[1, 2, 2, 3, 4, 4, 5]` から重複を削除して新しい配列を作成してください。")
numbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumbers: number[] = [...new Set(numbers)];
console.log(uniqueNumbers);

console.log("4. 配列 `[5, 3, 8, 1, 2, 7]` を昇順にソートしてください。")
numbers = [5, 3, 8, 1, 2, 7]
const sortedNumbers: number[] = numbers.sort((a: number, b: number) => a - b);
console.log(sortedNumbers);