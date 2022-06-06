//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// console.log("OYUN");
// let min = 0;
// let max = 100;
// let devam;
// do {
//   let hak = 5;
//   const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
//   // console.log(rasgeleSayi);

//   do {
//     // const tahmin = Number(prompt("Lütfen 0-100 arasında bir sayi giriniz:"));
//     hak -= 1;
//     if (tahmin === rasgeleSayi) {
//       console.log(`Tebrikler ${5 - hak}. denemede bildiniz.🥳`);
//       break;
//     } else {
//       console.log(`Dikkat ${hak} hakkınız kaldı`);
//       if (tahmin < rasgeleSayi) {
//         min = tahmin;
//         console.log(`${tahmin} ve ${max} arası`);

//         console.log("ARTTIR ⬆️");
//       } else {
//         console.log("AZALT ⬇️");
//         max = tahmin;
//         console.log(`${min} ve ${tahmin}`);
//       }
//     }
//   } while (hak > 0);

//   if (hak === 0) {
//     console.log("Üzgünüz oyunu kaybettiniz 😔");
//   }

//   devam = prompt("Yeniden oynamak ister misiniz e/h?");
// } while (devam == "e" || devam == "E");

// console.log("Yine bekleriz");

const input = document.querySelector(".input");
const winlose = document.querySelector(".winlose");
const btn = document.querySelector(".btn");
const info = document.querySelector(".info");
const chance = document.querySelector(".chance");
const minmax = document.querySelector(".min-max");
const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
let min = 0;
let max = 100;
let hak = 5;
console.log(chance);
console.log(minmax);
btn.addEventListener("click", () => {
  console.log(rasgeleSayi);

  const tahmin = input.value;
  console.log(input.value);
  hak -= 1;
  if (tahmin == rasgeleSayi) {
    chance.textContent = `Congratulations 🥳`;
    winlose.innerHTML = `<p> YOU WON </p> <p> The Number is: ${rasgeleSayi} `;
    winlose.style.background = "green";
  } else {
    // console.log(`Dikkat ${hak} hakkınız kaldı`);
    chance.textContent = `Be Careful You have ${hak} chance`;

    if (tahmin < rasgeleSayi) {
      min = tahmin;
      minmax.textContent = `Between ${tahmin} and ${max}`;
      console.log(`${tahmin} ve ${max} arası`);

      console.log("ARTTIR ⬆️");
    } else {
      console.log("AZALT ⬇️");
      max = tahmin;
      minmax.textContent = `Between ${min} and ${tahmin}`;
      console.log(`${min} ve ${tahmin}`);
    }
  }

  if (hak === 0 && tahmin != rasgeleSayi) {
    // console.log("Üzgünüz oyunu kaybettiniz 😔");
    winlose.innerHTML = `<p> YOU LOST </p> <p> The Number is: ${rasgeleSayi} `;
    winlose.style.background = "red";
  }
  input.value = "";
});
