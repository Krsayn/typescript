let songs: string[] = ["五环之歌", "探清水河", "晴天"];

// length 属性
console.log(songs.length);

// push 方法
let len: number = songs.push("痒");
console.log("len=====>" + len);
console.log(songs);

// foreach 方法
// 注意 forEach方法的参数是一个函数 这种函数也称为回调函数
// forEach方法的执行过程 遍历整个数组
// 为数组的每一项元素 调用一次回调函数
// forEach方法 可以根据当前数组的类型 自动推导出回调函数中参数的类型
// 注意 回调函数中的参数可以用任意名称 并且 如果没有用到 可以省略
songs.forEach(function (item, index) {
  console.log("索引为", index, "元素为", item);
});

// 需求 判断数组nums中是否包含大于10的数字
let nums: number[] = [1, 12, 9, 8, 6];

nums.forEach(function (item, index) {
  if (item > 10) {
    console.log(true);
  }
});

// some方法 遍历数组 查找是否有一个满足条件的元素
// 如果有 就停止循环
console.log(
  nums.some(function (num) {
    if (num > 10) {
      // 说明已经找到满足条件的元素 通过返回true来停止后续的循环
      return true;
    }
    // 说明没有找到满足条件的元素 通过返回false来继续后面的循环
    return false;
  })
);
