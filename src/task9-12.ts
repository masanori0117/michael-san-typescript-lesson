// ### 9. for文と条件式の組み合わせ3
console.log("20 ~ 50までの数字の中で2で割ったら奇数となる数字のみを出力してください")

for (let num9: number = 20; num9 < 51; num9++) {
    if ((num9 / 2) % 1 === 0 && (num9 / 2) % 2 !== 0) {
        console.log(num9)
    }
}


// ### 10. for文と条件式の組み合わせ4
console.log("20 ~ 50までの数字の中で2で割ったら奇数となる数字の個数を出力してください")

let count: number = 0;
for (let num10: number = 20; num10 < 51; num10++) {
    if ((num10 / 2) % 1 === 0 && (num10 / 2) % 2 !== 0) {
        count++;
    }
}
console.log(count);


// ### 11. for文を使用した計算
console.log("1000未満の「3と7の倍数」は何個あるか　個数を出力してください")

count = 0;
for (let num11: number = 0; num11 < 1000; num11++) {
    if (num11 % 3 === 0 || num11 % 7 === 0) {
        count++;
    }
}
console.log(count);

// ### 12. for文を使用した計算2
console.log("1000未満の「3と7の倍数」の5番目に大きい数を出力してください")

count = 0;
for (let num12: number = 999; num12 > 0; num12--) {
    if (num12 % 3 === 0 || num12 % 7 === 0) {
        count++;
        if (count === 5) {
            console.log(num12)
            break;
        }
    }
}
