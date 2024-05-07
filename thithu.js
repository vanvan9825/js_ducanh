// // Bài 1: Tạo 1 banner slide gồm 5 ảnh, tạo 4 nút: PRE, NEXT, AUTO, STOP
// // Viết chức năng tương ứng cho 4 nút vừa tạo
// // -	PRE: quay lại ảnh trước
// // -	NEXT: chuyển tới ảnh kế tiếp
// // -	AUTO: tự động chuyển 
// // -	STOP: Ngắt tự động

// // Khởi tạo 1 biến để xác định vị trí của slide đang hiển thị
// let indexSlide = 0;

// // Dùng DOM để truy xuất vào các ảnh thông qua class "mySlide"
// let slideImage = document.getElementsByClassName('mySlide')
// // console.log(slideImage);

// // Viết function thực hiện công việc hiển thị slide 
// function slide(){

//     // Nếu index của slide vượt quá số lượng slide thì chuyển về slide đầu tiền
//     if (indexSlide >= slideImage.length) {
//         indexSlide = 0
//     }

//     // Nếu index của slide nhỏ hơn 0 thì chuyển về slide cuối cùng
//     if (indexSlide < 0) {
//         indexSlide = slideImage.length - 1
//     }
//     // Ẩn toàn bộ các slide đi
//     for (let i = 0; i < slideImage.length; i++) {
//         slideImage[i].style.display = 'none'
        
//     }

//     // Hiển thị ra slide có index đã quy định ở trên dòng 9
//     slideImage[indexSlide].style.display = 'block'
// }

// slide();

// // Viết function chuyển slide
// function  nextSlide(n) {
//     indexSlide += n
//     slide()
//     console.log(indexSlide);
// }

// // Phần auto - stop

// // Khai báo 1 biến để xác định việc chuyển auto 
// let autoImage;

// // Viết function tự động chuyển slide
// function autoSlide() {
//     // Gọi hàm slide với index tăng dần
//     indexSlide++
//     slide()

//     // Gọi hàm autoSlide sau 1 khoảng thời gian - mili giây
//     autoImage = setTimeout(autoSlide, 1000)
// }
// // autoSlide() // Nếu muốn tự động chuyển slide khi tải trang

// // Viết funtion dừng tự động chuyển slide 
// function stopSlide() {
//     clearInterval(autoImage)
// }





// // Bài 2: Tạo form đăng nhập gồm tài khoản, mật khẩu
// // -	Mật khẩu phải khớp “123@123ab”
// // -	Tài khoản phải dài hơn 6 ký tự và không quá 20 ký tự
// // -	Khi ấn vào nút đăng nhập, nếu lỗi thì sẽ hiển thị sang bên cạnh
// // -	Nếu không xảy ra lỗi thì hiển thị thông báo “Đăng nhập thành công”


// // Viết function xử lý đăng nhập 

// function dangNhap() {

//     // Lấy dữ liệu từ form khi ấn submit
//     let taiKhoan = document.getElementById('taiKhoan').value
//     let matKhau = document.getElementById('matKhau').value

//     // dùng DOM để bắn lỗi sang html
//     let thongbao = document.getElementsByClassName('thongbao')

//     // console.log(taiKhoan);
//     // console.log(matKhau);

//     // Xử lý validate
//     // Khởi tạo biến kiểm tra
//     let check = true;

//     // validate mật khẩu khớp
//     if (matKhau == '') {
//         check = false
//         thongbao[1].innerHTML = 'Vui lòng nhập mật khẩu'
//     }else if (matKhau !== '123@123ab') {
//         check = false
//         thongbao[1].innerHTML = 'Bạn nhập sai mật khẩu'
//     }else{
//         thongbao[1].innerHTML = ''
//     }
    
//     // Validate tài khoản 
//     if (taiKhoan == '') {
//         check = false
//         thongbao[0].innerHTML = 'Vui lòng nhập tài khoản'
//     }else if (taiKhoan.length > 6 || taiKhoan.length < 20) {
//         thongbao[0].innerHTML = ''
//     }else{
//         check = false
//         thongbao[0].innerHTML = 'Độ dài tài khoản phải từ 6-20 ký tự'
//     }

//     if (check) {
//         alert("Đăng nhập thành công")
//     }
// }




// Bài 3: Tạo form đăng ký thành viên gồm các thông tin
// -	Họ tên: không được để trống, lớn hơn 7 ký tự
// -	Năm sinh: không được để trống, tuổi phải trên 18 tuổi
// -	Combobox – Loại đăng ký: (thành viên thường, thành viên vip)
// -	Giá tiền: nếu chọn thành viên thường thì giá tự động điền là 3000, vip thì là 5000
// -	Số tháng đăng ký: không được để trống, phải là số
// 	Khi ấn đăng ký, nếu lỗi thì hiển thị lỗi ra theo từng trường dữ liệu
// 	Nếu không lỗi thì tính tổng tiền = giá tiền * số tháng / in ra màn hình

// Viết function bắt sự kiện khi người dùng thay đổi lựa chọn loại
function chonLoai(){
    let loaiDangKy = document.getElementById('loaiDangKy')
    let giaTien = document.getElementById('giaTien')

    if (loaiDangKy.value == 1) {
        giaTien.value = '3000'
    }else if(loaiDangKy.value == 2){
        giaTien.value = '5000'
    }else{
        giaTien.value = ''
    }
}

// // Không dùng onchange 
// document.getElementById('loaiDangKy').addEventListener('change', function(){
//     let giaTien = document.getElementById('giaTien')
//     if (this.value == 1) {
//         giaTien.value = '3000'
//     }else if(this.value == 2){
//         giaTien.value = '5000'
//     }else{
//         giaTien.value = ''
//     }
// })

function dangKy() {
    

// khởi tạo biến kiểm tra 
    let check = true;

    let hoTen = document.getElementById('hoTen').value
    let namSinh = document.getElementById('namSinh').value
    let loaiDangKy = document.getElementById('loaiDangKy').value
    let soThangDangKy = document.getElementById('soThangDangKy').value
    let giaTien = document.getElementById('giaTien').value
    let tongTien = document.getElementById('tongTien')

    let thongbao = document.getElementsByClassName('thongbao')

    // tuoi = 2024 - namSinh
    namHienTai = new Date().getFullYear()
    tuoi = Number(namHienTai) -Number(namSinh)

    // Validate
    if (hoTen == '') {
        check = false
        thongbao[0].innerHTML = 'Vui lòng nhập họ tên'
    }else if(hoTen.length < 7){
        check = false
        thongbao[0].innerHTML = 'Họ tên phải nhiều hơn 7 ký tự'
    }else{
        thongbao[0].innerHTML = ''
    }


    if (namSinh == '') {
        check = false
        thongbao[1].innerHTML = 'Vui lòng nhập năm sinh'
    }else if(tuoi < 18){
        check = false
        thongbao[1].innerHTML = 'Tuổi phải lớn hơn 18'
    }else if(tuoi > 100){
        check = false
        thongbao[1].innerHTML = 'Tuổi phải nhỏ hơn 100'
    }else{
        thongbao[1].innerHTML = ''
    }


    if (loaiDangKy == '') {
        check = false
        thongbao[2].innerHTML = 'Vui lòng chọn loại đăng ký'
    }else{
        thongbao[2].innerHTML = ''
    }


    if (soThangDangKy == '') {
        check = false
        thongbao[3].innerHTML = 'Vui lòng nhập số tháng đăng ký'
    }else if(isNaN(soThangDangKy)){
        check = false
        thongbao[3].innerHTML = 'Tháng đăng ký phải là số'
    }else{
        thongbao[3].innerHTML = ''
    }

    // Tính tổng

    if (check) {
        tong = Number(giaTien) * Number(soThangDangKy)
        tongTien.value = tong
        console.log(tongTien);
    }

}