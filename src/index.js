import './style.css';
import Score from './modules/score.js';

// Element Selectores
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const listScores = document.querySelector('.gradient-list');
const refresh = document.querySelector('.refresh');
const score = new Score(nameInput.value, scoreInput.value);

// Event Handlers
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