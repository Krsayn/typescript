for (let i: number = 1; i <= 5; i++) {
  console.log(i);
}
console.log();

for (let i: number = 1; i <= 5; i++) {
  if (i > 2) {
    console.log("吃饱了");
    break;
  }
  console.log("正在吃第" + i + "个包子");
}

console.log();

let sum: number = 0;
for (let i: number = 1; i <= 100; i++) {
  sum += i;
}
console.log("sum=====>" + sum);
