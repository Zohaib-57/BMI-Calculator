function calculateBMI() {
    // Getting the input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const weight = document.getElementById('weight').value;

    // Check if inputs are valid or not
    if (!name || !age || !height || !weight) {
        alert('Please fill in all the fields.');
        return;
    }

    // Calculate BMI using formula
    const bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category 
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

    // Output results
    document.getElementById('result-name').innerHTML = `Name: ${name}`;
    document.getElementById('result-bmi').innerHTML = `BMI: ${bmi}`;
    document.getElementById('result-category').innerHTML = `Category: ${category}`;
}