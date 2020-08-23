//console.log(2 - "1"); // 报错 算术运算符的右侧必须是数字类型

// +'1' 表示将'1'(string) => 1(number)
// 所以 2 - +'1 => 2-1 =>1
console.log(2 - +"1");

let a: number = 10;

++a;
a++;
