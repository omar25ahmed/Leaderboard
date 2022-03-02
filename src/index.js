import './style.css';
import Score from './modules/score.js';

const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const listScores = document.querySelector('.score-data');
const refresh = document.querySelector('.refresh');
const score = new Score(nameInput.value, scoreInput.value);

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  score.postScore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});

refresh.addEventListener('click', () => {
  window.location.reload();
});

window.addEventListener('load', () => {
  score.getScore(listScores);
});