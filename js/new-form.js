import { onFormInput as onFormSubmit, resetForm} from './validation-form.js';
import { isEscape } from './util.js';
import { setDefaultScale } from './scale.js';
import { setDefaultEffect } from './effect.js';

const form = document.querySelector('.img-upload__form');
const imageOverlay = form.querySelector('.img-upload__overlay');
const uploadingField = form.querySelector('#upload-file');
const cancelButton = form.querySelector('#upload-cancel');

const closeForm = () => {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadingField.value = '';
  form.querySelector('.text__hashtags').value = '';
  form.querySelector('.text__description').value = '';
  resetForm();
  form.removeEventListener('submit', onFormSubmit);
};

const onCloseButtonClick = () => {
  closeForm();
  cancelButton.removeEventListener('click', onCloseButtonClick);
};

const isNotTarget = (evt) => !evt.target.classList.contains('text__hashtags')
&& !evt.target.classList.contains('text__description');

const onDocumentEscKeyDown = (evt) => {
  if(isEscape(evt) && isNotTarget(evt)){
    onCloseButtonClick();
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

const onUploadingFieldInput = () => {
  setDefaultScale();
  setDefaultEffect();
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  cancelButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentEscKeyDown);
  form.addEventListener('submit', onFormSubmit);
};

uploadingField.addEventListener('input', onUploadingFieldInput);

export {closeForm, onDocumentEscKeyDown};
