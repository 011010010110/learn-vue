function Demo(){
    this.a = 1
    this.b = 2
}
const d = new Demo()

// 显式原型对象属性
console.log(Demo.prototype)
// 隐式原型对象属性
console.log(d.__proto__)
// 通过显式原型操作原型对象，追加一个x属性，值为99
Demo.prototype.x = 99

console.log(d.x)