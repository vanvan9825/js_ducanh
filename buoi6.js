function login(){
    let username = document.getElementById('username')
    console.log(username.value); // dùng .value để lấy dữ liệu

    let password = document.getElementById('password')
    console.log(password.value); // dùng .value để lấy dữ liệu

    old_username = "abc123"
    old_password = "123456" 

    if (username.value == old_username && password.value == old_password) {
        alert("bạn đã đăng nhập")
    }else{
        alert("bạn nhập sai")
    }
}

arrSV = [
    {
        hoTen: "nguyễn Đức Anh",
        tuoi: 18
    },
    {
        hoTen: "nguyễn Đức Minh",
        tuoi: 19
    },
    {
        hoTen: "nguyễn Đức Mạnh",
        tuoi: 20
    },
    {
        hoTen: "nguyễn Ngọc Linh",
        tuoi: 21
    }
]

// In mảng ra bảng html 
let tbody = document.getElementsByTagName('tbody')[1]
console.log(tbody);

trHTML = '' // Khai báo biến chứa đoạn html sẽ truyền vào tbody

    // Sử dụng vòng for để truyền từng phần tử vào html
    for (let i = 0; i < arrSV.length; i++) { 
        trHTML += 
        '<tr>'+
            '<td>'+ arrSV[i].hoTen + '</td>'+
            '<td>'+ arrSV[i].tuoi + '</td>' +
        '</tr>'
    }
    
tbody.innerHTML = trHTML // Sử dụng inner html để truyền vào tbody

// Tạo form thêm SV vào trong mảng
function themSV(){

    let hoTen = document.getElementById('hoTen')
    let tuoi = document.getElementById('tuoi')

    
    let newSV = {
        hoTen: hoTen.value,
        tuoi: tuoi.value
    }
    
    arrSV.push(newSV);
    console.log(arrSV);
    
    trHTML1 = '' // Khai báo biến chứa đoạn html sẽ truyền vào tbody

    // Sử dụng vòng for để truyền từng phần tử vào html
    for (let i = 0; i < arrSV.length; i++) { 
        trHTML1 += 
        '<tr>'+
            '<td>'+ arrSV[i].hoTen + '</td>'+
            '<td>'+ arrSV[i].tuoi + '</td>' +
        '</tr>'
    }
    
    tbody.innerHTML = trHTML1 // Sử dụng inner html để truyền vào tbody
}


