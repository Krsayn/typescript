// 演示函数的使用
function getSum(nums: number[]) {
  let sum: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("sum=====>" + sum);
}

let nums: number[] = [1, 3, 5];
getSum(nums);
let nums2: number[] = [2, 4, 6];
getSum(nums2);

function twoSum(number1:number,number2:number){
    console.log(number1+number2)
}

twoSum(1,3)