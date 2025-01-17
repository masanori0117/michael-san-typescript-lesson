console.log("# 19. 配列の作成とアクセス")
console.log("1. 空の配列を作成し、表示してください。")
let numbers: number[] = [];
console.log(numbers);

console.log("2. 数字の配列 [1, 2, 3, 4, 5] を作成し、配列の最初の要素と最後の要素を表示してください。")
numbers = [1, 2, 3, 4, 5];

const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];

console.log("最初の要素:", firstElement)
console.log("最後の要素:", lastElement)

//# 20. 配列の操作
console.log("1. 配列 [1, 2, 3, 4, 5] に要素 6 を追加してください。")
numbers.push(6);
console.log("要素 6 を追加した後の配列;", numbers);

console.log("2. 配列 [1, 2, 3, 4, 5] の3番目の要素を 10 に変更してください。")
numbers = [1, 2, 3, 4, 5];
numbers[2] = 10;
console.log(numbers);

console.log("3. 配列 [1, 2, 3, 4, 5] から要素 3 を削除してください")
numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(number => number !== 3);
console.log(filteredNumbers);

console.log("4. 配列 [1, 2, 3, 4, 5] を逆順にしてください。")
numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);



//# 21. 配列の操作（応用）
console.log("1. 配列 [1, 2, 3, 4, 5] の各要素を2倍にした新しい配列を作成してください。")
numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(number  => number  * 2);
console.log(doubleNumbers);

console.log("2. 配列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] から偶数だけを取り出して新しい配列を作成してください。")
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number  => number  % 2 === 0);
console.log(evenNumbers);


console.log("3. 文字列配列 ['apple', 'banana', 'cherry'] の各要素の長さを表示してください。")
const fruits = ['apple', 'banana', 'cherry'];
const fruitsLengths = fruits.map(fruit => fruit.length);
console.log(fruitsLengths);

console.log("4. 配列 [1, 2, 3, 4, 5] と [6, 7, 8, 9, 10] を結合して新しい配列を作成してください。")
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const mergedNumbers = numbers1.concat(numbers2);
console.log(mergedNumbers);

// # 22. 配列の応用操作
console.log("1. 配列 [1, 2, 3, 4, 5] の各要素を3倍にした新しい配列を作成してください。")
numbers = [1, 2, 3, 4, 5];
const tripleNumbers = numbers.map(number  => number  * 3);
console.log(tripleNumbers);

console.log("2. 配列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] から奇数だけを取り出して新しい配列を作成してください。")
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(number  => number  % 2 !== 0);
console.log(oddNumbers);

console.log("3. 配列 ['red', 'blue', 'green', 'yellow'] の各要素を大文字に変換した新しい配列を作成してください。")
const colors = ['red', 'blue', 'green', 'yellow'];
const upperCaseColors = colors.map(color => color.toUpperCase());
console.log(upperCaseColors);

