console.log("-----------------------------------------------------------------");
// Object
{
    const test1 = {
        fullName: "Huynhthanhnhan",
        age: 20
    }

    const test2 = {
        fullName: "Huynhthanhnhan",
        age: 20,
    }

    // Lấy key 
    console.log("Lấy keys dòng 16", Object.keys(test1));
    // Lấy value
    console.log("Lấy values dòng 18", Object.values(test1));
    // Gộp 2 object lại
    console.log("Lấy key dòng 20", Object.assign(test1, test2));
    // Tách key value ra thành array
    console.log("Lấy key dòng 22", Object.entries(test1));
    // Kiểm tra trả về boolean === vó dụ nhan === nhan true 
    console.log("Lấy key dòng 24", Object.is([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
    //


    function Dog(name) {
        this.name = name;
    }

    const dog1 = new Dog('Gabby');

    Dog.prototype.toString = function () {
        return `${this.name}`;
    };


    console.log(dog1.toString());
    // Expected output: "Gabby"
}
console.log("-----------------------------------------------------------------");

console.log("-----------------------------------------------------------------");
//Array

const arrNumber: Array<number> = [1, 2, 3, 2, 2, 4, 5, 6, 7]
const arrString: Array<string> = ["T", "N", "S", "W", "G", "🐣"];

// // ghép mãng concat(); 
// const arrConCat: Array<string | number> = arrNumber.concat(arrString as any);
// //

// const fromMethoud = Array.from(arrNumber, (x) => x + x)
// const fromOf = Array.of(arrNumber)
// console.log("checkOf:::", fromOf);

// console.log("checkFrom", fromMethoud);

// //
// const kiemtra = arrNumber.keys()

// const giatrikhoitao = 0
// // a là giá trị ban đầu 
// //b giá trị ở lặp ở vị trí đó trong mãng
// const resuceMethoud = arrNumber.reduce((a, b) => {
//     console.log("a", a);
//     console.log("b", b);
//     return a + b
// }, 10)
// console.log(resuceMethoud);

// console.log("someMethoud", resuceMethoud);


// const sapxep = arrNumber.sort((a, b) => b - a)

// console.log(sapxep);

// console.log("-----------------------------------------------------------------");


const newArr: number[] = [];
const seen = new Set<number>();

console.log(seen.has(0));

// for (const value of arrNumber) {
//     // Nếu giá trị đã xuất hiện trong 'seen', kiểm tra và thêm vào newArr
//     if (seen.has(value)) {
//         if (!newArr.includes(value)) {
//             newArr.push(value); // Thêm phần tử trùng vào newArr
//         }
//     } else {
//         seen.add(value); // Thêm giá trị vào 'seen' nếu chưa gặp
//     }
// }

// console.log(newArr); // Kết quả: [2, 3]


console.log("-----------------------------------------------------------------");
