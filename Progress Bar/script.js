const progressBar = document.querySelector('#progress-bar');
const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', function() {
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = progress + '%';
});


