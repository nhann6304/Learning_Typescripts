interface IPhu_nu {
    name: string,
    z?: boolean
}

class Phu_nu implements Phu_nu {
    // Access modifier 
    private name: string;
    private con_zin: boolean;
    // EnCapsulation = tính đóng gói Public Private Protected
    // Abstraction = Tính trừ tượng  sửa cacs Private theo method chứ k đc sửa thẳng biến
    // Inheritance = Tính Kế thừa 
    // Polymorphism = Đa hình
    va_zin() {
        this.con_zin = true;
    }
    show_hang() {
        return `${this.name} ${this.con_zin ? "Còn zin" : "Mất zin"}`
    }

    choi_nhac_cu(ten_nhac_cu: string) {
        return "Á Á Á"
    }
    // Hàm khởi tạo
    constructor({ name, z = true }: IPhu_nu) {
        this.name = name
        this.con_zin = z
    }
}

class Gai_ngoan extends Phu_nu {
    constructor({ name, z = true }: IPhu_nu) {
        super({ name, z })
    }
    choi_nhac_cu(ten_nhac_cu: string): string {
        return "Ơ Ơ Ơ"
    }
}

class Gai_hu extends Phu_nu {
    constructor({ name, z = false }: IPhu_nu) {
        super({ name, z })
    }
    // Overriding ghi đè 
    // Overloading cùng method nhưng khác tham số

}

class Dan_ong {

}

const kyky = new Gai_ngoan({ name: "Như Thiện" });

console.log(kyky.show_hang());
console.log(kyky.choi_nhac_cu("Ken"));


