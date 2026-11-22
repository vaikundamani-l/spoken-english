export class QuickQuizController {
  constructor(document, questions) {
    this.document = document;
    this.questions = questions;
    this.index = 0;
    this.answered = false;
  }

  init() {
    this.document.querySelector('#quizNext').addEventListener('click', () => { this.index = (this.index + 1) % this.questions.length; this.render(); });
    this.document.querySelector('#quizStart').addEventListener('click', () => this.document.querySelector('#quizCard').scrollIntoView({ behavior: 'smooth', block: 'center' }));
    this.render();
  }

  render() {
    const current = this.questions[this.index];
    this.answered = false;
    this.document.querySelector('#quizCount').textContent = `${String(this.index + 1).padStart(2, '0')} / ${String(this.questions.length).padStart(2, '0')}`;
    this.document.querySelector('#quizQuestion').textContent = current.question;
    this.document.querySelector('#quizFeedback').textContent = '';
    const next = this.document.querySelector('#quizNext');
    next.hidden = true;
    const options = this.document.querySelector('#quizOptions');
    options.innerHTML = current.options.map((option, index) => `<button class="quiz-option" type="button" data-answer="${index}">${option}</button>`).join('');
    options.querySelectorAll('button').forEach(button => button.addEventListener('click', () => this.answer(Number(button.dataset.answer))));
  }

  answer(choice) {
    if (this.answered) return;
    this.answered = true;
    const current = this.questions[this.index];
    const options = this.document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => { if (index === current.answer) option.classList.add('correct'); });
    if (choice !== current.answer) options[choice].classList.add('wrong');
    this.document.querySelector('#quizFeedback').textContent = `${choice === current.answer ? 'That’s right! ' : 'Not quite. '}${current.explanation}`;
    const next = this.document.querySelector('#quizNext');
    next.textContent = this.index === this.questions.length - 1 ? 'Try again ↻' : 'Next question →';
    next.hidden = false;
  }
}
