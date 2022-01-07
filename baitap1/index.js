function soNguyenTangDan() {
  var soNguyen1 = document.getElementById("songuyen1").value * 1;
  var soNguyen2 = document.getElementById("songuyen2").value * 1;
  var soNguyen3 = document.getElementById("songuyen3").value * 1;
  var xuatThongBao = document.getElementById("xuatThongBao");
  if (soNguyen1 > soNguyen2 && soNguyen1 > soNguyen3 && soNguyen2 > soNguyen3) {
    xuatThongBao.innerText =
      "Vị trí lần lượt là: " + soNguyen3 + " " + soNguyen2 + " " + soNguyen1;
  } else if (
    soNguyen1 > soNguyen2 &&
    soNguyen1 > soNguyen3 &&
    soNguyen3 > soNguyen2
  ) {
    xuatThongBao.innerText =
      "Vị trí lần lượt là: " + soNguyen2 + " " + soNguyen3 + " " + soNguyen1;
  } else if (
    soNguyen2 > soNguyen1 &&
    soNguyen2 > soNguyen3 &&
    soNguyen1 > soNguyen3
  ) {
    xuatThongBao.innerText =
      "Vị trí lần lượt là: " + soNguyen3 + " " + soNguyen1 + " " + soNguyen2;
  } else if (
    soNguyen2 > soNguyen1 &&
    soNguyen2 > soNguyen3 &&
    soNguyen3 > soNguyen1
  ) {
    xuatThongBao.innerText =
      "Vị trí lần lượt là: " + soNguyen1 + " " + soNguyen3 + " " + soNguyen2;
  } else if (
    soNguyen3 > soNguyen1 &&
    soNguyen3 > soNguyen2 &&
    soNguyen2 > soNguyen1
  ) {
    xuatThongBao.innerText =
      "Vị trí lần lượt là: " + soNguyen1 + " " + soNguyen2 + " " + soNguyen3;
  } else {
    xuatThongBao.innerText =
      "Vị trí lần lượt là: " + soNguyen2 + " " + soNguyen1 + " " + soNguyen3;
  }
}
