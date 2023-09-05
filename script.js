document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitOutput = document.getElementById('fahrenheit');
    const convertBtn = document.getElementById('convertBtn');

    convertBtn.addEventListener('click', function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            fahrenheitOutput.textContent = fahrenheitValue.toFixed(2) + " °F";
        } else {
            fahrenheitOutput.textContent = "Invalid input";
        }
    });
});
