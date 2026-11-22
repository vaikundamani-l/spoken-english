import { levels } from './data/levels.js';
import { courses } from './data/courses/index.js';
import { quiz } from './data/quick-quiz.js';
import { ProgressRepository } from './core/progress-repository.js';
import { SpeechService } from './core/speech-service.js';
import { CourseView } from './features/course/course-view.js';
import { CourseController } from './features/course/course-controller.js';
import { QuickQuizController } from './features/quiz/quick-quiz-controller.js';
import { MiniLessonController } from './features/mini-lesson/mini-lesson-controller.js';
import { renderOverallProgress } from './features/progress/overall-progress.js';

const repository = new ProgressRepository(window.localStorage);
const speech = new SpeechService(window.speechSynthesis, window.SpeechSynthesisUtterance);
const refreshProgress = () => renderOverallProgress(document, repository, courses);

new CourseController({
  courses,
  levels,
  repository,
  speech,
  view: new CourseView(document),
  onProgressChange: refreshProgress
}).init(document);

new QuickQuizController(document, quiz).init();
new MiniLessonController(document, repository, refreshProgress).init();

document.querySelector('#year').textContent = new Date().getFullYear();
refreshProgress();
