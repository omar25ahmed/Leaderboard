import './style.css';
import Score from './modules/score.js';

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

const score = new Score();

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  score(nameInput.value, scoreInput.value);
});
