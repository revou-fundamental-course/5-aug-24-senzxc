var weight = document.getElementById("weight");
var height = document.getElementById("height");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
let resultText = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate(){
 
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
      modal.style.display = "block";
      modalText.innerHTML = `All fields are required!`;
  
    }else{
      countBmi();
    }
  
  }

function calc() {

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
        result = 'Sehat';
    }
    else if (25 <= bmi && bmi <= 29.9) {
        result = 'Berlebihan berat badan';
    }
    else if (30 <= bmi && bmi <= 34.9) {
        result = 'Obesitas';
    }
    else if (35 <= bmi) {
        result = 'Obesitas brutal';
    }

    
    resultText.style.display = "block";
    document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Jika klik <span> (x), tutup popup
span.onclick = function() {
    modal.style.display = "none";
}
  
// Jika klik dimanapun diluar popup, tutup popup
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  