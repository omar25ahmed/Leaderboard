export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  async postScore(playerName, hisScore) {
    const data = {
      score: hisScore,
      user: playerName,
    };
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eGO6BYJoPymcnqAFcKW0/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const no = () => this.score;
    no();
    const resData = await response.json();
    return resData;
  }

  async getScore(ul) {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eGO6BYJoPymcnqAFcKW0/scores/');
    const no = this.score;
    const resData = await response.json();
    const dataArr = resData.result;
    dataArr.forEach((res) => {
      ul.insertAdjacentHTML('beforeend', `<li>${res.user}: ${res.score}</li>`);
    });
    return {
      resData,
      no,
    };
  }
}