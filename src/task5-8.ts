/* ### 5. for文の基礎
*/
console.log("1~10までの数字をfor文を使って出力してください")
for (let num: number = 1; num < 11; num++ ) {
    console.log(num);
}

/*
### 6. for文の基礎２
*/
console.log("35 ~ 46までの数字をfor文を使って出力してください")
for (let num: number = 35; num < 47; num++) {
    console.log(num);
}

/*
### 7.for文と条件式の組み合わせ
*/
console.log("40 ~ 50までの数字の中で奇数の数字のみを出力してください")
for (let num: number = 40; num < 51; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}

/*
### 8. for文と条件式の組み合わせ2
*/
console.log("10 ~ 25までの数字の中で3の倍数の数字のみを出力してください")
for (let num: number = 10; num < 26; num++) {
    if (num % 3 === 0) {
        console.log(num);
    }
}



