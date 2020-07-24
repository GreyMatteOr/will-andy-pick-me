var buttonAsk = document.querySelector('#button-1');
var buttonClear = document.querySelector('#button-2');
var input = document.querySelector('input');
var imgEightBall = document.querySelector('#eight-ball-pic');
var output = document.querySelector('#output');

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

buttonAsk.addEventListener('click', askQuestion);

;function askQuestion(){
  imgEightBall.classList.add('hidden');
  output.classList.remove('hidden');
  output.childNodes[1].innerText = input.value;
  output.childNodes[3].innerText = getRandomOutput();
  input.value = '';
};

;function getRandomOutput(){
  var randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};
