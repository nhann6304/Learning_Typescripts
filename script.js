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
