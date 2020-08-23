// 数组内容 煎饼 馒头 米饭

// 数组长度
// 数组中的每个元素都有自己的序号
// 我们把数组中元素的序号 称为索引(下标) 数组中的元素与索引意义对应
// 注意 数组索引是从0开始的
let foods: string[] = ["煎饼", "馒头", "米饭", "包子"];
console.log(foods.length);

// 取值
console.log(foods[1]);

// 存值
foods[0] = "biubiubiu";
console.log(foods);

// 数组名称[索引] = 新值 根据索引是否存在 有两种功能
// 1 修改元素 如果索引错在 就表示修改元素
// 2 添加元素 如果索引不存在 就表示添加元素
foods[5] = "测试数组";
console.log(foods[4]);
console.log(foods);

// 添加元素的通用写法
foods[foods.length] = "test";
console.log(foods);
