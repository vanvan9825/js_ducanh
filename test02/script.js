const khoahoc = document.getElementById("khoahoc");
const hocphi = document.getElementById("tien");

hocphi.value = 500;

khoahoc.addEventListener("change", () => {
  if (khoahoc.value == 1) {
    hocphi.value = 500;
  } else if (khoahoc.value == 2) {
    hocphi.value = 1000;
  } else if (khoahoc.value == 3) {
    hocphi.value = 800;
  }
});

function kiemtra() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const truong = document.getElementById("truong");
  const online = document.getElementById("online");

  const errName = document.getElementById("err-name");
  const errEmail = document.getElementById("err-email");
  const errPhone = document.getElementById("err-phone");
  const errHinhThuc = document.getElementById("err-hinhthuc");

  errName.innerText = "";
  errEmail.innerText = "";
  errPhone.innerText = "";
  errHinhThuc.innerText = "";

  if (!name || !email || !phone) {
    if (!name) {
      errName.innerText = "Không bỏ trống";
    }
    if (!email) {
      errEmail.innerText = "Không bỏ trống";
    }
    if (!phone) {
      errPhone.innerText = "Không bỏ trống";
    }
  }

  if (!truong.checked && !online.checked) {
    errHinhThuc.innerText = "Không bỏ trống";
  }

  if (email.length > 0) {
    let regexEmail = new RegExp("^\\w+@(\\w+){2}\\.(\\w+){2}");
    if (!regexEmail.test(email)) {
      errEmail.innerText = "Nhập đúng định dạng email";
    }
  }

  if (phone.length > 0) {
    let regexPhone = new RegExp("^0\\d{9}$");
    if (!regexPhone.test(phone)) {
      errPhone.innerText = "Nhập đúng định dạng phone";
    }
  }

  return false;
}
