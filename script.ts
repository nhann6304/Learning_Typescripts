import { isCallLikeExpression } from "typescript";


const userName: Array<string> = ["Nhân", "LALALA"];




userName.push("haha") // Thêm vào cuối mãng
userName.unshift("Nhân") // Thêm vào đầu mãng 

console.log("-----------------------------------------------------------------");
console.log(userName);
const phantucuoicung: string = userName.pop(); // Cắt value ở vị trí cuối cùng trong mãng thành string
console.log("Phần tử cuối cùng::", phantucuoicung);
console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");

const phantuovitrithu: number = userName.indexOf("LALALA");
// Trả ra number vị trí của value đó
// Không có trả ra -1 
console.log("phantuovitrithu", phantuovitrithu);
console.log("-----------------------------------------------------------------");

// challenge 3 clip 22
console.log("-----------------------------------------------------------------");

function Calculator(bills: number) {
    let percent: number
    if (bills < 50) {
        percent = 0.2
    } else if (bills > 50 && bills < 200) {
        percent = 0.15
    } else {
        percent = 0.1
    }

    return percent * bills;

}


const bill = [124, 48, 268];
const tips = [
    Calculator(bill[0]),
    Calculator(bill[1]),
    Calculator(bill[2]),
]
// console.log(tips);

console.log("-----------------------------------------------------------------");

const john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 2024,
    family: ['Quin', "Tri", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    tinhtoan: function (birthDay: number) {
        // return 2024 - this.birthYear;
        return 2024 - birthDay;

    }
}


console.log(john.tinhtoan(2004));

// console.log("Lấy value từ key", john.birthYear); // Lấy value từ key
// console.log("Tính toán hàm", john.tinhtoan(2004));
console.log("-----------------------------------------------------------------");


// challenge 3 clip 26 => 27 
console.log("-----------------------------------------------------------------");

interface abc {
    fullName: string,
    mass: number,
    height: number,
    calculator: ({ mass, height }: { mass: number, height: number }) => number;
}

const abc: abc = {
    fullName: "Huynh Thanh Nhan",
    mass: 92,
    height: 1.95,
    calculator({ mass, height }) {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    },
}

console.log("tinh toan", abc.calculator({ height: 123, mass: 123 }));

console.log("-----------------------------------------------------------------");



console.log("-----------------------------------------------------------------");
//for
for (let i = 0; i <= bill.length - 1; i++) {
    console.log(bill[i]);
}
//while
let sountWhile = 0;
while (sountWhile < bill.length) {
    console.log("Kết quả vòng while::::", bill[sountWhile]);
    sountWhile++
}


console.log("-----------------------------------------------------------------");


const obj = {
    bills: [123, 123, 123, 123, 123],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (let i = 0; i < this.bills.length; i++) {
            let bill = this.bills[i];
            console.log(i);
            this.tips[i] = bill
        }

        return tips
    }
}

console.log("Dòng 131", obj.calcTips());

console.log("-----------------------------------------------------------------");
console.log("test1", test("test1"));

function test(value1: string): boolean {
    return true
}


const test2 = function (value2: string): boolean {
    return false
}
console.log("test2", test("test2"));


// scoping => Độ đóng hộp
console.log("-----------------------------------------------------------------");

const scopingGlobal = "scopingGlobal";

function funcScopingGlobal() {
    const b = "Hi"

    function funcScopingGlobalChild() {
        const c = "Hi111"
        return c
    }
    return `${funcScopingGlobalChild()} ${b}`
}



function third() {
    const d = "Nhan";
    console.log("ra gì", scopingGlobal + d);
}

third()

console.log(
    funcScopingGlobal()
);
console.log("-----------------------------------------------------------------");

// Con trỏ THIS
console.log("-----------------------------------------------------------------");
// Do khong có đối tượng class nên k có giợi ý 
const nhan = {
    name: "Nhân",
    age: 20,
    yearOnBirth: 2004,
    calculateAge: function () {
        console.log(this);
        console.log(this.name);

        function innerFunction() {
            console.log("bên trong");
        }
        innerFunction()
    }
}

console.log("THIS không hướng đối tượng", nhan.calculateAge());

// Viết theo hướng đối tượng

class Nhan1 {
    private name: string = "Nhân";
    age: number = 20;
    yearOnBirth: number = 2004;
    calculateAge(year: number) {
        return year = this.yearOnBirth;
    }
}

const oopNhan1 = new Nhan1();
console.log("THIS hướng đối tượng", oopNhan1.calculateAge(2024));

// Tạo constructor bằng tay

const Personnel = function (name: string, yearOnBirth: number, job: string) {
    this.name = name;
    this.yearOnBirth = yearOnBirth;
    this.job = job;
    this.calculateAge = function () {
        return 2024 - this.yearOnBirth
    }
}

Personnel.prototype.lastName = "bắt buộc là 1231232121 "
const john1 = new Personnel("Nhân", 2004, "developer");
console.log("test::::::::::::::::::::::", john1.calculateAge());
console.log("test::::::::::::::::::::::", john1.lastName);


class Person {

}


console.log("-----------------------------------------------------------------");



console.log("-----------------------------------------------------------------");
// Đệ quy
function dequy(n: number) {
    if (n < 10) {
        return 1
    }
    console.log("chạy", n);
    dequy(n - 1)
    return true

}
console.log(
    dequy(20)

);

// DOM
console.log("-----------------------------------------------------------------");

const scores = [0, 0]; // số điêm 2 bên
const roundScores = 0; // số điểm của lượt chơi đó 
const activePlayer = 0; // người chơi bên nào
const dice: number = ((Math.floor(Math.random() * 6) + 1))
console.log(dice);


// document.querySelector("#score--0").textContent = dice.toString();

// (document.querySelector(".dice") as HTMLElement).style.display = "none";


// document.querySelector(".btn--roll").addEventListener("click")

console.log("-----------------------------------------------------------------");


console.log("-----------------------------------------------------------------");

// Tính toán tuổi trong mãng giải thuật siu cơ bản 

const yearAge = [1967, 2020, 2000, 2001];

function ArrayCalc(arr: Array<number>, fn: (num: number) => any): Array<number> {
    let arrRes: Array<number> = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}

function calculateAge1(el: number): number {
    return 2024 - el;
}

function checkAges(el: number): boolean {
    if (el >= 18) {
        return true
    } else {
        return false
    }
}

const age = ArrayCalc(yearAge, calculateAge1)
const reuslt = ArrayCalc(age, checkAges)
console.log("Kết quả nè::::::", age);
console.log("Kết quả kiểm tra độ tuổi::::::", reuslt);
console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");
// Return hàm closure(Cơ chế đóng cửa)
type job = "teacher" | "designer";

function interViewsQuestion(job: job) {
    if (job === "designer") {
        return function (name: string) {
            console.log(`${name} bạn chính là ${job}`);
        }
    } else if (job === "teacher") {
        return function (name: string) {
            console.log(`${name} bạn chính là ${job}`);
        }
    } else {
        console.log("Hello bạn đang làm nghề gì vậy");
    }
}


const teacherQuestion = interViewsQuestion("teacher");

const designerQuestion = interViewsQuestion("designer")

teacherQuestion("nhan")


console.log("-----------------------------------------------------------------");

// Hàm trả về ngay lập tức (IIFEs)
console.log("-----------------------------------------------------------------");

function game() {
    const score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function (gooLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - gooLuck);
})(51);

console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");
//Cú pháp  ES6
const firstName = "Huỳnh";
const lastName = "Nhân";
const n = `${firstName} ${lastName}`;

// console.log("Kết quả1", n.startsWith("H")); //true
// console.log("Kết quả2", n.endsWith("H")); //false
// console.log("Kết quả3", n.includes("N")); //false
// console.log("Kết quả4", n.repeat(5)); // Lặp lại 5 lần

console.log("-----------------------------------------------------------------");


console.log("-----------------------------------------------------------------");
// Cú pháp es5
const box = {
    color: "red",
    position: 1,
    clickMe: function () {
        console.log(123);
    }
}
console.log("-----------------------------------------------------------------");
// Cú pháp es5

const box1 = {
    color: "blue",
    position: 2,
    clickMe: () => {
        console.log(321);
    }
}
box.clickMe();
box1.clickMe();

const PersonalName = ["Nhân", "Sơn", "Lặc", "Hoàng", "Chiến"];

function Person1(name: string) {
    this.name = name
}


Person1.prototype.PersonalName2 = function (friends: Array<string>) {
    const arr = friends.map(el => {
        return this.name + "là bạn của tôi"
    })
    return arr
}

console.log(new Person1("nhan").PersonalName2(PersonalName));

console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");
// destructuring
// khai biến
const [userName1, age1] = ["Nhân", 12];
// khai key object
{
    const objs = {
        firstName: "Huỳnh",
        lastName: "Nhân"
    };

    const { firstName, lastName } = objs;

    console.log(firstName);


    console.log(lastName);


    function tinhtoanngay(year: number) {
        const age = new Date().getFullYear() - year;
        return [age, 20 - age]
    }

    console.log(tinhtoanngay(2024));
}

console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");
// Array es6
// From
// Array.from(arrayLike, mapFn)


function phanmang<T>(arr: Array<any>) {
    let resultArr: Array<any> = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            resultArr.push(...phanmang(arr[i]))
        } else {
            resultArr.push(arr[i])
        }
    }
    return resultArr;
}




const phanmangxong = phanmang(Array.from([1, 2, 3, 4, [1, 2, 3, 4, 5]]))
console.log(phanmangxong);

//find 
const methousFind = phanmangxong.findIndex(el => el > 4)
console.log("methousFind:::", methousFind);
//findIndex
const methousFindIndex = phanmangxong.find(el => el > 4)
console.log("methousFindIndex::::", methousFindIndex);

console.log("-----------------------------------------------------------------");


console.log("-----------------------------------------------------------------");

{
    const arr = [2024, 2004, 2023];

    function fnArr(arr: Array<number>) {
        console.log([...arr, 2000]);
    }

    fnArr(arr);
}


console.log("-----------------------------------------------------------------");



console.log("-----------------------------------------------------------------");
// default Paramater
{
    //es5
    function SmithPerson(firstName: string | undefined, lastName: string) {

        firstName === undefined ? this.firstName = "Nhan khong co hahaha" : this.firstName = firstName; //Cú pháp es5

        this.lastName = lastName;

    }

    const result = new SmithPerson(undefined, "nhan")

    console.log(result);


    //es6
    function SmithPerson1(firstName: string = "Nhan khong có hahaha", lastName: string) {
        this.lastName = lastName;

    }

    const result1 = new SmithPerson(undefined, "nhan")

    console.log(result1);
}

console.log("-----------------------------------------------------------------");

// Map
{
    const question = new Map()

    console.log(question);

    question.set("tai sao", "tại dị đó")

    question.set(1, "ES5")

    //get lấy ra 
    console.log(question.get(1));
    // has tìm
    console.log(question.has(1));
    // size kích thước
    console.log("size:::", question.size);
    // delete xóa theo vị trí
    console.log("Xóa thành công:::", question.delete(1));
    console.log("Xóa thành công chỉ còn:::", question);
    // 

    console.log("con:::::::::", question.entries());
}

console.log("-----------------------------------------------------------------");


console.log("-----------------------------------------------------------------");
//subclassed


{


    class Animal {
        constructor(private name1: string) {
            console.log(`${name1} là động vật`);
        }
    }

    class Dog extends Animal {
        constructor(name1: string, private tiengkeu: string) {
            super(name1)
            console.log(`Con ${name1} thì sủa ${tiengkeu}`);
        }
    }

    const result = new Dog("Chó ", "Gâu Gâu");

}


// console.log("-----------------------------------------------------------------");
// // Bất đồng bộ
// const second = () => {
//     setTimeout(() => {
//         console.log(2);
//     }, 1000)
// }

// const first = () => {
//     console.log(1);

//     second()

//     console.log(3);
// }

// first()

// console.log("-----------------------------------------------------------------");


// function getRecipe() {
//     setTimeout(() => {
//         const recipeId = [523, 883, 423, 974];
//         console.log(recipeId);

//         setTimeout((id: number) => {
//             console.log("id:::", id);
//             const recipe = { title: "ăn mì xào ", publisher: "Huỳnh Nhân" }

//             console.log(`${id}: ${recipe.title}`);
//         }, 1000, "sợ chưa")
//     }, 1500);
// }
// getRecipe()

// // Promise

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([123, 321, 234, 543])

//     }, 1500)

// })

// getIDs
//     .then((id: number) => {
//         console.log(id);
//         return id
//     })
//     .then((id) => {
//         console.log("Sai:::", id);
//     })

// /// async , await
// async function getRecipesAw() {
//     console.log("chòe");
//     const IDs = await getIDs;
//     console.log("IDs:::", IDs);
// }

// getRecipesAw()

console.log("-----------------------------------------------------------------");


console.log("-----------------------------------------------------------------");
// test

// class Search {
//     private query: string;
//     constructor(query: string) {
//         this.query = query;
//     }

//     async getResults() {
//         const proxy = "https://forkify-api.herokuapp.com/api/search";
//         try {
//             const response = await fetch(`${proxy}?q=${this.query}`);
//             const data = await response.json();
//             // console.log("data::::", data);
//             console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }


// const resultSearch = new Search("banana")

// resultSearch.getResults()



console.log("-----------------------------------------------------------------");
// bài code thiếu nhi 



{
    function a(x: number) {
        x++
        return function () {
            console.log(++x);
        }
    }

    a(1)();
    a(1)();
    a(1)();

    let x = a(1);
    x();
    x();
    x();



    function Name(a: string, b: string) {
        this.a = a;
        this.b = b;
    }

    const me = new Name("Vuong", "Nguyen");

    console.log("cc", a.length);



    const c = function () { }

    const d = (typeof c).length;
    console.log(d);
    console.log(Boolean(0));


    {
        (function js(x) {
            const y = (j) => j * x;


            console.log(y(s()));

            function s() {
                return j();
            }

            function j() {
                return x ** x
            }

        })(3)
    }
    var cu = 10
    function test(...x) {
        console.log(x);
    }

    test(2, 3, 4, 5, 6, 7, 8)

    console.log(typeof []);
    const js = { language: "loose", label: "difficult" };

    const edu = { ...js }
    console.log(Object.keys(js).length);

}
console.log("-----------------------------------------------------------------");


