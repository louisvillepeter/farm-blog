const mobileMenuBtn = document.querySelector('.toggler');
const menuWrap = document.querySelector('.menu-wrap')
mobileMenuBtn.addEventListener('input', function () {
  if (this.checked) menuWrap.style.zIndex = 1
  else menuWrap.style.zIndex = 0
});