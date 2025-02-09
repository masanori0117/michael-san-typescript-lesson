console.log("### **30. 基本的な関数**");
console.log("1. 数値を受け取り、その数値の2乗を返す関数を作成してください。");

function square(num: number): number {
    return num * num;
}
console.log(square(5));
console.log(square(10));


console.log("2. 名前を引数として受け取り、`Hello, [名前]!` と出力する関数を作成してください。");
function helloName(name: string): string {
    return `Hello, ${name}!`;
}
console.log(helloName("山田"));


console.log("3. 2つの数値を引数として受け取り、それらの合計を返す関数を作成してください。");
function sumNumber(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(sumNumber(1,2));
console.log(sumNumber(11,20));

console.log("### **31. デフォルト引数**");
console.log('1. 名前を引数として受け取り、デフォルト値を `"Guest"` に設定し、`Welcome, [名前]!` と出力する関数を作成してください。');
function welcome_name(name : string = "Guest"): string {
    return `Welcome, ${name}!`;
}
console.log(welcome_name());
console.log(welcome_name("山田"));

console.log("2. 2つの数値を引数として受け取り、2番目の引数のデフォルト値を10に設定して、それらを掛け算する関数を作成してください。")
function multiplyNumber(num1: number, num2: number) {
    return num1 * num2
}
console.log(multiplyNumber(2,4));
console.log(multiplyNumber(10,10));

console.log("### **32. オプショナル引数**")
console.log("1. 2つの数値を引数として受け取り、2番目の引数が指定されている場合はそれらを掛け算し、指定されていない場合は1番目の数値をそのまま返す関数を作成してください。")
function multiplyOrResturn(num1: number, num2?: number): number {
    return num2 !== undefined ? num1 * num2 : num1;
}
console.log(multiplyOrResturn(2,4));
console.log(multiplyOrResturn(2));

console.log("2. 名前を引数として受け取り、オプショナル引数で年齢を受け取り、`[名前] is [年齢] years old.` または `[名前] is ageless.` を出力する関数を作成してください。")
function displayYearAndName(name: string, age?: number): string {
    return age !== undefined ? `${name} is ${age} years old.` : `${name} is ageless`
}

console.log(displayYearAndName("山田", 15));
console.log(displayYearAndName("田中"));

console.log("### **33. アロー関数**")
console.log("1. 文字列を引数として受け取り、その長さを返すアロー関数を作成してください。")
const getStringLength = (str: string): number => str.length;
console.log(getStringLength("Hello"));
console.log(getStringLength("Typescript"));
console.log(getStringLength(""));


console.log("2. 配列を受け取り、その配列内の要素を全て2倍にして新しい配列を返すアロー関数を作成してください。")
const doubleArray = (arr: number[]): number[] => arr.map(num => num * 2);
console.log(doubleArray([1, 2, 3, 4]));
console.log(doubleArray([-1, -2, -3]));
console.log(doubleArray([]));
