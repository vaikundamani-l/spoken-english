import { listeningPractices } from '../data/listening-practice.js';
import { ProgressRepository } from '../core/progress-repository.js?v=20261123-2';
import { SpeechService } from '../core/speech-service.js';
import { initPage } from '../shared/page-init.js';

initPage(document);
const repository = new ProgressRepository(window.localStorage);
const speech = new SpeechService(window.speechSynthesis, window.SpeechSynthesisUtterance);
let activeIndex = 0;
let answered = false;

document.querySelector('#listeningList').innerHTML = listeningPractices.map((practice,index) => `<button type="button" data-listening="${index}"><span>${practice.level}</span><div><b>${practice.title}</b><small>${practice.tamil}</small></div></button>`).join('');
document.querySelectorAll('[data-listening]').forEach(button => button.addEventListener('click', () => render(Number(button.dataset.listening))));
document.querySelector('#playListening').addEventListener('click', event => {
  const phrases = listeningPractices[activeIndex].lines.map(line => [line.replace(/^[^:]+:\s*/, '')]);
  speech.speakPhrases(phrases, () => event.currentTarget.classList.add('speaking'), () => event.currentTarget.classList.remove('speaking'));
});
document.querySelector('#completeListening').addEventListener('click', () => {
  repository.completeListeningPractice(listeningPractices[activeIndex].id);
  render(activeIndex);
});

render(0);

function render(index) {
  activeIndex = index;
  answered = false;
  const practice = listeningPractices[index];
  const progress = repository.getListening();
  document.querySelectorAll('[data-listening]').forEach((button, buttonIndex) => {
    button.classList.toggle('active', buttonIndex === index);
    button.classList.toggle('done', progress.completed.includes(listeningPractices[buttonIndex].id));
  });
  document.querySelector('#listeningLevel').textContent = practice.level;
  document.querySelector('#listeningTitle').textContent = practice.title;
  document.querySelector('#listeningTamil').textContent = practice.tamil;
  document.querySelector('#listeningContext').textContent = practice.context;
  document.querySelector('#listeningTranscript').innerHTML = practice.lines.map(line => `<p>${line}</p>`).join('');
  document.querySelector('#listeningSummaryTamil').textContent = practice.summaryTamil;
  document.querySelector('#listeningQuestion').textContent = practice.question;
  document.querySelector('#listeningOptions').innerHTML = practice.options.map((option,choice) => `<button type="button" data-listening-choice="${choice}">${option}</button>`).join('');
  document.querySelector('#listeningFeedback').textContent = '';
  document.querySelectorAll('[data-listening-choice]').forEach(button => button.addEventListener('click', () => answer(Number(button.dataset.listeningChoice))));
  document.querySelector('#listeningProgress').textContent = `${progress.completed.length}/${listeningPractices.length}`;
  const done = progress.completed.includes(practice.id);
  const completeButton = document.querySelector('#completeListening');
  completeButton.disabled = done;
  completeButton.textContent = done ? 'Practice completed ✓' : 'Mark practice complete';
}

function answer(choice) {
  if (answered) return;
  answered = true;
  const practice = listeningPractices[activeIndex];
  document.querySelectorAll('[data-listening-choice]').forEach((button,index) => {
    if (index === practice.answer) button.classList.add('correct');
  });
  if (choice !== practice.answer) document.querySelector(`[data-listening-choice="${choice}"]`).classList.add('wrong');
  document.querySelector('#listeningFeedback').textContent = choice === practice.answer ? 'Correct — you caught the key detail.' : 'Not quite. Read the transcript, then listen once more.';
}
