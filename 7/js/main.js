import { getPhotosData } from './data.js';
import{ createPhotos } from './render.js';

const arr = getPhotosData();
createPhotos(arr);