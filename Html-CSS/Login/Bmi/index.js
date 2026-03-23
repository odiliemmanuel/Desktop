const weight = document.getElementById("weight")
const height = document.getElementById("height")
const result = document.getElementById("result")

const KILOGRAM_PER_POUND = 0.4539237;
const METERS_PER_INCH = 0.0254;

function calculate(){
    if(weight.value > 0 && height.value > 0){

        const calculation = weight.value * KILOGRAM_PER_POUND / ((height.value * METERS_PER_INCH) * (height.value * METERS_PER_INCH));
        let bmi = Math.round(calculation * 100) / 100;

        
        let status = "";

        console.log(bmi)


    if(bmi < 18.5){
        status = "Underweight"
    }

    else if(bmi < 25){
        status = "Normal";
    }

    else if(bmi < 30){
        status = "Overweight";      
    }
     
    else{
        status = "Obese";
    }

    result.innerHTML = ` Your Bmi: ${bmi}<br>Your Status: ${status}`;

    }
    
    else{
       result.innerHTML =  "Invalid Entry";
    }

     

   
}
