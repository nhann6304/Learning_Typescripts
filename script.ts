

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

console.log("Kết quả1", n.startsWith("H")); //true
console.log("Kết quả2", n.endsWith("H")); //false
console.log("Kết quả3", n.includes("N")); //false
console.log("Kết quả4", n.repeat(5)); // Lặp lại 5 lần

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
console.log("-----------------------------------------------------------------");
