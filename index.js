var buttonAsk = document.querySelector('#button-1');
var buttonClear = document.querySelector('#button-2');
var buttonFavorite = document.querySelector('#button-3');
var input = document.querySelector('input');
var imgEightBall = document.querySelector('#eight-ball-pic');
var output = document.querySelector('#output');
var sectionFav = document.querySelector('#fav-grid')

var responses = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'];

window.onload = clearForm;
input.addEventListener('keyup', setButtonStatus);
buttonAsk.addEventListener('click', askQuestion);
buttonClear.addEventListener('click', clearForm);
buttonFavorite.addEventListener('click',favorIt);

;function askQuestion(){
  imgEightBall.classList.add('hidden');
  output.classList.remove('hidden');
  buttonAsk.disabled = true;
  buttonClear.disabled = false;
  buttonFavorite.disabled = false;
  output.childNodes[1].innerText = input.value;
  output.childNodes[3].innerText = getRandomOutput();
  input.value = '';
};

;function clearForm(){
  input.value = '';
  imgEightBall.classList.remove('hidden');
  output.classList.add('hidden');
  buttonAsk.disabled = true;
  buttonClear.disabled = true;
  buttonFavorite.disabled = true;
};

;function favorIt(){
  document.querySelector('#fav-title')
          .classList
          .remove('hidden');

  sectionFav.classList.remove('hidden');
  buttonFavorite.disabled = true;
  var currentQuestion = output.childNodes[1].innerText;
  var currentResponse = output.childNodes[3].innerText;
  sectionFav.innerHTML += `
    <h3><span class="italic-text">${currentQuestion}</span>    ${currentResponse}</h3>
  `
};

;function setButtonStatus(){
  buttonAsk.disabled = (input.value === '');
};

;function getRandomOutput(){
  var randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};
