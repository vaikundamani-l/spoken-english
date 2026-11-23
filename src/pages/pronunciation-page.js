import { pronunciationPractices } from '../data/pronunciation-practice.js';
import { ProgressRepository } from '../core/progress-repository.js?v=20261123-2';
import { SpeechService } from '../core/speech-service.js';
import { initPage } from '../shared/page-init.js';

initPage(document);
const repository = new ProgressRepository(window.localStorage);
const speech = new SpeechService(window.speechSynthesis, window.SpeechSynthesisUtterance);
let activeIndex = 0;

document.querySelector('#pronunciationList').innerHTML = pronunciationPractices.map((practice,index) => `<button type="button" data-pronunciation="${index}"><span>${String(index + 1).padStart(2,'0')}</span><div><b>${practice.title}</b><small>${practice.tamil}</small></div></button>`).join('');
document.querySelectorAll('[data-pronunciation]').forEach(button => button.addEventListener('click', () => render(Number(button.dataset.pronunciation))));
document.querySelector('#listenPronunciation').addEventListener('click', event => {
  const practice = pronunciationPractices[activeIndex];
  const phrases = [...practice.pairs.flat().map(word => [word.replaceAll('_',' ')]), [practice.sentence]];
  speech.speakPhrases(phrases, () => event.currentTarget.classList.add('speaking'), () => event.currentTarget.classList.remove('speaking'));
});
document.querySelector('#completePronunciation').addEventListener('click', () => {
  repository.completePronunciationPractice(pronunciationPractices[activeIndex].id);
  render(activeIndex);
});

render(0);

function render(index) {
  activeIndex = index;
  const practice = pronunciationPractices[index];
  const progress = repository.getPronunciation();
  document.querySelectorAll('[data-pronunciation]').forEach((button,buttonIndex) => {
    button.classList.toggle('active', buttonIndex === index);
    button.classList.toggle('done', progress.completed.includes(pronunciationPractices[buttonIndex].id));
  });
  document.querySelector('#pronunciationTitle').textContent = practice.title;
  document.querySelector('#pronunciationTamil').textContent = practice.tamil;
  document.querySelector('#pronunciationFocus').textContent = practice.focus;
  document.querySelector('#pronunciationFocusTamil').textContent = practice.focusTamil;
  document.querySelector('#soundPairs').innerHTML = practice.pairs.map(pair => `<div><span>${pair[0].replaceAll('_',' ')}</span><i>vs</i><span>${pair[1].replaceAll('_',' ')}</span></div>`).join('');
  document.querySelector('#pronunciationSentence').textContent = practice.sentence;
  document.querySelector('#pronunciationProgress').textContent = `${progress.completed.length}/${pronunciationPractices.length}`;
  const done = progress.completed.includes(practice.id);
  const button = document.querySelector('#completePronunciation');
  button.disabled = done;
  button.textContent = done ? 'Drill completed ✓' : 'Mark drill complete';
}
