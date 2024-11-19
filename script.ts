

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
    }
}

console.log(nhan.calculateAge());

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
console.log(oopNhan1);




console.log("-----------------------------------------------------------------");
