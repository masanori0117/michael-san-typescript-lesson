// ### 9. for文と条件式の組み合わせ3
console.log("20 ~ 50までの数字の中で2で割ったら奇数となる数字のみを出力してください")

for (let num: number = 20; num < 51; num++) {
    if ((num / 2) % 1 === 0 && (num / 2) % 2 !== 0) {
        console.log(num)
    }
}


// ### 10. for文と条件式の組み合わせ4
console.log("20 ~ 50までの数字の中で2で割ったら奇数となる数字の個数を出力してください")

let count: number = 0;
for (let num: number = 20; num < 51; num++) {
    let div = num / 2
    if (div % 1 !==0){
        continue;
    }
    if (div % 2 !== 0) {
        count++;
    }
}
console.log(count);


// ### 11. for文を使用した計算
console.log("1000未満の「3と7の倍数」は何個あるか　個数を出力してください")

count = 0;
for (let num: number = 0; num < 1000; num++) {
    if (num % 3 === 0 || num % 7 === 0) {
        count++;
    }
}
console.log(count);

// ### 12. for文を使用した計算2
console.log("1000未満の「3と7の倍数」の5番目に大きい数を出力してください")

count = 0;
for (let num: number = 999; num > 0; num--) {
    if (num % 3 === 0 || num % 7 === 0) {
        count++;
        if (count === 5) {
            console.log(num)
            break;
        }
    }
}
