 // --- Configuration ---
    // Set the birth date and time (YYYY-MM-DDTHH:MM:SS)
    const birthDate = new Date('2006-07-21T00:00:00');

    // --- DOM Elements ---
    const ageDisplayElement = document.getElementById('age-display');

    // --- Calculation Constants ---
    // The number of milliseconds in one average year (accounting for leap years)
    const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;

    /**
    * Calculates the age in years from the birth date to now.
    * @returns {number} The calculated age.
    */
    function calculateAge() {
    const now = new Date();
    const timeDifference = now.getTime() - birthDate.getTime();
    return timeDifference / millisecondsInYear;
}

    /**
    * Updates the age displayed on the screen.
    * It formats the number to have 9 decimal places for high precision.
    */
    function updateAgeDisplay() {
    const age = calculateAge();
    // Using toFixed(9) to get the desired precision
    ageDisplayElement.textContent = age.toFixed(9);
}

    // --- Main Execution ---
    // Set an interval to update the age every 50 milliseconds.
    // This creates the effect of a constantly running timer.
    setInterval(updateAgeDisplay, 50);

    // Also, call it once immediately on load so the user doesn't see a blank space.
    updateAgeDisplay();