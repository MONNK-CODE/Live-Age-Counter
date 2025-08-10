// Set the birth date and time.
const birthDate = new Date('2006-07-21T00:00:00');

const ageElement = document.getElementById('age-counter');

// Calculate the number of milliseconds in an average year (accounting for leap years).
const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;

/**
 * Calculates the current age and updates the display.
 */
function updateAge() {
    // Get the current date and time.
    const now = new Date();

    // Calculate the difference in milliseconds between now and the birth date.
    const ageInMs = now.getTime() - birthDate.getTime();

    // Convert the age from milliseconds to years.
    const ageInYears = ageInMs / MS_IN_YEAR;

    // Update the text content of the display element.
    // .toFixed(9) ensures the age is shown with 9 decimal places for high precision.
    ageElement.textContent = ageInYears.toFixed(9);
}

// Set an interval to run the updateAge function every 50 milliseconds.
// This creates the effect of a rapidly updating counter.
setInterval(updateAge, 50);

// Run the function once immediately on load to prevent initial delay.
updateAge();