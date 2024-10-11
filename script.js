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
}