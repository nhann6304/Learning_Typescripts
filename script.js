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
console.log(tips);
console.log("-----------------------------------------------------------------");
