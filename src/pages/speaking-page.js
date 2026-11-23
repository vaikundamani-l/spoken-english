import { speakingPractices } from '../data/speaking-practice.js';
import { ProgressRepository } from '../core/progress-repository.js?v=20261123';
import { SpeechService } from '../core/speech-service.js';
import { initPage } from '../shared/page-init.js';

initPage(document);
const repository = new ProgressRepository(window.localStorage);
const speech = new SpeechService(window.speechSynthesis, window.SpeechSynthesisUtterance);
let activeIndex = 0;

document.querySelector('#speakingList').innerHTML = speakingPractices.map((practice, index) => `<button type="button" data-practice="${index}"><span>${String(index + 1).padStart(2, '0')}</span><div><small>${practice.category}</small><b>${practice.title}</b><em>${practice.tamil}</em></div></button>`).join('');
document.querySelectorAll('[data-practice]').forEach(button => button.addEventListener('click', () => render(Number(button.dataset.practice))));
document.querySelector('#listenSpeakingModel').addEventListener('click', event => {
  const practice = speakingPractices[activeIndex];
  speech.speakPhrases([[practice.model]], () => event.currentTarget.classList.add('speaking'), () => event.currentTarget.classList.remove('speaking'));
});
document.querySelector('#completeSpeakingPractice').addEventListener('click', () => {
  repository.completeSpeakingPractice(speakingPractices[activeIndex].id);
  render(activeIndex);
});

render(0);

function render(index) {
  activeIndex = index;
  const practice = speakingPractices[index];
  const done = repository.getSpeaking().completed.includes(practice.id);
  document.querySelectorAll('[data-practice]').forEach((button, buttonIndex) => {
    button.classList.toggle('active', buttonIndex === index);
    button.classList.toggle('done', repository.getSpeaking().completed.includes(speakingPractices[buttonIndex].id));
  });
  document.querySelector('#speakingCategory').textContent = practice.category;
  document.querySelector('#speakingTitle').textContent = practice.title;
  document.querySelector('#speakingTamil').textContent = practice.tamil;
  document.querySelector('#speakingPrompt').textContent = practice.prompt;
  document.querySelector('#speakingModel').textContent = practice.model;
  document.querySelector('#speakingTips').innerHTML = practice.tips.map(tip => `<li>${tip}</li>`).join('');
  const button = document.querySelector('#completeSpeakingPractice');
  button.disabled = done;
  button.textContent = done ? 'Practice completed ✓' : 'Mark practice complete';
  document.querySelector('#speakingProgress').textContent = `${repository.getSpeaking().completed.length}/${speakingPractices.length}`;
}
