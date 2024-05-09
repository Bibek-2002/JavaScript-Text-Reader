const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const speedSelector = document.getElementById('speed-selector');
const inputText = document.getElementById('input-text');
const utterance = new SpeechSynthesisUtterance();

utterance.addEventListener('end', () => {
  inputText.disabled = false;
  playButton.disabled = false;
});

utterance.addEventListener('start', () => {
  inputText.disabled = true;
  playButton.disabled = true;
});

playButton.addEventListener('click', () => {
  utterance.text = inputText.value;
  utterance.rate = parseFloat(speedSelector.value);
  speechSynthesis.speak(utterance);
});

pauseButton.addEventListener('click', () => {
  speechSynthesis.pause();
});

stopButton.addEventListener('click', () => {
  speechSynthesis.cancel();
});