import { courses } from '../data/courses/index.js';
import { grammarLessons, grammarModules } from '../data/grammar-lessons.js';
import { speakingPractices } from '../data/speaking-practice.js';
import { vocabularyPacks } from '../data/vocabulary-packs.js';
import { listeningPractices } from '../data/listening-practice.js';
import { pronunciationPractices } from '../data/pronunciation-practice.js';
import { ProgressRepository } from '../core/progress-repository.js?v=20261123-2';
import { initPage } from '../shared/page-init.js';

initPage(document);
const repository = new ProgressRepository(window.localStorage);
const courseDone = courses.reduce((sum, course) => sum + repository.getCourse(course.key).completed.length, 0);
const courseTotal = courses.reduce((sum, course) => sum + course.lessons.length, 0);
const grammarDone = repository.getGrammar().completed.length;
const speakingDone = repository.getSpeaking().completed.length;
const vocabularyDone = repository.getVocabulary().completed.length;
const listeningDone = repository.getListening().completed.length;
const pronunciationDone = repository.getPronunciation().completed.length;
const totalDone = courseDone + grammarDone + speakingDone + vocabularyDone + listeningDone + pronunciationDone;
const totalItems = courseTotal + grammarLessons.length + speakingPractices.length + vocabularyPacks.length + listeningPractices.length + pronunciationPractices.length;
const percent = Math.round(totalDone / totalItems * 100);

setMetric('overall', totalDone, totalItems);
setMetric('course', courseDone, courseTotal);
setMetric('grammar', grammarDone, grammarLessons.length);
setMetric('speaking', speakingDone, speakingPractices.length);
setMetric('vocabulary', vocabularyDone, vocabularyPacks.length);
setMetric('listening', listeningDone, listeningPractices.length);
setMetric('pronunciation', pronunciationDone, pronunciationPractices.length);
document.querySelector('#overallPercent').textContent = `${percent}%`;
document.querySelector('#overallProgressRing').style.background = `conic-gradient(#6552d8 ${percent * 3.6}deg,#e7e5f6 ${percent * 3.6}deg)`;

document.querySelector('#levelProgress').innerHTML = courses.map(course => {
  const done = repository.getCourse(course.key).completed.length;
  const value = Math.round(done / course.lessons.length * 100);
  return `<a href="courses.html?level=${course.key}"><span>${course.key.toUpperCase()}</span><div><b>${course.title}</b><small>${done}/${course.lessons.length} lessons</small><i><em style="width:${value}%"></em></i></div><strong>${value}%</strong></a>`;
}).join('');

document.querySelector('#grammarModuleProgress').innerHTML = grammarModules.map(module => {
  const done = module.lessonIds.filter(id => repository.getGrammar().completed.includes(id)).length;
  return `<div><span>${module.number}</span><p><b>${module.title}</b><small>${done}/${module.lessonIds.length} lessons complete</small></p></div>`;
}).join('');

function setMetric(name, value, total) {
  document.querySelector(`#${name}Done`).textContent = value;
  document.querySelector(`#${name}Total`).textContent = total;
}
