function TamGiac() {
  var canha = document.getElementById("canha").value * 1;
  var canhaValue = document.getElementById("canha").value;
  var canhb = document.getElementById("canhb").value * 1;
  var canhbValue = document.getElementById("canhb").value;
  var canhc = document.getElementById("canhc").value * 1;
  var canhcValue = document.getElementById("canhc").value;
  var letters = /^[a-zA-Z\s]+$/;
  var xuatThongBao = document.getElementById("xuatThongBao");
  //   tam giác vuông :

  if (
    canha <= 0 ||
    canhaValue.match(letters) ||
    canhb <= 0 ||
    canhbValue.match(letters) ||
    canhc <= 0 ||
    canhcValue.match(letters)
  ) {
    alert("Vui lòng nhập các cạnh lớn hơn 0 và là chữ số");
  } else {
    if (canha == canhb && canha == canhc && canhb == canhc) {
      xuatThongBao.innerText = "Tam giác đều";
    } else if (canha == canhb || canhb == canhc || canhc == canha) {
      xuatThongBao.innerText = "Tam giác cân";
    } else if (
      Math.pow(canha, 2) == Math.pow(canhb, 2) + Math.pow(canhc, 2) ||
      Math.pow(canhb, 2) == Math.pow(canha, 2) + Math.pow(canhc, 2) ||
      Math.pow(canhc, 2) == Math.pow(canha, 2) + Math.pow(canhb, 2)
    ) {
      xuatThongBao.innerText = "Tam giác vuông";
    } else {
      xuatThongBao.innerText = "Tam giác thường";
    }
  }
}
