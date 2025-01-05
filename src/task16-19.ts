console.log("16, 図形の表示")

console.log("0")
console.log("00")
console.log("000")
console.log("この図形をfor文を使って出力してください。")

let zero: string = "0";

for (let num: number = 0; num < 4; num++) {
    console.log(Array(num + 1).join(zero))
}

console.log("")
console.log("17, 図形の表示")
console.log("0")
console.log("000")
console.log("00000")
console.log("この図形をfor文を使って出力してください。")
console.log("")

for (let num: number = 0; num < 6; num++) {
    if (num % 2 !== 0) {
        console.log(Array(num + 1).join(zero))
    }
}

console.log("")
console.log("18, 図形の表示")
console.log("0")
console.log("000")
console.log("00000")
console.log("000")
console.log("0")
console.log("この図形をfor文を使って出力してください。")
console.log("")

for (let num: number = 0; num < 6; num++) {
    if (num % 2 !== 0) {
        console.log(Array(num + 1).join(zero))
    }
}

for (let num: number = 3; num >= 0; num--) {
    if (num % 2 !== 0) {
        console.log(Array(num + 1).join(zero))
    }
}
