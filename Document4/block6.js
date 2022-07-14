var expandButton = document.querySelector('.ReadMore');
var hiddenImages = document.querySelectorAll('.brand-image_hidden');
buttonText = expandButton.querySelector('.text');

expandButton.addEventListener('click', function () {
    if (buttonText.textContent === 'Показать все') {
        for (let i = 0; i < hiddenImages.length; i++) {
            hiddenImages[i].classList.remove('brand-image_hidden');
        }
        buttonText.textContent = 'Скрыть';
    } else {
        for (let i = 0; i < hiddenImages.length; i++) {
            hiddenImages[i].classList.add('brand-image_hidden');
        }
        buttonText.textContent = 'Показать все';
    }
});


