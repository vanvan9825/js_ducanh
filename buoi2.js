// - Mảng - Rất quan trọng 
    // Mảng là 1 tập hợp nhiều phần tử 
    // Dãy số từ 1-1000 

    // Cách viết mảng: 
    // // Cách 1:
    // let arrNum1 = Array(1,2,3,4,5, "Nguyễn Đức Anh");
    // console.log("Cách viết mảng 1:", arrNum1);

    // // Cách 2: 
    //let arrNum2 = [1,2,3,4,5, "Nguyễn Đức Anh"];
    // console.log("Cách viết mảng 2:", arrNum2);

    // Thành phần trong mảng 
    // - index phần tử 
    // - Giá trị của phần tử

    // // Truy vấn phần tử trong mảng
    // console.log("Đây là phần tử có index là 5: ", arrNum2[5]);
    // console.log("Đây là phần tử có index là 4: ", arrNum2[4]);

// - Vòng lặp
    // // - For
    //     for (let index = 0; index < arrNum2.length; index++) {
    //         // Khởi tạo vòng for; điều kiện dừng; bước nhảy
    //         // console.log("Phần tử: ", arrNum2[index]);
            
    //     }

    //     // Ví dụ: Sử dụng vòng lặp for để tạo ra 1 mảng số nguyên từ 1-10
    //     arrNew = [];
    //     for (let i = 1; i <= 10; i++) {
    //         arrNew.push(i);
    //         // console.log("Phần tử mới: ", i);
    //     }
    //     // console.log(arrNew);

    //     for (let index = 0; index < 6; index++) {
    //         // console.log(arrNew[index]);
            
    //     }
    // // - For of  tương tự như foreach của php
    //     // - Duyệt toàn bộ các phần tử từ phần tử đầu tiên đến phần tử cuối cùng 
    //     for (const i of arrNew) {
    //         // console.log("Phần tử vòng for of", i);
    //     }

    //     // Tạo một mảng số từ 5-50 bằng vòng for
    //     arrViDu = [];
    //     for (let index = 5; index <= 50; index++) {
    //         arrViDu.push(index);
            
    //     }
    //     console.log(arrViDu);
    //     // Dùng vòng for để tính tổng các số lẻ trong mảng
    //     tongLe = 0;
    //     for (let index = 0; index < arrViDu.length; index++) {
    //         if(arrViDu[index] % 2 !== 0 ){
    //             tongLe += arrViDu[index];
    //         }
    //     }
    //     console.log("Tổng lẻ của mảng là: ", tongLe);

    //     // Dùng vòng for để tính tổng các số chẵn trong mảng
    //     tongChan = 0;
    //     for (let index = 0; index < arrViDu.length; index++) {
    //         if(arrViDu[index] % 2 == 0 ){
    //             tongChan += arrViDu[index];
    //         }
    //     }
    //     console.log("Tổng lẻ của mảng là: ", tongChan);




// // - Hàm
// // Hàm chứa trong nó 1 đoạn mã, khi gọi hàm thì đoạn mã sẽ được thực thi 
// console.log("Hôm nay trời nắng to");
// console.log("Hôm nay trời nắng to");

// let sum = 5 + 10
// console.log(sum);

// function weather() { //Khai báo hàm
//     // Đoạn mã bên trong hàm sẽ được thực thi khi gọi hàm
//     console.log("Hôm nay trời nắng 35 độ");
// }
// // console.log("Hôm nay trời nắng 31 độ");
// // console.log("Hôm nay trời nắng 31 độ");
// // console.log("Hôm nay trời nắng 31 độ");
// // console.log("Hôm nay trời nắng 31 độ");
// // console.log("Hôm nay trời nắng 31 độ");
// // Sử dụng hàm:
// weather(); // Gọi hàm
// weather(); // Gọi hàm
// weather(); // Gọi hàm
// weather(); // Gọi hàm
// weather(); // Gọi hàm

// // Các loại hàm trong js
// HÀM KHÔNG TRẢ VỀ
// - Hàm không trả về sử dụng để thực hiện các tác vụ cụ thể mà không cần trả về kết quả 
// - Hàm không trả về chỉ trả về kết quả thực hiện, không trả về giá trị 
// - Giá trị của nó sẽ là undefined

//     HÀM KHÔNG TRẢ VỀ - KHÔNG THAM SỐ
// function getFullYear() {
//     date = new Date().getFullYear();
//     console.log("Năm nay là: "+ date);
// }
// getFullYear()
// console.log("Giá trị của hàm không trả về: ", getFullYear());

// //     HÀM KHÔNG TRẢ VỀ - CÓ THAM SỐ
// function myName1(name) {
//      // Khi khai báo tham số ở hàm thì trong hàm có thể sử dụng đoạn mã đó
//     console.log("Xin chào: ", name);
// }
// myName1("Nguyễn Đức Anh")
// myName1("Nguyễn Ngọc Bích")

// function tinhTong(a, b){
//     sum = a + b
//     console.log("Tổng của 2 số là:", sum);
// }
// tinhTong(5, 10);
// tinhTong(100, 10000)

// // HÀM CÓ TRẢ VỀ
// // Trả về giá trị khi thực hiện 
// // Sử dụng câu lệnh return để trả về giá trị
// // Thường được sử dụng để tính toán và trả về giá trị mới 

// //     HÀM CÓ TRẢ VỀ - KHÔNG THAM SỐ
// function tinhHieu() {
//     a = 5
//     b = 12
//     soft = a - b
//     return soft;
// }
// console.log("Giá trị của hàm có trả về: ", tinhHieu());
// function tinhTich() {
//     a = 200
//     b = 10
//     tich = a * b
//     return tich;
// }
// console.log("Tổng của 2 hàm: ",tinhHieu()+tinhTich());

// //     HÀM CÓ TRẢ VỀ - CÓ THAM SỐ
// function tinhTuoi(namSinh) {
//     namHienTai = new Date().getFullYear()
//     tuoi = Number(namHienTai) - Number(namSinh)
//     return tuoi;
// }
// console.log("Tuổi của tôi là: ", tinhTuoi(1997));

// - viết hàm xử lý mảng
// Bài 1: 
// Cho mảng số nguyên bất kỳ
// Viết hàm tính tổng các số có trong mảng

// Bài 2: Cho mảng số nguyên bất kỳ 
// Viết hàm tính tổng các số lẻ có trong mảng 

// Bài 3: Cho mảng gồm 5 tên bất kỳ
// nhập vào màn hình 1 tên
// Viết hàm kiểm tra xem tên đó có trong mảng không, 
// nếu có thì trả về kết quả là: 'Người này đã có trong danh sách'
// nếu không thì trả về kết quả là: 'Người này chưa có' và thêm tên vào cuối mảng


let arrName = ["Nam", "Minh", "Mạnh", "Mai", "Liên"]
console.log(arrName);
let newName = prompt("nhập vào màn hình tên bạn muốn")

function checkName(mangTen, tenMoi) {
//    console.log(mangTen.indexOf(tenMoi));
if (mangTen.indexOf(tenMoi) == -1) {
    console.log("Người này chưa có tên trong danh sách");
    mangTen.push(tenMoi);
    console.log(mangTen);
}else{
    console.log("người này đã có trong danh sách");
}
}

checkName(arrName, newName)



// bài 1 
// nhập 1 số vào màn hình 


let number = promt("Nhập số phần tử của mảng: ")
let arrNumber = []
for (let i = 0; i < number; i++) {
   arrNumber.phush(1);
console.log("phần tử vừa được thêm vào mảng: " + i);    
}

console.log(arrNumber);
let ketqua = 0;
function tinhtong(arrNumber){
    for(let index = 0; index < arrNumber.length; index++ ){
        ketqua += arrNumber[index]
    }
    console.log("Tổng các phần tử có trong mảng là: ", ketqua);
}
tinhtong(arrNumber);



