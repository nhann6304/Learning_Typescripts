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
    }
};
console.log(nhan.calculateAge());
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
console.log(oopNhan1);
console.log("-----------------------------------------------------------------");
