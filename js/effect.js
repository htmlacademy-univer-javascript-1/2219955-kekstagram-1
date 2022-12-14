const Effects = {
  RADIX: 10,
  MAX_BLUR: 3,
  MAX_HEAT: 3,
  STEP: 0.01,
  MAX_VALUE: 100,
};

const Slider = {
  MAX: Effects.MAX_VALUE,
  MIN: 0,
  STEP: 1,
};

const uploadForm = document.querySelector('.img-upload__form');
const effectsList = uploadForm.querySelector('.effects__list');
const preview = uploadForm.querySelector('.img-upload__preview');
const image = preview.querySelector('img');
const effectLevel = uploadForm.querySelector('.img-upload__effect-level');
const effectLevelValue = uploadForm.querySelector('.effect-level__value');
const slider = uploadForm.querySelector('.effect-level__slider');
const defaultImageClass = image.classList[0];

let currentEffect = '';

noUiSlider.create(slider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  step: Slider.STEP,
  connect: 'lower',
});

const getEffectStep = (effectMaxValue) => effectMaxValue * Effects.STEP;

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');
    return 'none';
  },

  chrome: () => {
    effectLevel.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevelValue.value, Effects.RADIX)* getEffectStep(1)})`;
  },

  sepia: () => {
    effectLevel.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue.value, Effects.RADIX)* getEffectStep(1)})`;
  },

  marvin: () => {
    effectLevel.classList.remove('visually-hidden');
    return `invert(${parseInt(effectLevelValue.value, Effects.RADIX)* getEffectStep(Effects.MAX_VALUE)}%) `;
  },

  phobos: () => {
    effectLevel.classList.remove('visually-hidden');
    return `blur(${parseInt(effectLevelValue.value, Effects.RADIX)* getEffectStep(Effects.MAX_BLUR)}px)`;
  },

  heat: () => {
    effectLevel.classList.remove('visually-hidden');
    const effectMin = Slider.MAX / (Effects.MAX_HEAT - 1);
    return `brightness(${(effectMin + parseInt(effectLevelValue.value, Effects.RADIX))* getEffectStep(Effects.MAX_HEAT - 1)})`;
  },
};

const setDefaultEffect = () => {
  effectLevel.classList.add('visually-hidden');
  uploadForm.querySelector('#effect-none').checked = true;
  image.className = defaultImageClass;
};

const setEffect = (effect) => {
  image.style.filter = effects[effect.replace('effects__preview--','')]();
};

const onEffectsListClick = (evt) => {
  let target = evt.target;

  if(target.classList.contains('effects__label')){
    target = evt.target.querySelector('span');
  }

  if(target.classList.contains('effects__preview')){
    if(currentEffect !== ''){
      image.classList.remove(currentEffect);
    }

    slider.noUiSlider.set(Slider.MAX);
    effectLevelValue.value = Slider.MAX;

    currentEffect = target.classList[1];
    image.classList.add(currentEffect);
    setEffect(currentEffect);
  }
};

const onSliderChange = ()=>{
  effectLevelValue.value = slider.noUiSlider.get();
  setEffect(currentEffect);
};

slider.noUiSlider.on('change', onSliderChange);
effectsList.addEventListener('click', onEffectsListClick);

export {setDefaultEffect};
