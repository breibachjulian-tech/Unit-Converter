// Conversion rates
const CONVERSION_RATES = {
    length: 3.281,      // 1 meter = 3.281 feet
    volume: 0.264,      // 1 liter = 0.264 gallon
    mass: 2.204         // 1 kilogram = 2.204 pounds
};

// Function to round to 3 decimal places
function roundTo3Decimals(num) {
    return Math.round(num * 1000) / 1000;
}

// Function to perform conversions
function performConversion() {
    const inputValue = parseFloat(document.getElementById('numberInput').value);

    // Validate input
    if (isNaN(inputValue) || inputValue === '') {
        document.getElementById('lengthResult').textContent = 'Enter a valid number';
        document.getElementById('volumeResult').textContent = 'Enter a valid number';
        document.getElementById('massResult').textContent = 'Enter a valid number';
        return;
    }

    // Length Conversion
    const lengthInFeet = roundTo3Decimals(inputValue * CONVERSION_RATES.length);
    const metersFromFeet = roundTo3Decimals(inputValue / CONVERSION_RATES.length);
    const lengthText = `${inputValue} meters = ${lengthInFeet} feet | ${inputValue} feet = ${metersFromFeet} meters`;
    document.getElementById('lengthResult').textContent = lengthText;

    // Volume Conversion
    const volumeInGallons = roundTo3Decimals(inputValue * CONVERSION_RATES.volume);
    const litersFromGallons = roundTo3Decimals(inputValue / CONVERSION_RATES.volume);
    const volumeText = `${inputValue} liters = ${volumeInGallons} gallons | ${inputValue} gallons = ${litersFromGallons} liters`;
    document.getElementById('volumeResult').textContent = volumeText;

    // Mass Conversion
    const massInPounds = roundTo3Decimals(inputValue * CONVERSION_RATES.mass);
    const kilosFromPounds = roundTo3Decimals(inputValue / CONVERSION_RATES.mass);
    const massText = `${inputValue} kilos = ${massInPounds} pounds | ${inputValue} pounds = ${kilosFromPounds} kilos`;
    document.getElementById('massResult').textContent = massText;
}

// Event listeners
document.getElementById('convertBtn').addEventListener('click', performConversion);

// Allow conversion on Enter key press
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performConversion();
    }
});

// Perform initial conversion with default value (20)
window.addEventListener('load', function() {
    performConversion();
});
