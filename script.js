// Ensure everything is loaded before script runs
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('resizeBtn');
  const image = document.getElementById('Slack_IMG');

  button.addEventListener('click', () => {
    image.classList.toggle('resized');
  });
});