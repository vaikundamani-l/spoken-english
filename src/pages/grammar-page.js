import { grammarLessons, grammarModules } from '../data/grammar-lessons.js';
import { ProgressRepository } from '../core/progress-repository.js';
import { initPage } from '../shared/page-init.js';

initPage(document);
const repository = new ProgressRepository(window.localStorage);
const progress = repository.getGrammar();
const completed = new Set(progress.completed);
const percent = Math.round(completed.size / grammarLessons.length * 100);

document.querySelector('#grammarCompleted').textContent = completed.size;
document.querySelector('#grammarTotal').textContent = grammarLessons.length;
document.querySelector('#grammarPercent').textContent = `${percent}%`;
document.querySelector('#grammarProgressBar').style.width = `${percent}%`;

const continueLink = document.querySelector('#continueGrammar');
const nextLesson = grammarLessons.find(lesson => !completed.has(lesson.id)) || grammarLessons[0];
const resumeLesson = progress.lastLesson ? grammarLessons.find(lesson => lesson.id === progress.lastLesson) : nextLesson;
continueLink.href = `grammar-lesson.html?id=${resumeLesson?.id || nextLesson.id}`;
continueLink.textContent = progress.lastLesson ? 'Continue last lesson' : 'Start lesson one';

document.querySelector('#grammarModules').innerHTML = grammarModules.map(module => {
  const lessons = module.lessonIds.map(id => grammarLessons.find(lesson => lesson.id === id));
  const doneCount = lessons.filter(lesson => completed.has(lesson.id)).length;
  return `<section class="grammar-module" id="${module.id}">
    <div class="module-heading">
      <div class="module-number">${module.number}</div>
      <div><span>${module.level}</span><h2>${module.title}</h2><p class="tamil-copy">${module.tamil}</p><p>${module.description}</p></div>
      <strong>${doneCount}/${lessons.length}</strong>
    </div>
    <div class="grammar-lesson-grid">${lessons.map((lesson, index) => {
      const done = completed.has(lesson.id);
      return `<a class="grammar-lesson-card ${done ? 'done' : ''}" href="grammar-lesson.html?id=${lesson.id}">
        <span class="lesson-index">${done ? '✓' : String(index + 1).padStart(2, '0')}</span>
        <div><small>${lesson.duration} MIN</small><h3>${lesson.title}</h3><p>${lesson.tamil}</p></div>
        <span class="card-chevron">›</span>
      </a>`;
    }).join('')}</div>
  </section>`;
}).join('');
