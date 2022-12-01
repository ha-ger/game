let guess = document.querySelector("#guessing");
let score = document.querySelector("#score");
let valueScore = Number(document.querySelector("#sc").textContent);
let number = document.querySelector(".num");
let num = Math.trunc(Math.random() * 20) + 1;
let divnumber = document.querySelector(".number");
number = num;
let high = 0;
let hightext = document.getElementById("high");
console.log(num);
let input = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let numberRandom = document.querySelector(".num");
let scoreDegree = 20;

if (window.sessionStorage.length > 0) {
  hightext.textContent = window.sessionStorage.highScore;
}

btn.addEventListener("click", function () {
  if (scoreDegree > 1) {
    if (input.value !== "") {
      if (input.value > 0 && input.value <= 20) {
        if (input.value > Number(number)) {
          guess.innerHTML = `<i class="fa-regular fa-face-surprise fa-beat-fade white"></i>
                
                very high `;
          scoreDegree--;
          score.innerHTML = `<i class="fa-solid fa-spinner"></i> score : ${scoreDegree}`;
        } else if (input.value < Number(number)) {
          guess.innerHTML = ` <i class="  fa-beat-fade  white   fa-regular fa-face-rolling-eyes"></i> too low`;
          scoreDegree--;
          score.innerHTML = ` <i class="fa-solid fa-spinner"></i>score : ${scoreDegree}`;
        } else if (input.value == Number(number)) {
          guess.innerHTML = ` <i class=" fa-bounce white fa-regular fa-face-laugh-beam "></i>   correct answer`;
          scoreDegree++;
          score.innerHTML = `<i class="fa-solid fa-spinner"></i> score : ${scoreDegree}`;
          numberRandom.textContent = num;
          document.body.style.background = "#111536";
          numberRandom.style.color = "#d8b827";
          input.style.color = "#d8b827 ";
          if (scoreDegree > high) {
            high = scoreDegree;
            hightext.textContent = high;
            window.sessionStorage.setItem("highScore", high);
          }
        }
      } else {
        guess.textContent = "number(1-20)";
      }
    } else {
      guess.innerHTML = `<i  class="fa-spin fa-solid fa-ban red"></i> no number`;
    }
  } else {
    guess.innerHTML = `<i class="fa-regular fa-face-frown red fa-fade "></i> you  lose `;
    score.innerHTML = `<i class="fa-solid fa-spinner"></i> score : 0`;
  }
});

let again = document.querySelector(".again");
again.addEventListener("click", function () {
  window.location.reload();
});
