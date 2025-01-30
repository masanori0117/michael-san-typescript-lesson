console.log("### 26. 配列の探索と条件分岐")
console.log("1. 配列 `[10, 20, 30, 40, 50]` に値 `30` が含まれているかどうかを確認してください。結果を`true`または`false`で表示してください。")
let numbers: number[] = [10, 20, 30, 40, 50];
console.log(numbers.includes(30));

console.log("2. 配列 `[1, 3, 5, 7, 9]` から最初に条件「偶数」である要素を探してください（該当する要素がない場合は `undefined` を返します）。")
numbers = [1, 3, 5, 7, 9];
console.log(numbers.find((num: number) => num % 2 ===0));

console.log("### 27. 配列のフィルタリングと条件チェック")
console.log("1. 配列 `[12, 24, 35, 47, 55]` から50以上の値だけを取り出して新しい配列を作成してください。")
numbers = [12, 24, 35, 47, 55];
const moreThanFiftyNumbers: number[] = numbers.filter((num: number) => num >= 50);
console.log(moreThanFiftyNumbers);

console.log("2. 配列 `[1, 2, 3, 4, 5, 6, 7, 8]` の全ての要素が偶数であるかどうかを確認してください。")
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const isAllEven: boolean = numbers.every((num: number) => num % 2 === 0);
console.log(isAllEven);

console.log("3. 配列 `[15, 25, 35, 45, 55]` に「20以上かつ40以下」の要素が一つでも含まれているかどうかを確認してください。")
numbers = [15, 25, 35, 45, 55];
console.log(numbers.some((num: number) => num >= 20 && num <= 40));


console.log("### 28. 配列と文字列操作の組み合わせ")
console.log("1. 配列 `['hello', 'world', 'typescript']` の各要素を大文字に変換し、要素同士をハイフン  で連結して一つの文字列を作成してください（例：`'HELLO-WORLD-TYPESCRIPT'`）。")
let words: string[] = ['hello', 'world', 'typescript'];
let string: string = words.map((word: string) => word.toUpperCase()).join('-')
console.log(string)

console.log("2. 文字列 `'apple, banana, cherry'` をカンマで分割し、配列に変換してください。")
string = 'apple, banana, cherry';
words = string.split(', ');
console.log(words)

console.log("3. 配列 `['javascript', 'is', 'awesome']` をスペースで結合し、一つの文字列を作成してください。")
words = ['javascript', 'is', 'awesome'];
string = words.join(' ');
console.log(string);


console.log("### 29. 配列のネスト操作")
console.log("1. 二次元配列 `[[1, 2], [3, 4], [5, 6]]` の全ての要素をフラットにして、一次元配列 `[1, 2, 3, 4, 5, 6]` を作成してください。")
let numbers2d: number[][] = [[1, 2], [3, 4], [5, 6]];
numbers = numbers2d.flat();
console.log(numbers);

console.log("2. 配列 `[['a', 'b'], ['c', 'd'], ['e', 'f']]` の各要素を結合し、新しい配列 `['ab', 'cd', 'ef']` を作成してください。")
const words2d: string[][] = [['a', 'b'], ['c', 'd'], ['e', 'f']];
words = words2d.map((pair: string[]) => pair.join(''));
console.log(words);