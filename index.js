/////////////// 1 - masala ///////////////

// class Student {
//   constructor(surename, name, university, expertise) {
//     this.name = name;
//     this.surename = surename;
//     this.university = university;
//     this.expertise = expertise;
//   }
//   getStudentFullInformation() {
//     return `${this.surename} ${this.name} ${this.university}ning ${this.expertise} yo'nalishi talabasi!`;
//   }
// }
// let stunden1 = new Student(
//   "Shomurodov",
//   "Munisbek",
//   "UrDU",
//   "Amaliy matematika"
// );
// console.log(stunden1.getStudentFullInformation());

/////////////// 2 - masala ///////////////

// class StrInNumSum {
//   static sum(str) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//       let a = parseInt(str[i]);
//       if (!isNaN(a)) {
//         result += a;
//       }
//     }
//     return result;
//   }
// }
// console.log(StrInNumSum.sum("1m4a6g"));

/////////////// 3 - masala ///////////////

// class Car {
//   constructor(carName, model, color) {
//     this.carName = carName;
//     this.model = model;
//     this.color = color;
//   }
//   appearance() {
//     return `${this.color} rangli ${this.carName}ning ${this.model} rusumli mashinasi`;
//   }
// }
// class MyDreamCar extends Car {
//   constructor(carName, model, color, maxSpeed, power) {
//     super(carName, model, color);
//     this.maxSpeed = maxSpeed;
//     this.power = power;
//   }
//   interiorView() {
//     return `Mashinada ${this.power} ta ot kuchi bor va maksimal tezligi ${this.maxSpeed} km/soat`;
//   }
// }
// let myCar = new MyDreamCar("BMW", "M5 E39", "Oq", 250, 400);
// console.log(myCar.appearance());
// console.log(myCar.interiorView());

/////////////// 4 - masala ///////////////

// class MathPow {
//   static pow(num, degree) {
//     return num ** degree;
//   }
// }
// console.log(MathPow.pow(2, 4));

/////////////// 5 - masala ///////////////

// class Sum {
//   #a;
//   constructor(a, b) {
//     this.#a = a;
//     this.b = b;
//   }
//   getSum() {
//     return this.#a + this.b;
//   }
// }
// let sum1 = new Sum(6, 12);
// console.log(sum1.getSum());

/////////////// 6 - masala ///////////////

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   birthYear() {
//     return 2024 - this.age;
//   }
// }
// class MyInformation extends Person {
//   constructor(name, age, weight) {
//     super(name, age);
//     this.weight = weight;
//   }
// }
// let res = new MyInformation("Munisbek", 20, 50);
// console.log(res.birthYear());

/////////////// 7 - masala ///////////////

// class MyFactorial {
//   static Factorial(a) {
//     if (a == 0 || a == 1) {
//       return 1;
//     }
//     return a * this.Factorial(a - 1);
//   }
// }
// console.log(MyFactorial.Factorial(6));

/////////////// 8 - masala ///////////////

// class MyClass {
//   constructor(str) {
//     this.str = str;
//   }
//   num() {
//     let newArr = [];
//     for (let i = 0; i < this.str.length; i++) {
//       let res = parseInt(this.str[i]);
//       if (!isNaN(res)) {
//         newArr.push(res);
//       }
//     }
//     return newArr;
//   }
// }
// let result = new MyClass("1m2s6g");
// console.log(result.num());

/////////////// 9 - masala ///////////////

// class MathMax {
//   static getmax(a, b) {
//     if (a > b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
// }
// console.log(MathMax.getmax(12, 6));

/////////////// 10- masala ///////////////

// class MyClass {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   getSum() {
//     return this.a + this.b;
//   }
// }
// class MyClass2 extends MyClass {
//   constructor(a, b, c) {
//     super(a, b);
//     this.c = c;
//   }
//   getBigSum() {
//     return this.a + this.b + this.c;
//   }
// }
// let res = new MyClass2(12, 6, 10);
// console.log(res.getBigSum());
// console.log(res instanceof MyClass2);
// console.log(res instanceof MyClass);

///////////Qo'shimcha masalalar///////////

/////////////// 1 - masala ///////////////

// class MyTootballHero {
//   constructor(name, age, club) {
//     this.name = name;
//     this.age = age;
//     this.club = club;
//   }
//   func() {
//     return `Men yoqtirgan futbolchi ${this.name} va u ${this.age} yoshda va hozirda ${this.club} clubida o'ynaydi`;
//   }
// }
// let res = new MyTootballHero("Ronaldo", 39, "Al-Nasr");
// console.log(res.func());

/////////////// 2 - masala ///////////////

// class MathAbc {
//   static getAbc(num) {
//     if (num < 0) {
//       return num * -1;
//     } else {
//       return num;
//     }
//   }
// }
// console.log(MathAbc.getAbc(-12));

/////////////// 3 - masala ///////////////

// class MyClass {
//   #num1;
//   constructor(num1, num2, a) {
//     this.#num1 = num1;
//     this.num2 = num2;
//     this.a = a;
//   }
//   multy() {
//     return [this.#num1 * this.a, this.num2 * this.a];
//   }
//   divide() {
//     return [this.#num1 / this.a, this.num2 / this.a];
//   }
// }
// let res = new MyClass(12, 6, 2);
// console.log(res.multy());
// console.log(res.divide());

/////////////// 4 - masala ///////////////

// class Mathmin {
//   static getmin(a, b) {
//     if (a > b) {
//       return b;
//     } else {
//       return a;
//     }
//   }
// }
// console.log(Mathmin.getmin(10, 4));

/////////////// 5 - masala ///////////////

// class MyTootballHero {
//   constructor(name, age, club) {
//     this.name = name;
//     this.age = age;
//     this.club = club;
//   }
//   func() {
//     return `Men yoqtirgan futbolchi ${this.name} va u ${this.age} yoshda va hozirda ${this.club} clubida o'ynaydi`;
//   }
// }
// class MyClass extends MyTootballHero {
//   constructor(name, age, club, oldClub, year) {
//     super(name, age, club);
//     this.oldClub = oldClub;
//     this.year = year;
//   }
//   func2() {
//     return `Menga ${this.name}ni ${this.year} yilgi maxsumda ${this.oldClub}dagi o'yinlari juda yoqadi!!!`;
//   }
// }
// let res = new MyClass("Ronaldo", 39, "Al-Nasr", "Real Madrid", 2017);
// console.log(res.func());
// console.log(res.func2());

/////////////// 6 - masala ///////////////

// class MyClass {
//   static RepeatArr(arr, n) {
//     let newArr = [];
//     for (let i = 0; i < n; i++) {
//       newArr.push(...arr);
//     }
//     return newArr;
//   }
// }
// console.log(MyClass.RepeatArr([12, 6], 3));

/////////////// 7 - masala ///////////////

// class MyClass {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }
// class NewClass extends MyClass {
//   constructor(a, b, arr) {
//     super(a, b);
//     this.arr = arr;
//   }
//   getPush() {
//     this.arr.push(this.a);
//     this.arr.push(this.b);
//     return this.arr;
//   }
// }
// let res = new NewClass(4, 5, [1, 2, 3]);
// console.log(res.getPush());

/////////////// 8 - masala ///////////////

// class MyClass {
//   static charAt(str, n) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       if (i == n) {
//         result = str[i];
//       }
//     }
//     return result;
//   }
// }
// console.log(MyClass.charAt("salom", 4));