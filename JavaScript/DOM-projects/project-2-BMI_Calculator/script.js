const heightInput = document.querySelector("#height")
const weightInput = document.querySelector("#weight")
const result = document.querySelector(".result")
const form = document.querySelector(".form")
const button = document.querySelector("button")

// console.log(heightInput.value);
// console.log(weightInput.value);

form.addEventListener("click",function (e){
    e.preventDefault();

    if(heightInput.value === "" || isNaN(heightInput.value) || 
        weightInput.value === "" || isNaN(weightInput.value)){
            //const errorMsg = document.createTextNode("Please enter valid input!");
            //result.appendChild(errorMsg)
            const errorMsg = "Please enter valid input!!"
            result.innerHTML = errorMsg;
    }else{
        const bmi = (weightInput.value / ((heightInput.value * heightInput.value) / 10000)).toFixed(1);
        
        if(bmi<=18.5){
            const resultMsg = `${bmi} - (Underweight)`
            result.innerHTML = resultMsg
        }else if(bmi>=18.5 && bmi<=24.9){
            const resultMsg = `${bmi} - (Normal Weight)`
            result.innerHTML = resultMsg
        }else if(bmi>=25 && bmi<=29.9){
            const resultMsg = `${bmi} - (OverWeight)`
            result.innerHTML = resultMsg
        }else{
            const resultMsg = `${bmi} - (Obesity)`
            result.innerHTML = resultMsg
        }
        //console.log(bmi);
    }
})
