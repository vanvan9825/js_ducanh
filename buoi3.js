// Object - Đối tượng là kiểu dữ liệu cơ bản 
// Dối tượng taaph hợp các thuộc tính, các phương thức
// Mỗi thuộc tính trong đối tượng sẽ là 1 cặp key-value 
// value có thể là bất cứ loại dữ liệu nào
// Và Object có thể chứa Object 

// Cách khởi tạo đối tượng
let nyc = {
    hoTen: "Nguyễn Thu Hương",
    namSinh: 1997,
    tinhCam: false,
    tinhTuoi: function(namSinh){
        namHienTai = new Date().getFullYear()
        tuoi = namHienTai - namSinh
        console.log(namSinh);
        console.log("Tuổi của NYC là: "+ tuoi);
    },
    monYeuThich: ["Kem", "Kẹo", "Bánh Mì", "Phở"],
    thongTinMat: {
        sdt: '0945083406',
        ngayQuen: '27/04/2012',
        xinChao: function () {
            console.log("Xin chào");
        }
    }
}



// // Truy vấn phần tử trong obj 
// console.log("Tên của cô ấy là: "+ nyc.hoTen);
// nyc.tinhTuoi(1999)
// nyc.tinhTuoi(1972)
// console.log(nyc.monYeuThich);
// console.log(nyc.monYeuThich[2]);
// console.log(nyc.thongTinMat.sdt);
// console.log(nyc.thongTinMat.ngayQuen);
// nyc.thongTinMat.xinChao();



// Class - Lớp: Khuôn mẫu để tạo ra nhiều đối tượng

// Tạo khuôn mẫu của Class 
function Crush(hoTen, namSinh, queQuan, sdt) { // tham số bên trong class
    this.name = hoTen; // this. tên thuộc tính = tham số
    this.age = namSinh;
    this.country = queQuan;
    this.phone = sdt;
    this.xinChao = function () { // this.tên phương thức = function(){}
        alert("yêu đậm sâu")
    }
    this.tinhTong = function(a, b) {
        sum = a + b 
        return sum;
    }
}

// Khởi tạo đối tượng từ class đã có 
let nyc1 = new Crush("Nguyễn Ngọc Linh", 1998, "Nam Định","0898124455")
let nyc2 = new Crush("Nguyễn Kim Ngân", 1999, "Nam Định", "0945187976")

console.log(nyc1.name);
console.log(nyc2.age);
console.log(nyc2.phone);
console.log(nyc1.tinhTong(5, 6));
