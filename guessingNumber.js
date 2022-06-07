//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

const input = document.querySelector(".input");
const winlose = document.querySelector(".winlose");
const btn = document.querySelector(".btn");
const info = document.querySelector(".info");
const chance = document.querySelector(".chance");
const minmax = document.querySelector(".min-max");
const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
const reBtn = document.querySelector(".re-btn");
let min = 0;
let max = 100;
let hak = 5;
reBtn.style.display = "none";

btn.addEventListener("click", () => {
  console.log(rasgeleSayi);
  const tahmin = input.value;
  hak -= 1;
  if (tahmin == rasgeleSayi) {
    chance.textContent = `Congratulations 🥳`;
    winlose.innerHTML = `<p> YOU WON </p> <p> The Number is: ${rasgeleSayi} `;
    winlose.style.background = "green";
    btn.style.display = "none";
    reBtn.style.display = "block";
    input.disabled = "true";
  } else {
    chance.textContent = `Be Careful You have ${hak} chance`;

    if (tahmin < rasgeleSayi) {
      min = tahmin;
      minmax.textContent = `Between ${tahmin} and ${max}`;
    } else {
      max = tahmin;
      minmax.textContent = `Between ${min} and ${tahmin}`;
    }
  }

  if (hak === 0 && tahmin != rasgeleSayi) {
    winlose.innerHTML = `<p> YOU LOST </p> <p> The Number is: ${rasgeleSayi} `;
    winlose.style.background = "red";
    btn.style.display = "none";
    reBtn.style.display = "block";
    input.disabled = "true";
  }
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    btn.click();
  }
});

window.addEventListener("load", (event) => {
  reBtn.onclick = function () {
    location.reload(true);
  };
});
