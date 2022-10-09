import { getRandomPositiveInteger } from './util.js';

const COUNT_PHOTO = 25;

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

//генерируем комментарии
const createComment = (id) => ({
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
});
  
//создаем данные фото
const createPhotoData = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomPositiveInteger(countLikes.MIN, countLikes.MAX),
    comments: createComment(id)
});
 
//добавляем данные к фотографиям  
const generateData = () => {
    const photos = [];
    for(let i = 0; i < COUNT_PHOTO; i++) {
        photos.push(createPhotoData(i + 1));
    }
    return photos;
}

export {generateData};