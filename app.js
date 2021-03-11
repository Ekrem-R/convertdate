// Hicri-convert ve miladi-convert fonksiyonlarini require yaptik ve app.js fonksiyonunda kullandik.
const miladiConvert=require("./src/miladi-convert");
const hicriConvert=require("./src/hicri-convert");
console.log("Belirttiginiz hicri takvimin miladiye donusmus hali: "+miladiConvert.hicri("1440-10-10 18:36"));
console.log("Belirttiginiz miladi takvimin hicriye donusmus hali: "+hicriConvert.miladi("2021-03-09 18:08"));