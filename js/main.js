const tryBtn = document.querySelector('.try-btn');
const overlay = document.querySelector('.overlay');
const main = document.querySelector('.main');

tryBtn.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    [overlay, main].forEach((item) => item.classList.remove('hidden'));
  } else {
    document.documentElement.requestFullscreen();
    [overlay, main].forEach((item) => item.classList.add('hidden'));
  }
});
