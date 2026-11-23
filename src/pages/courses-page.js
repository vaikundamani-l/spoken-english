import { levels } from '../data/levels.js';
import { courses } from '../data/courses/index.js';
import { ProgressRepository } from '../core/progress-repository.js';
import { SpeechService } from '../core/speech-service.js';
import { CourseView } from '../features/course/course-view.js';
import { CourseController } from '../features/course/course-controller.js';
import { initPage } from '../shared/page-init.js';

initPage(document);

const repository = new ProgressRepository(window.localStorage);
const speech = new SpeechService(window.speechSynthesis, window.SpeechSynthesisUtterance);
const controller = new CourseController({
  courses,
  levels,
  repository,
  speech,
  view: new CourseView(document),
  onProgressChange: renderSummary
});

controller.init(document);
renderSummary();

const requestedLevel = new URLSearchParams(window.location.search).get('level');
const requestedIndex = courses.findIndex(course => course.key === requestedLevel);
if (requestedIndex >= 0) controller.open(requestedIndex);

function renderSummary() {
  const completed = courses.reduce((total, course) => total + repository.getCourse(course.key).completed.length, 0);
  const total = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const percent = Math.round(completed / total * 100);
  document.querySelector('#coursesDone').textContent = completed;
  document.querySelector('#coursesPercent').textContent = `${percent}%`;
  document.querySelector('#coursesProgressBar').style.width = `${percent}%`;
}
