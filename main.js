
// const minusButton = document.getElementById('minus');
// const plusButton = document.getElementById('plus');
// const valueSpan = document.getElementById('value');

// let value = 0;


// minusButton.addEventListener('click', () => {
//     value--;
//     valueSpan.textContent = value;
// });

// plusButton.addEventListener('click', () => {
//     value++;  
//     valueSpan.textContent = value; 
// });


// const MIN_VALUE = 0;
// const MAX_VALUE = 10;

// minusButton.addEventListener('click', () => {
//     if (value > MIN_VALUE) {
//         value--;
//         valueSpan.textContent = value;
//     }
// });

// plusButton.addEventListener('click', () => {
//     if (value < MAX_VALUE) {
//         value++;
//         valueSpan.textContent = value;
//     }
// });

// const minusButton = document.getElementById('minus');
// const plusButton = document.getElementById('plus');
// const valueSpan = document.getElementById('value');

// let value = 0;

// const MIN_VALUE = 0;
// const MAX_VALUE = 10;

// minusButton.addEventListener('click', () => {
//     if (value > MIN_VALUE) {
//         value--;  // Уменьшаем значение
//         valueSpan.textContent = value;  // Обновляем отображение
//     }
// });

// plusButton.addEventListener('click', () => {
//     if (value < MAX_VALUE) {
//         value++;  // Увеличиваем значение
//         valueSpan.textContent = value;  // Обновляем отображение
//     }
// });

// const minusButton = document.getElementById('#minus');
// const plusButton = document.getElementById('#plus');
// const valueSpan = document.getElementById('#value');

// let value = 0;

// minusButton.addEventListener('click', () => {
//     value--;  
//     valueSpan.textContent = value;  
// });

// plusButton.addEventListener('click', () => {
//     value++;
//     valueSpan.textContent = value;  
// });




// let count = 0;

// document.getElementById("decreaseBtn").onclick = function(){
//     count-=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function(){
//     count=0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count+=1;
//     document.getElementById("countLabel").innerHTML = count;
// }



const form = document.querySelector(".wrapper");
const input = document.querySelector("#raqam");
const btnMinus = document.querySelector(".minus");
const btnPlus = document.querySelector(".plus");
const num = document.querySelector(".text");

let count = 0;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputQiymati = Number(input.value); 
    num.textContent = inputQiymati;
});


btnMinus.addEventListener("click", () => {
    count--;
    num.textContent = count;
});


btnPlus.addEventListener("click", () => {
    count++;
    num.textContent = count;
});

