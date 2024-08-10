var weight = document.getElementById("weight");
var height = document.getElementById("height");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
let resultText = document.querySelector(".comment");

function calc() {
    var p = [weight.value, height.value, age.value];
    if (male.checked) {
        p.push("male");
    }
    else if (female.checked) {
        p.push("female");
    }

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

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