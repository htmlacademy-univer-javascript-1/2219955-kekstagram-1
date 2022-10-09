import { getRandomArrayElement } from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Осеннее настроение',
  'Пишите, как проходит ваш день)',
  'Мое лето',
  'Лучший день в моей жизни!',
  'За тобой хоть на край света',
  'Прекрасный вечер',
  'Точно особенный день'
];

const NAMES = [
  'Ольга',
  'Кирилл',
  'Андрей',
  'Дарья',
  'Мария',
  'Максим',
  'Евгений',
  'Анастасия',
  'Вера',
  'Анна'
];

let countLikes = {
    MIN: 15,
    MAX: 200
};

MAX_PHOTOS = 25;
MAX_COMMENTS = 6;

//генерируем комментарии
const createComments = (id) => ({
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});
  
const createPhotosData = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(countLikes.MIN, countLikes.MAX),
    comments: Array.from({length: getRandomPositiveInteger(1, MAX_COMMENTS)}).map((element, index) => createComments(index + 1)),
  });
  
const getPhotosData = () => Array.from({length: MAX_PHOTOS}).map((element, index) => createPhotosData(index + 1));
  
export {getPhotosData};