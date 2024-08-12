/* ------------------ INTRO ------------------- */

let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },2300);
    })
  })


/* ------------------ HITUNG BMI ------------------- */

var weight = document.getElementById("weight");
var height = document.getElementById("height");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
let resultText = document.querySelector(".comment");
let dlBtnResult = document.querySelector(".dl-btn-bmi");
let resultArticle = document.querySelector(".result-article");
let textInfo = document.querySelector(".text-info");

function calculate(){
 
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
      popup.style.display = "block";
      popupText.innerHTML = `Harap isi semua kolom!`;
  
    }else{
      calcBmi();
    }
  
  }

function calcBmi() {

    var p = [weight.value, height.value, age.value];
    if (male.checked) {
        p.push("male");
    }
    else if (female.checked) {
        p.push("female");
    }

    var bmi = Number(p[0])/(Number(p[1])/100*Number(p[1])/100);

    var result = '';
    if (bmi < 18.5) {
        result = 'Kekurangan berat badan';
    }
    else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'Ideal';
    }
    else if (25 <= bmi && bmi <= 29.9) {
        result = 'Berlebihan berat badan';
    }
    else if (30 <= bmi && bmi <= 34.9) {
        result = 'Obesitas';
    }
    else if (35 <= bmi) {
        result = 'Obesitas Ekstrim';
    }

    
    resultText.style.display = "block";
    dlBtnResult.style.display = "block";
    resultArticle.style.display = "block";
    textInfo.style.display = "none";
    document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

/* ------------------ POPUP ------------------- */

popupContent = document.querySelector(".popup-content");
popupText = document.querySelector("#popupText");
var popup = document.getElementById("mypopup");
var span = document.getElementsByClassName("close")[0];

// Jika klik <span> (x), tutup popup
span.onclick = function() {
    popup.style.display = "none";
}
  
// Jika klik dimanapun diluar popup, tutup popup
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
  