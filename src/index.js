import Test from './scripts/test';
import json from './assets/json.json';
import WezomLogo from './assets/images/wezom.png'
import Logo from './assets/images/sprite.svg'
import './styles/style.scss';

const test = new Test('done', WezomLogo);
console.log('index:' + test.title);
console.log('JSON:', json);