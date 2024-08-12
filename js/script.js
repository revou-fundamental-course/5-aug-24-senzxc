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
let resltBmiSpan = document.querySelector(".result-bmi-span");
let sugestLow = document.querySelector(".sugest-low");
let sugestMid = document.querySelector(".sugest-mid");
let sugestHigh = document.querySelector(".sugest-high");
let sugestVeryHigh = document.querySelector(".sugest-veryhigh");
let sugestText = document.querySelector(".sugest-text");

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
        sugestLow.style.display = "block";
        sugestMid.style.display = "none";
        sugestHigh.style.display = "none";
        sugestVeryHigh.style.display = "none";
        document.querySelector(".result-bmi-span").innerHTML = `Hasil BMI kamu dibawah <span id="result-bmi-span">18.5</span>`;
        document.querySelector(".sugest-text").innerHTML = `Hasil BMI Kamu menunjukkan bahwa Kamu berada dalam kategori kekurangan berat badan. Penting untuk memperhatikan asupan nutrisi dan berkonsultasi dengan ahli gizi untuk mencapai berat badan yang sehat.`;
    }
    else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'Ideal';
        sugestLow.style.display = "none";
        sugestMid.style.display = "block";
        sugestHigh.style.display = "none";
        sugestVeryHigh.style.display = "none";
        document.querySelector(".result-bmi-span").innerHTML = `Hasil BMI kamu diantara <span id="result-bmi-span">18.5</span> dan <span id="result-bmi-span">24.9</span>`;
        document.querySelector(".sugest-text").innerHTML = `Hasil BMI Kamu berada dalam kategori berat badan ideal. Tetap penting untuk menjaga pola makan seimbang dan rutinitas olahraga.`;
    }
    else if (25 <= bmi && bmi <= 29.9) {
        result = 'Berlebihan berat badan';
        sugestLow.style.display = "none";
        sugestMid.style.display = "none";
        sugestHigh.style.display = "block";
        sugestVeryHigh.style.display = "none";
        document.querySelector(".result-bmi-span").innerHTML = `Hasil BMI kamu diantara <span id="result-bmi-span">25</span> dan <span id="result-bmi-span">29.9</span>`;
        document.querySelector(".sugest-text").innerHTML = `Hasil BMI Kamu menunjukkan bahwa Kamu berada dalam kategori kelebihan berat badan. Meski belum mencapai tingkat obesitas, penting untuk mempertimbangkan perubahan gaya hidup sehat untuk mencegah risiko kesehatan lebih lanjut.`;
    }
    else if (30 <= bmi && bmi <= 34.9) {
        result = 'Obesitas';
        sugestLow.style.display = "none";
        sugestMid.style.display = "none";
        sugestHigh.style.display = "none";
        sugestVeryHigh.style.display = "block";
        document.querySelector(".result-bmi-span").innerHTML = `Hasil BMI kamu diantara <span id="result-bmi-span">30</span> dan <span id="result-bmi-span">34.9</span>`;
        document.querySelector(".sugest-text").innerHTML = `Hasil BMI Kamu menunjukkan bahwa Kamu berada dalam kategori obesitas. Disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk mengatur pola makan dan aktivitas fisik guna mencapai berat badan yang lebih sehat.`;
    }
    else if (35 <= bmi) {
        result = 'Obesitas Ekstrim';
        sugestLow.style.display = "none";
        sugestMid.style.display = "none";
        sugestHigh.style.display = "none";
        sugestVeryHigh.style.display = "block";
        document.querySelector(".result-bmi-span").innerHTML = `Hasil BMI kamu diatas <span id="result-bmi-span">35</span>`;
        document.querySelector(".sugest-text").innerHTML = `Hasil BMI Kamu menunjukkan bahwa Kamu berada dalam kategori obesitas ekstrim. Kondisi ini sangat berisiko dan memerlukan perhatian medis segera. Disarankan untuk berkonsultasi dengan dokter untuk rencana penurunan berat badan yang aman dan efektif.`;
    }

    
    textInfo.style.display = "none";
    resultText.style.display = "block";
    dlBtnResult.style.display = "block";
    resultArticle.style.display = "block";
    
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
  