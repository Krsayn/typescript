// 求数组中所有元素的和
// [200,30,3]
let sum1 = 0;
let arr: number[] = [30, 200, 3];
for (let i: number = 0; i < arr.length; i++) {
  sum1 += arr[i];
}
console.log("sum=====>" + sum1);

console.log();

let max: number = arr[0];
for (let i: number = 1; i < arr.length; i++) {
  max = max > arr[i] ? max : arr[i];
}
console.log("max=====>" + max);
