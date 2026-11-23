import { grammarLessons, grammarLessonById, getGrammarModule } from '../data/grammar-lessons.js';
import { ProgressRepository } from '../core/progress-repository.js';
import { SpeechService } from '../core/speech-service.js';
import { initPage } from '../shared/page-init.js';

initPage(document);
const repository = new ProgressRepository(window.localStorage);
const speech = new SpeechService(window.speechSynthesis, window.SpeechSynthesisUtterance);
const params = new URLSearchParams(window.location.search);
const lesson = grammarLessonById.get(params.get('id')) || grammarLessons[0];
const index = grammarLessons.findIndex(item => item.id === lesson.id);
const module = getGrammarModule(lesson.moduleId);
let answered = false;

repository.rememberGrammarLesson(lesson.id);
document.title = `${lesson.title} — SpeakSpring Grammar`;
document.querySelector('#lessonBreadcrumb').textContent = `${module.title} · Lesson ${index + 1}`;
document.querySelector('#grammarLessonTitle').textContent = lesson.title;
document.querySelector('#grammarLessonTamil').textContent = lesson.tamil;
document.querySelector('#lessonDuration').textContent = `${lesson.duration} min`;
document.querySelector('#lessonObjective').textContent = lesson.objective;
document.querySelector('#lessonObjectiveTamil').textContent = lesson.objectiveTamil;
document.querySelector('#lessonExplanation').textContent = lesson.explanation;
document.querySelector('#lessonExplanationTamil').textContent = lesson.explanationTamil;
document.querySelector('#lessonFormula').textContent = lesson.formula;
document.querySelector('#lessonExamples').innerHTML = lesson.examples.map(([english, tamil]) => `<div><b>${english}</b><span>${tamil}</span></div>`).join('');
document.querySelector('#wrongExample').textContent = lesson.mistake[0];
document.querySelector('#rightExample').textContent = lesson.mistake[1];
document.querySelector('#lessonQuestion').textContent = lesson.question;
document.querySelector('#lessonOptions').innerHTML = lesson.options.map((option, choice) => `<button type="button" data-choice="${choice}">${option}</button>`).join('');

document.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => {
  if (answered) return;
  answered = true;
  const choice = Number(button.dataset.choice);
  document.querySelectorAll('[data-choice]').forEach((option, optionIndex) => {
    if (optionIndex === lesson.answer) option.classList.add('correct');
  });
  if (choice !== lesson.answer) button.classList.add('wrong');
  const feedback = document.querySelector('#lessonFeedback');
  feedback.textContent = `${choice === lesson.answer ? 'Correct. ' : 'Not quite. '}${lesson.feedback}`;
}));

const completeButton = document.querySelector('#completeGrammarLesson');
const isComplete = repository.getGrammar().completed.includes(lesson.id);
renderCompleteButton(isComplete);
completeButton.addEventListener('click', () => {
  repository.completeGrammarLesson(lesson.id);
  renderCompleteButton(true);
});

document.querySelector('#listenGrammarExamples').addEventListener('click', event => {
  speech.speakPhrases(lesson.examples, () => event.currentTarget.classList.add('speaking'), () => event.currentTarget.classList.remove('speaking'));
});

const previous = grammarLessons[index - 1];
const next = grammarLessons[index + 1];
const previousLink = document.querySelector('#previousGrammarLesson');
const nextLink = document.querySelector('#nextGrammarLesson');
if (previous) previousLink.href = `grammar-lesson.html?id=${previous.id}`; else previousLink.hidden = true;
if (next) nextLink.href = `grammar-lesson.html?id=${next.id}`; else { nextLink.href = 'grammar.html'; nextLink.textContent = 'Finish grammar path'; }

function renderCompleteButton(done) {
  completeButton.disabled = done;
  completeButton.textContent = done ? 'Lesson completed ✓' : 'Mark lesson complete';
}
