function calculateBMI(){
    // Selecting the input values...
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
     let height = document.getElementById("height").value/100;
     let weight = document.getElementById("weight").value;
     
    //  checking the valid input
    if (!name || !age || !height || !weight) {
        alert('Please fill in all the fields.');
        return;
    }
                // Calculating the BMI
                const bmi = (weight / (height * height)).toFixed(2);

                // Showcaing the BMI category
                let category;
                if (bmi < 18.5) {
                    category = 'Underweight';
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    category = 'Normal weight';
                } else if (bmi >= 25 && bmi <= 29.9) {
                    category = 'Overweight';
                } else {
                    category = 'Obese';
                }
    
    
}