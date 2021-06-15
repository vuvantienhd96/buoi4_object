function showmessage() {
    alert('hello world')
}

// cau truc
// function name(prameter1, prameter2) {
//     ...body...
// }

// khai bao function
function sumMinh(pram1, pram2){
    if(typeof(pram1) === "number" && typeof(pram2) === 'number')
    {
        console.log('sum is: ',pram1+pram2);
    }
    else console.log('errror')
}

// goi function để thực thi
// sumMinh(1,2);
// sumMinh('1',2);

// local variables 
function showMessage() {
    let alertMess= "Hello, world"
    console.log(alertMess); 
}

// console.log(alertMess);


// outer variables 

//let userName = "Harry"
// Case1
function showMessage_v2() {
    userName = "Poster"
    let alertMess= "Hello, world " + userName; // Hello, world Póter
    console.log(alertMess);  // Hello, world Póter
}

// console.log(userName) // 1 Harry
// showMessage_v2();  // 2  Hello, world Póter
// console.log(userName) // 3 Poster

// case2
let userName = "Harry"
// Case1
function showMessage_v2(text = "xin chao viet nam") {
    let userName = "Poster"
    //text = 123;
    let alertMess= "Hello, world " + text; // Hello, world 
    console.log(alertMess);  // Hello, world 
}


//showMessage_v2();  // 2  Hello, world xin chao viet nam

function showNumber(number) {
    // nếu number là undefined hoăc null show invalid
    alert(number ?? "invalid")
}

// showNumber(0); // 0
// showNumber(); // invalid
// showNumber(null); // invalid

function checkAge(age){
    // kiem tra dieu kien nếu age >= 18 trả về true
    if(age > 18) {
        return true;
    }
    else return false;
    //ngươc lại return false
}

// let age = prompt('bạn bn tuổi', 18);
// if(checkAge(age)) {
//      console.log("ban da >= 18")
// }
// else{
//     console.log("ban chưa 18");
// }


function doSomething() { /* empty*/ }
//doSomething() === undefined // true

function doSomething_v2() {
    return;
}

//doSomething() === undefined // ?? true
function doSomething_v3() {
    let a = 1;
    let b = 2;
    return ( a 
        + b 
        );
}

//console.log(doSomething_v3());

// function bắt đầu với nameming convensition
// get... - return a value
// calc... -  tinh toan ra gia tri gi do
// create... - tao ra mot cai gi do 
// check... - kiem tra mot thu gi do hoac tra về giá trị là kiểu boolen (true, false, ...)

// example 
// showMessage
// getNumber
// calcSum
// checkValid
// createFormValidate

// Object trong javascript
//let listItem = new Object() // object contructure syntax
//let listItem = {} // object literal 

// example
let listItem = { // an object
    name: "Tienvv", // key "name" chứa value là Tienvv
    age: 25,
    isMale: {
        name: true,
        age: 20
    },
    'hate numbers': true
}


// console.log(listItem.name); // Tienvv
// console.log(listItem.age); // 25

// add item to object

//console.log(listItem);

// delete item to object
delete listItem.age
//console.log(listItem);

listItem.isMale.age = 28 

//console.log(listItem['isMale']);
function makeUser(name, age) {
    return {
        name, // name as name: name
        age     // age  as age: age
    }
}

//console.log(makeUser(1,2)); // {name :1, age: 2}

let obj = {
    0: 'demo'
}

// console.log(obj[0]); // ? 1? demo
// console.log(obj['0']); // ? 2?  demo 

//obj.__proto__ = 5;
//console.log(obj.__proto__);
// syntax "key" in object

let user_v2 = { name: 'Yienvv', age: 25}
//console.log('address' in user_v2); // false
// for... in trong object 
// syntax for(key in objet) { thuc thi lenh ben trong }

let user_v3 = { 'name': 'Yienvv', 'age': 25, 'addRess': "ha noi", 'isValid': true }

// for(let key in user_v3) {
//     console.log(typeof key); // ?
//     //console.log(user_v3[key]); // Yienvv  25 ...
// }

let safary = {
    number1: 100,
    number2: 200,
    number3: -100
}

// viet motj function don gian dung vong lap for...in de tinh ra sum cua object trên ?
function calcSumObject(obj) {
    // khoi tao tong ban dau = 0 
    if(typeof(obj) !== "object") return;
    let sum = 0;

    for(let key in obj) {
        sum += obj[key]
    }

    return sum;

}

// run func
console.log(calcSumObject(safary));

//btvn
let lapOne = {
    height: 100,
    weight: 250,
    name: 'tienvv'
}


// viet mot fucntion nhân các giá trị của object lapone lên 2 nếu value là text thì không nhân
// calcMultiplyNumeric(lapOne);

// // kết quả là như này
// let lapOne = {
//     height: 200,
//     weight: 500,
//     name: 'tienvv'
// }


// tham chiếu object

let mesage_v3 = "jell"
let pramTwo =  mesage_v3;
// console.log(pramTwo); // jell
// console.log(mesage_v3); // jell

let userV5 = { name: 'jell' }
let admin = userV5; // admin đang copy và tham chiếu tới thằng object userV5

admin.name = "tienvv";
// console.log( userV5 === admin); // tienvv
//  userV5 == admin; // true
//  userV5 === admin // true

 let a = {} // vì hai object này đã đươc khai báo ở hai địa chỉ nhớ khác nhau
 let b = {} // nhìn thì nó đều bằng {} nhưng bản chất là hai cái nhau hoàn toàn
//  console.log(a == b); // false
// làm sao để clone môt object mà không gây ảnh hưởng hoặc impact tới object gốc 
let c = {name: 'jell',  height: 200, weight: 500,}
// expect let d = {name: 'jell',  height: 200, weight: 500}

// khởi tạo một object empty mới
let d = {} 

// tiến hành copy tất cả các key và value chuyển sang object d
// for(let key in c) {
//     d[key] = c[key];
// }

//kiêm tra kêt quả nhận được
d.name = "start war"
// console.log(c);
// console.log(d);

// cách 2
// Object.assign(objFather, clone)
let clone = Object.assign({}, c);
clone.name = "star war 2"
// console.log(clone);
// console.log(c);

// merge multi object 
let objv10 = { 
    test: 2,
    test: 4
}

let objv11 = { 
    hello2: 'error',
    hello3: "syntax"
}

let objv12 = { 
    vietnam: 10,
    UAE: "0"
}

// 
Object.assign(objv10, objv11, objv12) // 

// objv10 = {
//     test: 2,
//     test: 4,
//     hello2: 'error',
//     hello3: "syntax",
//     vietnam: 10,
//     UAE: "0"
// }

// Nested Cloning
let userv14 = {
    name: "Jone",
    sizes: {
        height: 20,
        weight: 200
    }
}

let clonevv = Object.assign({}, userv14);
// console.log(userv14.sizes === clonevv.sizes) // true 
// arrow function trong js
// function acc(){

// }
// const a = (a, b) => a +b


// this trong javascipt
let sayHi = name => {
    console.log(name);
}
sayHi("Lan") // Lan

let double = x => x * 2;
double(1) // 2

let obj4 = {
    name: 'hello',
    func: function(){
        // this của obj4
        console.log('xin chao function', this.name) // this là của obj4
        
        return function() {
            //this.name là của func
            console.log('xin chao arrow', this.name) // this là của obj4
        } // khi dung function thi this tuong dong 
    }
}

obj4.func()() // in ra ? 























