const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = '▶ Play Lagu';
  } else {
    audio.play();
    playButton.textContent = '⏸ Pause Lagu';
  }
  isPlaying = !isPlaying;
});

audio.addEventListener('ended', () => {
  playButton.textContent = '▶ Play Lagu';
  isPlaying = false;
});
