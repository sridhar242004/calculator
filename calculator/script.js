function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  