import Reviews from './components/reviews';
import ProductSlider from './components/product-slider';
import ProductSpoilers from './components/product-spoilers';
import Catalog from './components/catalog';
import StarRating from './components/star-rating';
import PhonePlaceholder from './components/phone-placeholder';
import Vendor from './vendor/vendor';
import Test from './test';
import json from '../assets/json.json';
import WezomLogo from '../assets/images/wezom.png'
import Sprites from '../assets/images/sprite.svg';
import Vector from '../assets/images/vector.svg';

import '../styles/style.scss';

const test = new Test('done', WezomLogo);
console.log('index:' + test.title);
console.log('JSON:', json);