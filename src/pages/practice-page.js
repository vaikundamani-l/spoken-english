import { grammarLessons } from '../data/grammar-lessons.js';
import { QuickQuizController } from '../features/quiz/quick-quiz-controller.js';
import { initPage } from '../shared/page-init.js';

initPage(document);
const questions = grammarLessons.map(lesson => ({
  question: lesson.question,
  options: lesson.options,
  answer: lesson.answer,
  explanation: lesson.feedback
}));

new QuickQuizController(document, questions).init();
document.querySelector('#practiceQuestionTotal').textContent = questions.length;
