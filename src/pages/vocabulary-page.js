import { vocabularyPacks } from '../data/vocabulary-packs.js';
import { ProgressRepository } from '../core/progress-repository.js?v=20261123-2';
import { SpeechService } from '../core/speech-service.js';
import { initPage } from '../shared/page-init.js';

initPage(document);
const repository = new ProgressRepository(window.localStorage);
const speech = new SpeechService(window.speechSynthesis, window.SpeechSynthesisUtterance);
let activeIndex = 0;

document.querySelector('#vocabularyPackList').innerHTML = vocabularyPacks.map((pack, index) => `<button type="button" data-pack="${index}"><span>${pack.level}</span><div><b>${pack.title}</b><small>${pack.tamil}</small></div><em>${pack.words.length} words</em></button>`).join('');
document.querySelectorAll('[data-pack]').forEach(button => button.addEventListener('click', () => render(Number(button.dataset.pack))));
document.querySelector('#listenVocabulary').addEventListener('click', event => {
  const phrases = vocabularyPacks[activeIndex].words.map(([word,,example]) => [`${word}. ${example}`]);
  speech.speakPhrases(phrases, () => event.currentTarget.classList.add('speaking'), () => event.currentTarget.classList.remove('speaking'));
});
document.querySelector('#completeVocabularyPack').addEventListener('click', () => {
  repository.completeVocabularyPack(vocabularyPacks[activeIndex].id);
  render(activeIndex);
});

render(0);

function render(index) {
  activeIndex = index;
  const pack = vocabularyPacks[index];
  const progress = repository.getVocabulary();
  document.querySelectorAll('[data-pack]').forEach((button, buttonIndex) => {
    button.classList.toggle('active', buttonIndex === index);
    button.classList.toggle('done', progress.completed.includes(vocabularyPacks[buttonIndex].id));
  });
  document.querySelector('#vocabularyLevel').textContent = pack.level;
  document.querySelector('#vocabularyTitle').textContent = pack.title;
  document.querySelector('#vocabularyTamil').textContent = pack.tamil;
  document.querySelector('#vocabularyDescription').textContent = pack.description;
  document.querySelector('#wordGrid').innerHTML = pack.words.map(([word,tamil,example,exampleTamil]) => `<article><div><h3>${word}</h3><span>${tamil}</span></div><p>${example}</p><small>${exampleTamil}</small></article>`).join('');
  document.querySelector('#vocabularyProgress').textContent = `${progress.completed.length}/${vocabularyPacks.length}`;
  const done = progress.completed.includes(pack.id);
  const button = document.querySelector('#completeVocabularyPack');
  button.disabled = done;
  button.textContent = done ? 'Pack completed ✓' : 'Mark pack complete';
}
