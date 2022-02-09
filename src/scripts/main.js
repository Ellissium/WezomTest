import ProductSlider from './components/product-slider';
import vendor from './vendor/vendor';
import Test from './test';
import json from '../assets/json.json';
import WezomLogo from '../assets/images/wezom.png'
import Sprites from '../assets/images/sprite.svg';

import '../styles/style.scss';

const test = new Test('done', WezomLogo);
console.log('index:' + test.title);
console.log('JSON:', json);