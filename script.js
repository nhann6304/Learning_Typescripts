var userName = ["Nhân", "LALALA"];
userName.push("haha"); // Thêm vào cuối mãng
userName.unshift("Nhân"); // Thêm vào đầu mãng 
console.log("-----------------------------------------------------------------");
console.log(userName);
var phantucuoicung = userName.pop(); // Cắt value ở vị trí cuối cùng trong mãng thành string
console.log("Phần tử cuối cùng::", phantucuoicung);
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
var phantuovitrithu = userName.indexOf("LALALA");
// Trả ra number vị trí của value đó
// Không có trả ra -1 
console.log("phantuovitrithu", phantuovitrithu);
console.log("-----------------------------------------------------------------");
// challenge 3 clip 22
console.log("-----------------------------------------------------------------");
function Calculator(bills) {
    var percent;
    if (bills < 50) {
        percent = 0.2;
    }
    else if (bills > 50 && bills < 200) {
        percent = 0.15;
    }
    else {
        percent = 0.1;
    }
    return percent * bills;
}
var bill = [124, 48, 268];
var tips = [
    Calculator(bill[0]),
    Calculator(bill[1]),
    Calculator(bill[2]),
];
// console.log(tips);
console.log("-----------------------------------------------------------------");
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 2024,
    family: ['Quin', "Tri", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    tinhtoan: function (birthDay) {
        // return 2024 - this.birthYear;
        return 2024 - birthDay;
    }
};
console.log(john.tinhtoan(2004));
// console.log("Lấy value từ key", john.birthYear); // Lấy value từ key
// console.log("Tính toán hàm", john.tinhtoan(2004));
console.log("-----------------------------------------------------------------");
// challenge 3 clip 26 => 27 
console.log("-----------------------------------------------------------------");
var abc = {
    fullName: "Huynh Thanh Nhan",
    mass: 92,
    height: 1.95,
    calculator: function (_a) {
        var mass = _a.mass, height = _a.height;
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};
console.log("tinh toan", abc.calculator({ height: 123, mass: 123 }));
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
//for
for (var i = 0; i <= bill.length - 1; i++) {
    console.log(bill[i]);
}
//while
var sountWhile = 0;
while (sountWhile < bill.length) {
    console.log("Kết quả vòng while::::", bill[sountWhile]);
    sountWhile++;
}
console.log("-----------------------------------------------------------------");
var obj = {
    bills: [123, 123, 123, 123, 123],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var bill_1 = this.bills[i];
            console.log(i);
            this.tips[i] = bill_1;
        }
        return tips;
    }
};
console.log("Dòng 131", obj.calcTips());
console.log("-----------------------------------------------------------------");
console.log("test1", test("test1"));
function test(value1) {
    return true;
}
var test2 = function (value2) {
    return false;
};
console.log("test2", test("test2"));
// scoping => Độ đóng hộp
console.log("-----------------------------------------------------------------");
var scopingGlobal = "scopingGlobal";
function funcScopingGlobal() {
    var b = "Hi";
    function funcScopingGlobalChild() {
        var c = "Hi111";
        return c;
    }
    return "".concat(funcScopingGlobalChild(), " ").concat(b);
}
function third() {
    var d = "Nhan";
    console.log("ra gì", scopingGlobal + d);
}
third();
console.log(funcScopingGlobal());
console.log("-----------------------------------------------------------------");
// Con trỏ THIS
console.log("-----------------------------------------------------------------");
// Do khong có đối tượng class nên k có giợi ý 
var nhan = {
    name: "Nhân",
    age: 20,
    yearOnBirth: 2004,
    calculateAge: function () {
        console.log(this);
        console.log(this.name);
        function innerFunction() {
            console.log("bên trong");
        }
        innerFunction();
    }
};
console.log("THIS không hướng đối tượng", nhan.calculateAge());
// Viết theo hướng đối tượng
var Nhan1 = /** @class */ (function () {
    function Nhan1() {
        this.name = "Nhân";
        this.age = 20;
        this.yearOnBirth = 2004;
    }
    Nhan1.prototype.calculateAge = function (year) {
        return year = this.yearOnBirth;
    };
    return Nhan1;
}());
var oopNhan1 = new Nhan1();
console.log("THIS hướng đối tượng", oopNhan1.calculateAge(2024));
// Tạo constructor bằng tay
var Personnel = function (name, yearOnBirth, job) {
    this.name = name;
    this.yearOnBirth = yearOnBirth;
    this.job = job;
    this.calculateAge = function () {
        return 2024 - this.yearOnBirth;
    };
};
Personnel.prototype.lastName = "bắt buộc là 1231232121 ";
var john1 = new Personnel("Nhân", 2004, "developer");
console.log("test::::::::::::::::::::::", john1.calculateAge());
console.log("test::::::::::::::::::::::", john1.lastName);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
// Đệ quy
function dequy(n) {
    if (n < 10) {
        return 1;
    }
    console.log("chạy", n);
    dequy(n - 1);
    return true;
}
console.log(dequy(20));
// DOM
console.log("-----------------------------------------------------------------");
var scores = [0, 0]; // số điêm 2 bên
var roundScores = 0; // số điểm của lượt chơi đó 
var activePlayer = 0; // người chơi bên nào
var dice = ((Math.floor(Math.random() * 6) + 1));
console.log(dice);
// document.querySelector("#score--0").textContent = dice.toString();
// (document.querySelector(".dice") as HTMLElement).style.display = "none";
// document.querySelector(".btn--roll").addEventListener("click")
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
// Tính toán tuổi trong mãng giải thuật siu cơ bản 
var yearAge = [1967, 2020, 2000, 2001];
function ArrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge1(el) {
    return 2024 - el;
}
function checkAges(el) {
    if (el >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var age = ArrayCalc(yearAge, calculateAge1);
var reuslt = ArrayCalc(age, checkAges);
console.log("Kết quả nè::::::", age);
console.log("Kết quả kiểm tra độ tuổi::::::", reuslt);
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
function interViewsQuestion(job) {
    if (job === "designer") {
        return function (name) {
            console.log("".concat(name, " b\u1EA1n ch\u00EDnh l\u00E0 ").concat(job));
        };
    }
    else if (job === "teacher") {
        return function (name) {
            console.log("".concat(name, " b\u1EA1n ch\u00EDnh l\u00E0 ").concat(job));
        };
    }
    else {
        console.log("Hello bạn đang làm nghề gì vậy");
    }
}
var teacherQuestion = interViewsQuestion("teacher");
var designerQuestion = interViewsQuestion("designer");
teacherQuestion("nhan");
console.log("-----------------------------------------------------------------");
// Hàm trả về ngay lập tức
console.log("-----------------------------------------------------------------");
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
(function (gooLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - gooLuck);
})(51);
console.log("-----------------------------------------------------------------");
