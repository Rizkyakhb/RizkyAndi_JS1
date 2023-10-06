let hari = "Selasa";
let aktivitas;

switch (hari) {
  case "Senin":
    aktivitas = "Kuliah";
    break;
  case "Selasa":
    aktivitas = "Kerja";
    break;
  case "Rabu":
    aktivitas = "Nongkrong";
    break;
  default:
    aktivitas = "Libur";
}

console.log(`Hari ${hari} adalah hari ${aktivitas}`);