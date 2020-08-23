// 创建一个接口
interface IUser {
  name: string;
  age: number;
  sayHi: () => void;
}

// 使用接口
let p3: IUser = {
  name: "刘老师",
  age: 18,
  sayHi() {
    console.log("故事里有个小黄花。。。");
  },
};
// 访问对象p3的属性
console.log(p3.name);

// 调用方法
p3.sayHi();

// 修改name属性的值
p3.name = "李老师";
console.log(p3.name);

console.log(Math.PI)
