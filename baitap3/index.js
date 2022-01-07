function soChanLe() {
  var songuyen1 = document.getElementById("songuyen1").value * 1;
  var songuyen1Value = document.getElementById("songuyen1").value;
  var songuyen2 = document.getElementById("songuyen2").value * 1;
  var songuyen2Value = document.getElementById("songuyen1").value;
  var songuyen3 = document.getElementById("songuyen3").value * 1;
  var songuyen3Value = document.getElementById("songuyen1").value;
  var letters = /^[a-zA-Z\s]+$/;
  var xuatThongBao = document.getElementById("xuatThongBao");
  if (
    songuyen1 <= 0 ||
    songuyen1Value.match(letters) ||
    songuyen2 <= 0 ||
    songuyen2Value.match(letters) ||
    songuyen3 <= 0 ||
    songuyen3Value.match(letters)
  ) {
    alert("Vui lòng nhập chữ số lớn hơn 0 và khác chữ");
  } else {
    if (songuyen1 % 2 == 0 && songuyen2 % 2 == 0 && songuyen3 % 2 == 0) {
      xuatThongBao.innerText = "Có tổng cộng 3 số chẳn ";
    } else if (songuyen1 % 2 != 0 && songuyen2 % 2 == 0 && songuyen3 % 2 == 0) {
      xuatThongBao.innerText =
        "Có tổng cộng 2 số chẳn là " +
        songuyen2 +
        " " +
        songuyen3 +
        "còn 1 lẻ là" +
        songuyen1;
    } else if (songuyen1 % 2 == 0 && songuyen2 % 2 != 0 && songuyen3 % 2 == 0) {
      xuatThongBao.innerText =
        "Có tổng cộng 2 số chẳn là " +
        songuyen1 +
        "và" +
        songuyen3 +
        "còn số lẻ là" +
        songuyen2;
    } else if (songuyen1 % 2 == 0 && songuyen2 % 2 == 0 && songuyen3 % 2 != 0) {
      xuatThongBao.innerText =
        "Có tổng cộng 2 số chẳn là " +
        songuyen1 +
        "và " +
        songuyen2 +
        "còn số lẻ là" +
        songuyen3;
    } else if (songuyen1 % 2 != 0 && songuyen2 % 2 != 0 && songuyen3 % 2 == 0) {
      xuatThongBao.innerText =
        "Có tổng cộng 2 số lẻ là " +
        songuyen1 +
        "và" +
        songuyen2 +
        "số lẻ" +
        songuyen3;
    } else if (songuyen1 % 2 == 0 && songuyen2 % 2 != 0 && songuyen3 % 2 != 0) {
      xuatThongBao.innerText =
        "Có tổng cộng 2 số lẻ là " +
        songuyen2 +
        "và" +
        songuyen3 +
        "còn số chẳn là" +
        songuyen1;
    } else if (songuyen1 % 2 != 0 && songuyen2 % 2 == 0 && songuyen3 % 2 != 0) {
      xuatThongBao.innerText =
        "Có tổng cộng 2 số lẻ là " +
        songuyen1 +
        "và " +
        songuyen3 +
        "còn số chẳn là" +
        songuyen2;
    } else {
      xuatThongBao.innerText = "Tất cả đều là số lẻ";
    }
  }
}
