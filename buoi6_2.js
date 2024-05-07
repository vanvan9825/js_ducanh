

// Cho mảng sinh viên
// Hiển thị dữ liệu
// Viết form thêm 

arrStudent = [
    {
        hoTen: "Nguyễn Đức Anh",
        queQuan: "Hà Nội",
        tuoi: 18
    },
    {
        hoTen: "Nguyễn Đức Anh 1",
        queQuan: "Hà Nội 1",
        tuoi: 20
    },
    {
        hoTen: "Nguyễn Đức Anh 2",
        queQuan: "Hà Nội 2",
        tuoi: 19
    }
];

function render_tbody(){
    render_html = '';
    let tbody = document.getElementsByTagName('tbody')[1]

    for (let i = 0; i < arrStudent.length; i++) {
        render_html += 
        '<tr>' +
            '<td>' + arrStudent[i].hoTen + '</td>' +
            '<td>' + arrStudent[i].queQuan + '</td>' +
            '<td>' + arrStudent[i].tuoi + '</td>' +
        '</tr>'
        
    }
    tbody.innerHTML = render_html
}
render_tbody() 

function themSV() {
    let hoTen = document.getElementById('hoTen')
    let queQuan = document.getElementById('queQuan')
    let namSinh = document.getElementById('namSinh')
    let thongbao = document.getElementsByClassName('thongbao')
    let hienTai = new Date().getFullYear()
    let tuoi = hienTai - namSinh.value
    // console.log("ABC", hoTen);
    // console.log(queQuan.value);
    // console.log(namSinh.value);

    // Khởi tạo biến kiểm tra 
    let check = true;


    // kiểm tra bằng điều kiện - check rỗng
    if (hoTen.value == '') {  // Khi input hoTen rỗng
        check = false; // gán lại giá trị cho biến check
        thongbao[0].innerHTML = 'Vui lòng nhập họ tên'
    }

    if (queQuan.value == '') { // Khi input queQuan rỗng
        check = false;
        thongbao[1].innerHTML = 'Vui lòng nhập quê quán'
    }

    if (namSinh.value == '') { // Khi input namSinh rỗng
        check = false;
        thongbao[2].innerHTML = 'Vui lòng nhập năm sinh'
    }

    if (tuoi < 18) {
        check = false;
        thongbao[2].innerHTML = 'Tuổi sinh viên không được dưới 18'
    }

    // validate = regex 
    const regex_email = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
    if (!regex_email.test(hoTen.value)) {
        check = false; // gán lại giá trị cho biến check
        thongbao[0].innerHTML = 'Vui lòng nhập đúng định dạng'
    }

    // Hiển thị ra màn hình dữ liệu vừa nhập
    if (check) { // KHI CHECK = TRUE == THỎA MÃN ĐIỀU KIỆN
        let render_hoTen = document.getElementById('render_hoTen')
        render_hoTen.innerText = hoTen.value

        let render_queQuan = document.getElementById('render_queQuan')
        render_queQuan.innerText = queQuan.value

        let render_namSinh = document.getElementById('render_namSinh')

        hienTai = new Date().getFullYear()
        tuoi = hienTai - namSinh.value
        render_namSinh.innerText = tuoi

        newStudent = {
            hoTen: hoTen.value,
            queQuan: queQuan.value,
            tuoi: tuoi
        }

        arrStudent.push(newStudent)
        console.log(arrStudent);
        render_tbody() 
    }else{
        alert("Dữ liệu nhập vào có vấn đề")
    }
    
    
}