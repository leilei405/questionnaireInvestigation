// let obj = {
//   userName: '张三',
//   age: 12,
// }

// import { type } from 'os'

// let username = 'userName'

// let test = obj[username]

// let obj = {
//   userName: '张三',
//   age: 12,
// }
// const username = 'userName'
// let u = obj[username]
// console.log(u)

// function info(name: string, age: number) {
//   console.log(name, '===name===')
//   console.log(age, '===age===')
//   return 4
// }

// info('122', 12)

// const info = (name: string, age: number): number => {
//   console.log(name, '===name===')
//   console.log(age, '===age===')
//   return 4
// }

// info('122', 12)

// const info: (name: string, age: number) => number = (name, age) => {
//   console.log(name, '===name===')
//   console.log(age, '===age===')
//   return 4
// }

// type InfoFun = (name: string, age: number) => number

// const info: InfoFun = (name, age) => {
//   console.log(name, '===name===')
//   console.log(age, '===age===')
//   return 4
// }
// info('122', 12)

// reset参数
// type ParamsType = {
//   person: string
//   sex: string
//   bool: boolean
// }
// function info(name: string, age: number, ...reset: ParamsType[]) {
//   console.log(name, '===name===')
//   console.log(age, '===age===')
//   console.log(reset, '===reset===')
//   return 4
// }
// type ParamsType = {
//   name: string
//   age: number
//   bool?: boolean
// }
// function info1(obj: ParamsType) {
//   console.log(obj.name, '===name===')
//   console.log(obj.age, '===age===')
//   return 4
// }
// const subObj: ParamsType = { name: 'zhangsan', age: 12, bool: false }

// type ParamsType1 = {
//   name: string
//   age: number
//   bool?: boolean // 可选操作符
// }
// function info({ name, age }: ParamsType1) {
//   console.log(name, '===name===')
//   console.log(age, '===age===')
//   return 4
// }
// info({ name: 'zhangsan', age: 12 })

// 定义基础类型
// type num = number

// // 定义联合类型1.
// type Lian = string | number | symbol

// // 定义联合类型 2.
// interface Test1 {
//   id: string
// }
// interface Test2 {
//   id: string
//   numStr: string
//   age: number
//   name: string
// }

// // const a: Test1 = { id: '1', name: '23214' }

// // 继承多个接口以逗号分割
// interface Test3 extends Test1, Test2 {
//   name: string
//   age: num
// }

// // 继承单个接口
// interface Test4 extends Test1 {
//   name: string
//   age: num
// }

// type ParamsType = Test2 | Test1

// const value: ParamsType = { id: '61060', numStr: '321' }

// const salary: [string, number, number, number, number] = ['雷雷', 12000, 200, 300, 400]

// // as const 将数组设置为只读  约束了数组中的每一项也为常数
// const arr = [10, 20, 30, 40, 50, 60] as const
// arr[0] = 12 // 无法为“0”赋值，因为它是只读属性

// 可变元祖  ...any[] 可以接收多个  相当于  reset
// const salary: [string, number, number, ...any[]] = ['雷雷', 12000, 200, 300, 400]

// // 可变元祖解构
// const { name, age, address, ...reset }: [string, number, string, ...any[]] = [
//   '雷雷',
//   24,
//   '陕西省',
//   300,
//   400,
// ]

// 可变元祖tag和tag的意义
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const {
//   name,
//   age,
//   address,
//   ...reset
// }: [name_: string, age_: number, address_: string, ...reset_: any[]] = [
//   '雷雷',
//   24,
//   '陕西省',
//   300,
//   400,
// ]
// name_  age_  address_  reset_  只是为了表达 对应类型的含义
// 类、静态属性、何时用静态属性?
// 类就是拥有相同属性和方法的一系列对象的集合.
// 展开理解: 类是一个模具,是从这该类包含的所有具体对象中抽象出来的一个概念,类定义了它所包含的全体对象的静态特征和动态特征
// class People {
//   name: string
//   age: number
//   address: string
//   static count = 0
//   constructor(name: string, age: number, address: string) {
//     this.name = name
//     this.age = age
//     this.address = address
//     People.count++
//   }
//   doEat() {}
//   doStep() {}
// }
// const p = new People('3213', 321, '321')
// console.log(People.count)

// p.doEat()
// p.doStep()
// 静态成员(静态属性+静态方法)

// function formatDate() {}
// function diffDateByDay() {} // 俩个日期之间的天数计算
// function diffDateByHour() {} // 俩个日期之间的小时计算
// function timeConversion(resetTime: number) {} // 天 时 分 秒
// class DateUntil {
//   static formatDate() {}
//   static diffDateByDay() {} // 俩个日期之间的天数计算
//   static diffDateByHour() {} // 俩个日期之间的小时计算
//   static timeConversion(resetTime: number) {} // 天 时 分 秒
// }

// DateUntil.formatDate()

// 1.静态方法
// 2.单例模式 禁止创建多个对象
// 单例模式旨在确保一个类只有一个实例，并提供一种全局访问点来获取该实例。
// class DateUntil {
//   static dateUtil = new DateUntil() // 唯一的实例对象方法

//   // 1. 创建一个私有的构造方法  外部不能访问
//   private constructor() {
//     console.log(1)
//   }
//   formatDate() {
//     console.log(1)
//   }
//   diffDateByDay() {
//     console.log(1)
//   }

//   diffDateByHour() {
//     console.log(1)
//   }
//   timeConversion(resetTime: number) {
//     console.log(1)
//   }
// }

// const p1 = DateUntil.dateUtil
// const p2 = DateUntil.dateUtil
// // 因为 p1 和 p2 都引用了同一个唯一的 DateUntil 实例。
// // 这就是单例模式的作用，确保类的实例在应用程序中是唯一的。
// console.log(p1 === p2)

// export default DateUntil.dateUtil

// 单例模式旨在确保一个类只有一个实例，并提供一种全局访问点来获取该实例。
// class DateUntil {
//   static dateUtil: DateUntil
//   static getInstance() {
//     // 如果为空则创建实例
//     if (!this.dateUtil) {
//       this.dateUtil = new DateUntil()
//     }
//     return this.dateUtil
//   }
//   private constructor() {
//     console.log('立即创建')
//   }
//   formatDate() {
//     console.log('测试')
//   }
//   diffDateByDay() {}
//   diffDateByHour() {}
//   timeConversion(resetTime: number) {}
// }

// getter和setter 的意义
// 赋值方法1.属性赋值
// 赋值方法2.构造函数来赋值
// 赋值方法3.类中的某个方法
// class People {
//   name: string
//   _age!: number
//   address: string
//   static count = 10
//   constructor(name: string, address: string) {
//     this.name = name
//     this.address = address
//     People.count++
//   }
//   // 设置
//   set age(val: number) {
//     if (val > 10 && val < 128) {
//       this._age = val
//     } else {
//       throw new Error('年龄不合适')
//     }
//   }
//   // 获取
//   get age() {
//     return this._age
//   }
//   doEat() {
//     console.log(1)
//   }
//   doStep() {
//     console.log(2)
//   }
// }

// const p = new People('name', 'address')
// p.age = 200 // 会抛出错误
export {}
