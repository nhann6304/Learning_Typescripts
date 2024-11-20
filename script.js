"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// Hàm trả về ngay lập tức (IIFEs)
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
console.log("-----------------------------------------------------------------");
//Cú pháp  ES6
var firstName = "Huỳnh";
var lastName = "Nhân";
var n = "".concat(firstName, " ").concat(lastName);
// console.log("Kết quả1", n.startsWith("H")); //true
// console.log("Kết quả2", n.endsWith("H")); //false
// console.log("Kết quả3", n.includes("N")); //false
// console.log("Kết quả4", n.repeat(5)); // Lặp lại 5 lần
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
// Cú pháp es5
var box = {
    color: "red",
    position: 1,
    clickMe: function () {
        console.log(123);
    }
};
console.log("-----------------------------------------------------------------");
// Cú pháp es5
var box1 = {
    color: "blue",
    position: 2,
    clickMe: function () {
        console.log(321);
    }
};
box.clickMe();
box1.clickMe();
var PersonalName = ["Nhân", "Sơn", "Lặc", "Hoàng", "Chiến"];
function Person1(name) {
    this.name = name;
}
Person1.prototype.PersonalName2 = function (friends) {
    var _this = this;
    var arr = friends.map(function (el) {
        return _this.name + "là bạn của tôi";
    });
    return arr;
};
console.log(new Person1("nhan").PersonalName2(PersonalName));
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
// destructuring
// khai biến
var _a = ["Nhân", 12], userName1 = _a[0], age1 = _a[1];
// khai key object
{
    var objs = {
        firstName: "Huỳnh",
        lastName: "Nhân"
    };
    var firstName_1 = objs.firstName, lastName_1 = objs.lastName;
    console.log(firstName_1);
    console.log(lastName_1);
    function tinhtoanngay(year) {
        var age = new Date().getFullYear() - year;
        return [age, 20 - age];
    }
    console.log(tinhtoanngay(2024));
}
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
// Array es6
// From
// Array.from(arrayLike, mapFn)
function phanmang(arr) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            resultArr.push.apply(resultArr, phanmang(arr[i]));
        }
        else {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
var phanmangxong = phanmang(Array.from([1, 2, 3, 4, [1, 2, 3, 4, 5]]));
console.log(phanmangxong);
//find 
var methousFind = phanmangxong.findIndex(function (el) { return el > 4; });
console.log("methousFind:::", methousFind);
//findIndex
var methousFindIndex = phanmangxong.find(function (el) { return el > 4; });
console.log("methousFindIndex::::", methousFindIndex);
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
{
    var arr = [2024, 2004, 2023];
    function fnArr(arr) {
        console.log(__spreadArray(__spreadArray([], arr, true), [2000], false));
    }
    fnArr(arr);
}
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
// default Paramater
{
    //es5
    function SmithPerson(firstName, lastName) {
        firstName === undefined ? this.firstName = "Nhan khong co hahaha" : this.firstName = firstName; //Cú pháp es5
        this.lastName = lastName;
    }
    var result = new SmithPerson(undefined, "nhan");
    console.log(result);
    //es6
    function SmithPerson1(firstName, lastName) {
        if (firstName === void 0) { firstName = "Nhan khong có hahaha"; }
        this.lastName = lastName;
    }
    var result1 = new SmithPerson(undefined, "nhan");
    console.log(result1);
}
console.log("-----------------------------------------------------------------");
// // Map
// {
//     const question = new Map()
//     console.log(question);
//     question.set("tai sao", "tại dị đó")
//     question.set(1, "ES5")
//     //get lấy ra 
//     console.log(question.get(1));
//     // has tìm
//     console.log(question.has(1));
//     // size kích thước
//     console.log("size:::", question.size);
//     // delete xóa theo vị trí
//     console.log("Xóa thành công:::", question.delete(1));
//     console.log("Xóa thành công chỉ còn:::", question);
//     // 
//     console.log("con:::::::::", question.entries());
// }
console.log("-----------------------------------------------------------------");
console.log("-----------------------------------------------------------------");
//subclassed
{
    var Animal = /** @class */ (function () {
        function Animal(name1) {
            this.name1 = name1;
            console.log("".concat(name1, " l\u00E0 \u0111\u1ED9ng v\u1EADt"));
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name1, tiengkeu) {
            var _this = _super.call(this, name1) || this;
            _this.tiengkeu = tiengkeu;
            console.log("Con ".concat(name1, " th\u00EC s\u1EE7a ").concat(tiengkeu));
            return _this;
        }
        return Dog;
    }(Animal));
    var result = new Dog("Chó ", "Gâu Gâu");
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
var Search = /** @class */ (function () {
    function Search(query) {
        this.query = query;
    }
    Search.prototype.getResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var proxy, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        proxy = "https://forkify-api.herokuapp.com/api/search";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(proxy, "?q=").concat(this.query))];
                    case 2:
                        response = _a.sent();
                        console.log(response);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Search;
}());
var resultSearch = new Search("banana");
resultSearch.getResults();
console.log("-----------------------------------------------------------------");
