console.log("### 34. コールバック関数")
console.log("数値を引数として受け取り、その数値に対して渡されたコールバック関数を適用して結果を返す関数を作成してください。")
console.log("例: コールバックとして2倍する関数を渡すと、引数が2の場合4を返す。")
function applyCallback(num: number, callback: (n: number) => number): number {
    return callback(num);
}
const double = (num: number): number => num * 2;
console.log(applyCallback(2, double));

console.log("文字列配列を受け取り、各文字列に対してコールバック関数を適用した結果の新しい配列を返す関数を作成してください。")
function applyCallbackToArray(
    arr: string[],
    callback: (str: string) => string
): string[] {
    return arr.map(callback);
}
console.log("例: 各文字列を大文字に変換するコールバック関数")
const toUpperCase = (str: string): string => str.toUpperCase();
console.log(applyCallbackToArray(["hello", "world"], toUpperCase));


console.log("### 35. 可変長引数 (Restパラメータ)")
console.log("任意の数の数値を引数として受け取り、それらの合計を返す関数を作成してください。")
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(sumNumbers());


console.log("任意の数の文字列を引数として受け取り、それらをスペースで結合して1つの文字列として返す関数を作成してください。")
function joinStrings(...strings: string[]): string {
    return strings.join(" ");
}
console.log(joinStrings("This", "is", "a", "test"));
console.log(joinStrings());


console.log("### 36. 再帰関数")
console.log("与えられた数値を引数として、1からその数値までの合計を計算する再帰関数を作成してください。")
console.log("例: sum(5) → 1 + 2 + 3 + 4 + 5 = 15")
function sum(n: number): number {
    if (n <= 0) return 0;
    return n + sum(n - 1);
}
console.log(sum(5));
console.log(sum(1));
console.log(sum(0));
console.log(sum(-3));


console.log("与えられた数値を引数として、その数値の階乗 (factorial) を計算する再帰関数を作成してください。")
console.log("例: factorial(5) → 5 × 4 × 3 × 2 × 1 = 120")
function factorial(n: number): number {
    if (n < 0) throw new Error("負の数の階乗は定義されていません");
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(0));
try {
    console.log(factorial(-3));
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("予期せぬエラー", error);
    }
}

