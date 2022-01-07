function chaoHoi() {
  var selectValue = document.getElementById("chaoHoi").value;
  switch (selectValue) {
    case "B":
      alert("Chào bố");
      break;
    case "M":
      alert("Chào Mẹ");
      break;
    case "T":
      alert("Chào Anh Trai");
      break;
    case "G":
      alert("Chào Gái");
      break;
    default:
      alert("chào tất cả");
      break;
  }
}
