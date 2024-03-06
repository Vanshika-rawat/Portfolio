const descriptionBtn = document.querySelectorAll('.arrow-button');

descriptionBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    descriptionBox = btn.nextElementSibling;
    descriptionBox.style.display === "block" ? descriptionBox.style.display = 'none' :
      descriptionBox.style.display = 'block';
  });
});
