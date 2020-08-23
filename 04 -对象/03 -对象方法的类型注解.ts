// 说明 将鼠标放在以下变量名称上就可以知道类型注解
let age = 18;
let songName = "晴天";
let isVip = true;
let person1 = {
  name: "刘老师",
  age: 18,
};

// ---
let p1 = {
  sayHi: function () {
    console.log("哎哟 不错哦");
  },
};

let p2 = {
  sing: function (name: string) {
    console.log("歌曲名称" + name);
  },
};
