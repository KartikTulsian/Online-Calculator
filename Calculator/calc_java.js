const input = document.getElementById('current_entry'); // input/output
const lastResult = document.getElementById('history');
const result = document.getElementById('equal'); // control of result
const clear = document.getElementById('ac'); // clear
const del = document.getElementById('delete'); //delete
const sign = document.getElementById('sign_change'); // sign change

// control of numbers
const number = document.querySelectorAll('.number').forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (input.innerText === "NaN") {
            input.innerText = "";
        }
        if (input.innerText === "0") {
            input.innerText = "";
        }
        
        input.innerText += e.target.innerHTML.trim();

    });
});

// control of operators
const operators = document.querySelectorAll('.operator').forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (input.innerText !== "" && !isNaN(input.innerText[input.innerText.length - 1])) {
            input.innerText += "" + e.target.innerHTML.trim() + "";

        }
    });
});

//operations
let history =[]; //history
result.addEventListener("click", function() {  // result
    let expression = input.innerText;
    let resultValue = eval(expression);
    history.pop();
    history.push(expression); //update the history

    lastResult.innerHTML = history.join("");

    input.innerText = parseFloat(resultValue.toFixed(8)); //result 
});


//sign changer
sign.addEventListener("click", function() {
    input.innerText = -parseFloat(input.innerText);
})

//delete the current expression
clear.addEventListener("click", function() {
    input.innerText = "0";
});
//delete the history
clear.addEventListener("dblclick", function() {
    history = [];
    lastResult.innerText="0";
});

//delete the last entry
del.addEventListener("click", function() {
    input.innerText = input.innerText.substring(0, input.innerText.length - 1) || "0";
});



const moon = document.getElementById("moon_icon"); //dark mode
const sun = document.getElementById("sun_icon"); // light mode
const s_icon= document.getElementById("s_icon");
const m_icon= document.getElementById("m_icon");
const calc=document.getElementById("calc");
const work=document.getElementById("work");
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const line5 = document.getElementById('line5');
const box = document.getElementById('box');
const button_box = document.getElementById('button_box');
const body = document.querySelector("body");

//changing the style on dark mode
moon.addEventListener("click", () => {
    moon.style.backgroundColor="azure";
    sun.style.backgroundColor="rgba(13, 11, 40, 0.89)";
    m_icon.style.backgroundColor="azure";
    s_icon.style.backgroundColor="rgba(13, 11, 40, 0.89)";
    calc.style.backgroundColor="rgba(9, 8, 29, 0.89)";
    work.style.backgroundColor = "rgba(24, 19, 66, 0.842)";
    input.style.backgroundColor="rgba(24, 19, 66, 0.842)";
    lastResult.style.backgroundColor="rgba(24, 19, 66, 0.842)";
    line1.style.backgroundColor = "rgba(24, 19, 66, 0.842)";
    line2.style.backgroundColor = "rgba(24, 19, 66, 0.842)";
    line3.style.backgroundColor = "rgba(24, 19, 66, 0.842)";
    line4.style.backgroundColor = "rgba(24, 19, 66, 0.842)";
    line5.style.backgroundColor = "rgba(24, 19, 66, 0.842)";
    box.style.backgroundColor="rgba(24, 19, 66, 0.842)";
    button_box.style.backgroundColor="rgba(24, 19, 66, 0.842)";
    input.style.color="white";
    lastResult.style.color="rgba(255, 255, 255, 0.33)";
    body.style.backgroundColor="rgb(180, 150, 209)";
});

//changing the style on light mode
sun.addEventListener("click", () => {
    sun.style.backgroundColor="azure";
    moon.style.backgroundColor="rgba(13, 11, 40, 0.89)";
    s_icon.style.backgroundColor="azure";
    m_icon.style.backgroundColor="rgba(13, 11, 40, 0.89)";
    calc.style.backgroundColor="rgb(153, 255, 255)";
    work.style.backgroundColor = "rgb(230, 255, 255)";
    input.style.backgroundColor="rgb(230, 255, 255)";
    lastResult.style.backgroundColor="rgb(230, 255, 255)";
    line1.style.backgroundColor = "rgb(230, 255, 255)";
    line2.style.backgroundColor = "rgb(230, 255, 255)";
    line3.style.backgroundColor = "rgb(230, 255, 255)";
    line4.style.backgroundColor = "rgb(230, 255, 255)";
    line5.style.backgroundColor = "rgb(230, 255, 255)";
    box.style.backgroundColor="rgb(230, 255, 255)";
    button_box.style.backgroundColor="rgb(230, 255, 255)";
    input.style.color="rgba(9, 8, 29, 0.89)";
    lastResult.style.color="rgba(9, 8, 29, 0.612)";
    body.style.backgroundColor="rgb(255, 238, 217)";
    
});