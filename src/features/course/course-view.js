export class CourseView {
  constructor(document) {
    this.document = document;
    this.courseSection = document.querySelector('#course');
    this.lessonList = document.querySelector('#lessonList');
  }

  renderLevels(levels, onOpen) {
    const grid = this.document.querySelector('#levelGrid');
    grid.innerHTML = levels.map((item, index) => `<button class="level-card" type="button" aria-label="Open ${item.name} course"><div class="level-meta"><span>${item.level}</span><span class="level-number">0${index + 1}</span></div><h3>${item.name}</h3><p>${item.desc}</p><div class="level-topics">${item.topics.map(topic => `<span>${topic}</span>`).join('')}</div><span class="level-arrow" aria-hidden="true">↗</span></button>`).join('');
    grid.querySelectorAll('.level-card').forEach((card, index) => card.addEventListener('click', () => onOpen(index)));
  }

  openCourse(course) {
    this.document.querySelector('#courseLevelLabel').textContent = course.levelLabel;
    this.document.querySelector('#courseTitle').textContent = course.title;
    this.document.querySelector('#courseSummary').textContent = course.summary;
    this.courseSection.hidden = false;
    this.courseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  renderLessonList(course, activeIndex, progress, onSelect) {
    this.lessonList.setAttribute('aria-label', `${course.levelLabel} lessons`);
    this.lessonList.innerHTML = course.lessons.map((lesson, index) => {
      const done = progress.completed.includes(lesson.id);
      return `<button type="button" data-lesson="${index}" class="${index === activeIndex ? 'active' : ''} ${done ? 'done' : ''}"><span class="lesson-list-number">${done ? '✓' : String(index + 1).padStart(2, '0')}</span><span class="lesson-list-copy"><b>${lesson.title}</b><small>${lesson.tamil}</small></span><span class="lesson-status">${done ? '✓' : ''}</span></button>`;
    }).join('');
    this.lessonList.querySelectorAll('[data-lesson]').forEach(button => button.addEventListener('click', () => onSelect(Number(button.dataset.lesson))));
    const count = progress.completed.length;
    const percent = Math.round(count / course.lessons.length * 100);
    this.document.querySelector('#courseProgressText').textContent = `${count} of ${course.lessons.length} lessons`;
    this.document.querySelector('#courseProgressPercent').textContent = `${percent}%`;
    this.document.querySelector('#courseProgressBar').style.width = `${percent}%`;
  }

  renderLesson(course, lessonIndex, progress, onAnswer) {
    const lesson = course.lessons[lessonIndex];
    this.document.querySelector('#playerLessonNumber').textContent = `LESSON ${String(lessonIndex + 1).padStart(2, '0')}`;
    this.document.querySelector('#playerTitle').textContent = lesson.title;
    this.document.querySelector('#playerTamilTitle').textContent = lesson.tamil;
    this.document.querySelector('#playerGoal').textContent = lesson.goal;
    this.document.querySelector('#playerGoalTamil').textContent = lesson.goalTamil;
    this.document.querySelector('#phraseBoard').innerHTML = lesson.phrases.map(([english, tamil, context]) => `<div class="phrase-card"><b>${english}</b><span>${tamil}</span><small>${context}</small></div>`).join('');
    this.document.querySelector('#playerNote').textContent = lesson.note;
    this.document.querySelector('#playerNoteTamil').textContent = lesson.noteTamil;
    this.document.querySelector('#checkQuestion').textContent = lesson.question;
    this.document.querySelector('#checkOptions').innerHTML = lesson.options.map((option, index) => `<button type="button" data-choice="${index}">${option}</button>`).join('');
    this.document.querySelector('#checkFeedback').textContent = '';
    this.document.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => onAnswer(Number(button.dataset.choice))));
    const done = progress.completed.includes(lesson.id);
    const completeButton = this.document.querySelector('#completeCourseLesson');
    completeButton.disabled = done;
    completeButton.innerHTML = done ? 'Lesson completed <span>✓</span>' : 'Complete lesson <span>✓</span>';
    this.document.querySelector('#nextCourseLesson').innerHTML = lessonIndex === course.lessons.length - 1 ? 'Back to first lesson <span>↻</span>' : 'Next lesson <span>→</span>';
  }

  showAnswer(lesson, choice) {
    this.document.querySelectorAll('[data-choice]').forEach((button, index) => { if (index === lesson.answer) button.classList.add('correct'); });
    if (choice !== lesson.answer) this.document.querySelector(`[data-choice="${choice}"]`).classList.add('wrong');
    this.document.querySelector('#checkFeedback').textContent = choice === lesson.answer ? lesson.feedback : `Not quite. ${lesson.feedback}`;
  }

  closeCourse() {
    this.courseSection.hidden = true;
    this.document.querySelector('#path').scrollIntoView({ behavior: 'smooth' });
  }
}
