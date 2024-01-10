const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateName);

function updateName() {
  const inputText = nameInput.value.trim();
  const outputText = inputText === '' ? 'Anonymous' : inputText;
  nameOutput.textContent = outputText;
}