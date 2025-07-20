function calculate() {
    // Get input values
    const chemistryInput = document.getElementById('chemistry');
    const hindiInput = document.getElementById('hindi');
    const mathsInput = document.getElementById('maths');
    const physicsInput = document.getElementById('phy');

    const chemistry = parseFloat(chemistryInput.value);
    const hindi = parseFloat(hindiInput.value);
    const maths = parseFloat(mathsInput.value);
    const physics = parseFloat(physicsInput.value);

    const showData = document.getElementById('showdata');

    // Validate inputs
    if (
        isNaN(chemistry) || chemistry < 0 || chemistry > 100 ||
        isNaN(hindi) || hindi < 0 || hindi > 100 ||
        isNaN(maths) || maths < 0 || maths > 100 ||
        isNaN(physics) || physics < 0 || physics > 100
    ) {
        showData.textContent = "Please enter valid marks between 0 and 100 for all subjects.";
        showData.style.color = "#ff4d4d"; // red color for error
        return;
    }

    // Calculate total and percentage
    const total = chemistry + hindi + maths + physics;
    const maxTotal = 400; // Assuming each subject is out of 100
    const percentage = (total / maxTotal) * 100;

    // Display the result
    showData.style.color = "#00ffea"; // reset to normal color
    showData.textContent = `Total Marks: ${total} / ${maxTotal}\nPercentage: ${percentage.toFixed(2)}%`;
}
