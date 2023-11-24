'use strict';
const score_0 = document.querySelector('#score--0');
const score_1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new')
const current_0 = document.getElementById('current--0');
const current_1 = document.getElementById('current--1');

const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

score_0.textContent = 0;
score_1.textContent = 0;
dice.classList.add('hidden');
let scores, currentscore, activeplayer, isgameplaying;

function init() {
  currentscore = 0;
  activeplayer = 0;
  isgameplaying = true
  scores = [0, 0];
  score_0.textContent = 0;
  score_1.textContent = 0;
  dice.classList.add('hidden');
  document.querySelector('.player--0').classList.add(`player--active`);
  document.querySelector('.player--1').classList.remove(`player--active`);
  document.querySelector('.player--0').classList.remove(`player--winner`);
  document.querySelector('.player--1').classList.remove(`player--winner`);
  document.getElementById(`current--0`).textContent = currentscore;
  document.getElementById(`current--1`).textContent = currentscore;
}
init();
function switchplayer() {
  currentscore = 0;
  document.getElementById(`current--${activeplayer}`).textContent = currentscore;
  activeplayer = activeplayer == 0 ? 1 : 0;
  player_0.classList.toggle(`player--active`);
  player_1.classList.toggle(`player--active`);
}

btn_roll.addEventListener('click', function () {
  if (isgameplaying) {
    const dicerandomnumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${dicerandomnumber}.png`;
    dice.classList.remove('hidden');
    if (dicerandomnumber !== 1) {
      currentscore += dicerandomnumber;
      document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    }
    else {
      //switch player
      switchplayer();
    }
  }
});

btn_hold.addEventListener('click', function () {
  if (isgameplaying) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];


    if (scores[activeplayer] >= 20) {
      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');


      document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
      dice.classList.add('hidden');
      isgameplaying = false;
    }
    else { switchplayer(); }

  }
});

btn_new.addEventListener('click', init)

const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, integers.length]

let findmissingnumber = function () {
  const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, integers.length]

}

























