import {renderPhotos} from'./picture.js';
import {sendNewRequest} from './fetch.js';
import './big-picture.js';
import './new-form.js';
import './validation-form.js';
import './scale.js';
import './effect.js';
import './filter.js';

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPhotos(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = () => {
  const messageAlert = document.createElement('div');
  messageAlert.style.position = 'absolute';
  messageAlert.style.left = 0;
  messageAlert.style.top = 0;
  messageAlert.style.right = 0;
  messageAlert.style.textAlign = 'center';
  messageAlert.style.fontSize = '30px';
  messageAlert.style.backgroundColor = 'red';
  messageAlert.style.padding = '10px 5px';
  messageAlert.textContent = 'Ошибка загрузки данных';
  document.body.append(messageAlert);
};
const getAllData = () => photos;

sendNewRequest(onSuccess, onFail, 'GET');

export {getAllData};
