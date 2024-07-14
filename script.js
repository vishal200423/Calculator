function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let displayValue = document.getElementById('display').value;
    let result;
  
    // Replace constants with actual values
    displayValue = displayValue.replace(/π/g, 'Math.PI');
    displayValue = displayValue.replace(/e/g, 'Math.E');
  
    try {
      result = eval(displayValue);
    } catch (error) {
      result = 'Error';
    }
  
    document.getElementById('display').value = result;
  }
  