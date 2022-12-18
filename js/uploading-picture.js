const FILE_TYPES = ['jpeg', 'png', 'gif', 'jpg'];

const form = document.querySelector('.img-upload__form');
const preview = form.querySelector('.user-picture');
const fileChooser = form.querySelector('.img-upload__input[type=file]');
const effectsPreview = form.querySelectorAll('.effects__preview');

const onFileChooserChange = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const newPictureUrl = URL.createObjectURL(file);
    preview.src = newPictureUrl;

    effectsPreview.forEach((effect) => { effect.style.backgroundImage = `url(${newPictureUrl})`; });
  }
};

fileChooser.addEventListener('change', onFileChooserChange);
